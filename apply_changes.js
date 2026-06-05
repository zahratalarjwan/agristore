const fs = require('fs');

function updateCss() {
    let css = fs.readFileSync('style.css', 'utf8');

    // Root vars for Light Theme
    css = css.replace(/:root\s*\{[\s\S]*?\}/, `:root {
    --bg-dark: #f8fafc;
    --bg-surface: #ffffff;
    --primary: #10b981;
    --primary-glow: rgba(16, 185, 129, 0.2);
    --secondary: #f59e0b;
    --secondary-glow: rgba(245, 158, 11, 0.2);
    --text-light: #1e293b;
    --text-muted: #64748b;
    --glass: rgba(255, 255, 255, 0.95);
    --glass-border: rgba(0, 0, 0, 0.08);
    --radius-lg: 24px;
    --radius-md: 16px;
    --shadow-premium: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
    --font-cairo: 'Cairo', sans-serif;
}`);

    // Update product card background and shadow
    css = css.replace(/\.product-card \{[\s\S]*?\}/, `.product-card {
    background: var(--bg-surface); border: 1px solid var(--glass-border); border-radius: var(--radius-lg);
    overflow: hidden; transition: all 0.4s ease; position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}`);
    css = css.replace(/\.product-card:hover \{[\s\S]*?\}/, `.product-card:hover {
    transform: translateY(-8px); border-color: var(--primary);
    box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.15);
}`);

    // Update texts that were white
    css = css.replace(/color:\s*white;/g, `color: var(--text-light);`);
    css = css.replace(/color:\s*#fff;/g, `color: var(--text-light);`);

    // Except for primary buttons, installation button, badges, etc.
    css = css.replace(/\.btn-primary \{[\s\S]*?\}/, `.btn-primary {
    padding: 1.25rem 3.5rem; background: var(--primary); color: #fff;
    border-radius: 50px; font-weight: 700; font-size: 1.1rem; border: none;
    cursor: pointer; text-decoration: none; transition: all 0.4s ease;
    box-shadow: 0 10px 20px var(--primary-glow); display: inline-block;
}`);

    css = css.replace(/\.btn-install \{[\s\S]*?\}/, `.btn-install {
    padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--primary), #0ea5e9);
    border: none; border-radius: 50px; color: #fff; font-weight: 700; font-size: 0.85rem;
    cursor: pointer; display: flex; align-items: center; gap: 6px; font-family: var(--font-cairo);
    transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}`);

    css = css.replace(/\.whatsapp-share-btn \{[\s\S]*?\}/, `.whatsapp-share-btn {
    width: 50px; background: #25d366; border: 1px solid #25d366; border-radius: 12px;
    color: #fff !important; cursor: pointer; transition: 0.3s;
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}`);

    css = css.replace(/\.add-btn \{[\s\S]*?\}/, `.add-btn {
    width: 100%; padding: 1rem; background: var(--bg-dark);
    border: 1px solid var(--glass-border); border-radius: 12px; color: var(--text-light);
    font-weight: 700; margin-top: 1.5rem; cursor: pointer; transition: 0.3s;
    display: flex; align-items: center; justify-content: center; gap: 0.75rem;
}`);
    css = css.replace(/\.add-btn:hover \{[\s\S]*?\}/, `.add-btn:hover {
    background: var(--primary); border-color: var(--primary); color: #fff;
}`);

    // Specific text colors fix
    css = css.replace(/font-size:\s*1\.25rem;\s*font-weight:\s*800;\s*margin-bottom:\s*1rem;\s*display:\s*block;\s*text-decoration:\s*none;\s*color:\s*var\(--text-light\);/, `font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; display: block; text-decoration: none; color: var(--text-light);`);

    // Modals
    css = css.replace(/background:\s*rgba\(7,\s*11,\s*20,\s*0\.85\);/, `background: rgba(15, 23, 42, 0.6);`); // lighter modal overlay
    css = css.replace(/color:\s*var\(--text-light\);\s*margin-bottom:\s*1rem;\s*text-align:\s*center;/g, `color: var(--text-light); margin-bottom: 1rem; text-align: center;`);

    // Hero Text Colors (needs to be dark on light)
    css = css.replace(/background:\s*linear-gradient\(to bottom, var\(--text-light\), #94a3b8\);/, `background: linear-gradient(to bottom, #1e293b, #475569);`);
    
    // Header
    css = css.replace(/background:\s*rgba\(11,\s*17,\s*32,\s*0\.95\);/, `background: rgba(255, 255, 255, 0.95);`);

    // Footer
    css = css.replace(/background:\s*#070b14;/, `background: #f1f5f9;`);
    
    // Floating WhatsApp
    css = css.replace(/\.whatsapp-float \{[\s\S]*?\}/, `.whatsapp-float {
    position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px;
    background: #25d366; color: #fff !important; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; box-shadow: 0 10px 30px rgba(37,211,102,0.4);
    z-index: 1000; text-decoration: none; transition: 0.3s;
}`);

    fs.writeFileSync('style.css', css, 'utf8');
    console.log("Updated style.css");
}

function updateHtml() {
    let html = fs.readFileSync('index.html', 'utf8');

    // Add Modal if not exists
    if (!html.includes('id="productDetailModal"')) {
        const modalHtml = `
    <!-- Product Details Modal -->
    <div class="modal-overlay" id="productDetailModal">
        <div class="modal-card" style="padding: 0; overflow: hidden; max-width: 500px;">
            <div style="position: relative; height: 350px;">
                <img id="detailImage" src="" style="width: 100%; height: 100%; object-fit: cover;">
                <button onclick="closeProductModal()" style="position: absolute; top: 15px; right: 15px; width: 40px; height: 40px; border-radius: 50%; border: none; background: rgba(255,255,255,0.9); color: #ef4444; font-size: 1.2rem; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="padding: 2rem; background: var(--bg-surface);">
                <span id="detailCat" style="color: var(--primary); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;"></span>
                <h2 id="detailName" style="font-size: 1.5rem; font-weight: 800; color: var(--text-light); margin-bottom: 0.5rem;"></h2>
                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 1rem;">
                    <span id="detailPrice" style="font-size: 1.5rem; font-weight: 900; color: var(--secondary);"></span>
                    <del id="detailOldPrice" style="font-size: 1rem; color: var(--text-muted); display: none;"></del>
                </div>
                <p id="detailDesc" style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;"></p>
                <div style="display: flex; gap: 10px;">
                    <button id="detailAddBtn" class="btn-primary" style="flex: 1; padding: 1rem; color: #fff; display: flex; align-items: center; justify-content: center; gap: 10px;"></button>
                    <button id="detailShareBtn" class="btn-primary" style="background: #25d366; box-shadow: none; padding: 1rem 1.5rem; color: #fff;"><i class="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>
        </div>
    </div>
`;
        html = html.replace('<!-- Story Viewer Modal -->', modalHtml + '\n    <!-- Story Viewer Modal -->');
    }
    
    // Change top bar background from Dark to Light overlay
    html = html.replace(/<meta name="theme-color" content="#0b1120">/, `<meta name="theme-color" content="#ffffff">`);

    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Updated index.html");
}

function updateJs() {
    let js = fs.readFileSync('script.js', 'utf8');

    // 1. Add checkDeepLink in init
    if (!js.includes('checkDeepLink()')) {
        js = js.replace(/checkPaymentCallback\(\);/, `checkPaymentCallback();\n    checkDeepLink();`);
    }

    // 2. Modify product grid cards to click and open modal
    js = js.replace(/<div class="product-img">/g, `<div class="product-img" onclick="openProductModal(\${p.id})" style="cursor: pointer;">`);
    js = js.replace(/<a href="#" class="product-name">/g, `<a href="javascript:void(0)" onclick="openProductModal(\${p.id})" class="product-name">`);
    js = js.replace(/<a href="#" class="product-name"/g, `<a href="javascript:void(0)" onclick="openProductModal(\${p.id})" class="product-name"`);

    // 3. Add Modal Logic
    if (!js.includes('function openProductModal')) {
        const modalJs = `
function openProductModal(id) {
    const p = products.find(prod => prod.id == id);
    if (!p) return;
    
    const detailImage = document.getElementById('detailImage');
    if (detailImage) detailImage.src = p.image;
    
    const detailCat = document.getElementById('detailCat');
    if (detailCat) detailCat.textContent = p.category;
    
    const detailName = document.getElementById('detailName');
    if (detailName) detailName.textContent = p.name;
    
    const displayPrice = p.offerPrice ? p.offerPrice : p.price;
    const detailPrice = document.getElementById('detailPrice');
    if (detailPrice) detailPrice.textContent = Number(displayPrice).toFixed(3) + ' ر.ع';
    
    const oldPriceEl = document.getElementById('detailOldPrice');
    if (oldPriceEl) {
        if (p.offerPrice && p.offerPrice < p.price) {
            oldPriceEl.textContent = Number(p.price).toFixed(3) + ' ر.ع';
            oldPriceEl.style.display = 'inline';
        } else {
            oldPriceEl.style.display = 'none';
        }
    }
    
    const detailDesc = document.getElementById('detailDesc');
    if (detailDesc) detailDesc.textContent = p.desc || 'لا يوجد وصف متاح لهذا المنتج.';
    
    const addBtn = document.getElementById('detailAddBtn');
    if (addBtn) {
        if (p.stock <= 0) {
            addBtn.disabled = true;
            addBtn.innerHTML = 'نفذت الكمية';
            addBtn.style.opacity = '0.5';
        } else {
            addBtn.disabled = false;
            addBtn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> أضف للسلة';
            addBtn.style.opacity = '1';
            addBtn.onclick = () => {
                addToCart(p.id);
                closeProductModal();
            };
        }
    }
    
    const shareBtn = document.getElementById('detailShareBtn');
    if (shareBtn) {
        shareBtn.onclick = () => shareProductOnWhatsApp(p.id);
    }
    
    const modal = document.getElementById('productDetailModal');
    if (modal) modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('productDetailModal');
    if (modal) modal.classList.remove('active');
}

function checkDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('productId');
    if (productId) {
        setTimeout(() => openProductModal(productId), 800);
        
        // Clean URL to avoid reopening on refresh
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
        window.history.replaceState({path: newUrl}, '', newUrl);
    }
}
`;
        js += '\n' + modalJs;
    }

    // 4. Update shareProductOnWhatsApp
    js = js.replace(/function shareProductOnWhatsApp\(id\) \{[\s\S]*?window\.open\(whatsappUrl, '_blank'\);\n\}/, `function shareProductOnWhatsApp(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;

    const price = product.offerPrice ? product.offerPrice : product.price;
    const storeUrl = window.location.href.split('#')[0].split('?')[0]; 
    
    let message = \`*🌿 منتج مميز من متجر زهرة الارجوان*%0A%0A\`;
    message += \`*الاسم:* \${product.name}%0A\`;
    message += \`*السعر:* \${Number(price).toFixed(3)} ر.ع%0A\`;
    if (product.desc) message += \`*الوصف:* \${product.desc}%0A\`;
    message += \`%0A🔗 *رابط الشراء:* \${storeUrl}?productId=\${id}#products%0A\`;
    message += \`%0Aتصفح المزيد في متجرنا! ✨\`;

    const whatsappUrl = \`https://wa.me/?text=\${message}\`;
    window.open(whatsappUrl, '_blank');
}`);

    fs.writeFileSync('script.js', js, 'utf8');
    console.log("Updated script.js");
}

try {
    updateCss();
    updateHtml();
    updateJs();
    console.log("All changes applied successfully!");
} catch (e) {
    console.error("Error applying changes:", e);
}
