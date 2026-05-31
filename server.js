const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const CONFIG_FILE = path.join(__dirname, 'config.json');

app.use(cors());
app.use(express.json());

// Serve static website files from the current directory
app.use(express.static(__dirname));

// Initialize default config if not exists
if (!fs.existsSync(CONFIG_FILE)) {
    const defaultConfig = {
        ompay_enabled: false,
        ompay_mode: "sandbox",
        ompay_client_id: "",
        ompay_client_secret: ""
    };
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(defaultConfig, null, 4));
}

// Helper to read configuration
function readConfig() {
    try {
        const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
        return JSON.parse(raw);
    } catch (e) {
        console.error('Error reading config:', e);
        return {};
    }
}

// Helper to write configuration
function writeConfig(config) {
    try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 4));
        return true;
    } catch (e) {
        console.error('Error writing config:', e);
        return false;
    }
}

// Authentication middleware for admin API
function adminAuth(req, res, next) {
    const token = req.headers['x-admin-token'];
    if (token === 'Asdf@#$1234') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized. Invalid admin token.' });
    }
}

// GET admin settings (OmPay credentials)
app.get('/api/admin/settings', adminAuth, (req, res) => {
    const config = readConfig();
    res.json(config);
});

// POST admin settings (OmPay credentials)
app.post('/api/admin/settings', adminAuth, (req, res) => {
    const { ompay_enabled, ompay_mode, ompay_client_id, ompay_client_secret } = req.body;
    
    const config = {
        ompay_enabled: ompay_enabled === true || ompay_enabled === 'true',
        ompay_mode: ompay_mode === 'production' ? 'production' : 'sandbox',
        ompay_client_id: ompay_client_id || "",
        ompay_client_secret: ompay_client_secret || ""
    };
    
    if (writeConfig(config)) {
        res.json({ success: true, message: 'Settings saved successfully' });
    } else {
        res.status(500).json({ error: 'Failed to write settings file' });
    }
});

// POST check if OmPay is enabled (unauthenticated endpoint for frontend UI toggles)
app.get('/api/ompay-status', (req, res) => {
    const config = readConfig();
    res.json({
        enabled: config.ompay_enabled,
        mode: config.ompay_mode
    });
});

// POST create checkout link (communicates with OmPay API)
app.post('/api/create-checkout', async (req, res) => {
    const { amount, description, origin } = req.body;
    const config = readConfig();

    if (!config.ompay_enabled) {
        return res.status(400).json({ error: 'OmPay payment gateway is currently disabled' });
    }

    if (!config.ompay_client_id || !config.ompay_client_secret) {
        return res.status(400).json({ error: 'OmPay is not configured properly. Missing Client ID or Client Secret.' });
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    const mode = config.ompay_mode;
    const apiBaseUrl = mode === 'production' 
        ? 'https://api.gateway.ompay.com' 
        : 'https://api.uat.gateway.ompay.com';
        
    const hostedCheckoutBaseUrl = mode === 'production'
        ? 'https://merchant.gateway.ompay.com/cpbs/pg'
        : 'https://merchant.uat.gateway.ompay.com/cpbs/pg';

    const authHeader = 'Basic ' + Buffer.from(`${config.ompay_client_id}:${config.ompay_client_secret}`).toString('base64');

    try {
        // OmPay Order Create payload
        const payload = {
            amount: parseFloat(parseFloat(amount).toFixed(3)), // 3 decimal places for OMR
            currency: 'OMR',
            uiMode: 'checkout',
            description: description || 'طلب من متجر زهرة الارجوان'
        };

        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        
        const response = await fetch(`${apiBaseUrl}/nac/api/v1/pg/orders/create-checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
            },
            body: JSON.stringify(payload)
        });

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse response JSON:', text);
            return res.status(502).json({ error: 'Failed to communicate with OmPay gateway. Invalid JSON response.' });
        }

        if (response.ok && data.orderId) {
            // Build the final redirect URL to our payment callback page on the frontend
            const webOrigin = origin || `http://localhost:${PORT}`;
            const redirectUrl = `${webOrigin}/index.html?payment=status&orderId=${data.orderId}`;
            
            // Build the OmPay hosted checkout page link
            const checkoutLink = `${hostedCheckoutBaseUrl}?actionType=checkout&orderId=${data.orderId}&redirectUrl=${encodeURIComponent(redirectUrl)}&clientId=${config.ompay_client_id}`;
            
            res.json({
                success: true,
                orderId: data.orderId,
                checkoutLink: checkoutLink
            });
        } else {
            console.error('OmPay API Error:', data);
            res.status(response.status || 400).json({ 
                error: data.errMessage || 'Failed to create payment checkout order',
                details: data
            });
        }
    } catch (error) {
        console.error('Checkout creation error:', error);
        res.status(500).json({ error: 'Internal server error while creating checkout' });
    }
});

// GET query order status (communicates with OmPay API check-status endpoint)
app.get('/api/check-status', async (req, res) => {
    const { orderId } = req.query;
    const config = readConfig();

    if (!orderId) {
        return res.status(400).json({ error: 'orderId is required' });
    }

    if (!config.ompay_client_id || !config.ompay_client_secret) {
        return res.status(400).json({ error: 'OmPay is not configured properly.' });
    }

    const mode = config.ompay_mode;
    const apiBaseUrl = mode === 'production' 
        ? 'https://api.gateway.ompay.com' 
        : 'https://api.uat.gateway.ompay.com';

    const authHeader = 'Basic ' + Buffer.from(`${config.ompay_client_id}:${config.ompay_client_secret}`).toString('base64');

    try {
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        
        const response = await fetch(`${apiBaseUrl}/nac/api/v1/pg/orders/check-status?orderId=${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
            }
        });

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse status response JSON:', text);
            return res.status(502).json({ error: 'Invalid response from OmPay Status check.' });
        }

        if (response.ok) {
            res.json({
                success: true,
                orderId: data.orderId,
                status: data.status, // "success", "failure", etc.
                receiptId: data.receiptId || null,
                resCode: data.resCode,
                errMessage: data.errMessage || ''
            });
        } else {
            console.error('OmPay Status check error:', data);
            res.status(response.status || 400).json({
                error: data.errMessage || 'Failed to check order status',
                details: data
            });
        }
    } catch (error) {
        console.error('Status check error:', error);
        res.status(500).json({ error: 'Internal server error while checking status' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Zahrat Alarjwan backend server running at http://localhost:${PORT}`);
});
