// --- Configuration & State ---
let products = JSON.parse(localStorage.getItem('aljawan_products')) || [];
let cart = JSON.parse(localStorage.getItem('aljawan_cart')) || [];
let slider = JSON.parse(localStorage.getItem('aljawan_slider')) || [];
let coupons = JSON.parse(localStorage.getItem('aljawan_coupons')) || [];
let currentCategory = 'الكل';
let appliedCoupon = null;

// Default products if none exist
if (products.length === 0) {
    products = [
        { id: 1, name: "سماد النخيل المتكامل", category: "أسمدة", price: 12.500, offerPrice: 10.900, stock: 50, image: "glassy_botanical_hero.png", desc: "تركيبة خاصة لنخيل التمور تعزز الإنتاجية وتقوي الجذور.", inStock: true },
        { id: 2, name: "بذور الطماطم الهجينة", category: "بذور", price: 3.200, offerPrice: null, stock: 5, image: "agricultural_glass_hero.png", desc: "بذور مقاومة للأمراض تعطي إنتاجاً وفيراً في ظروفنا المناخية.", inStock: true },
        { id: 3, name: "مبيد حشري عضوي", category: "مبيدات", price: 8.750, offerPrice: 7.500, stock: 12, image: "matjarna_hero_luxury_1778254117070.png", desc: "مبيد آمن وفعال مصنوع من مواد طبيعية 100%.", inStock: true }
    ];
    localStorage.setItem('aljawan_products', JSON.stringify(products));
}

// --- Core Functions ---

function init() {
    renderSlider();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    startFlashSaleCountdown();
    loadDynamicSettings();
    renderNewProductsSlider();
    startFomoPopups();
    checkOmPayStatus();
    checkPaymentCallback();
    renderStories();
    initPwaInstall();
    checkUrlForProduct();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }

    // Hide Preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }
    }, 1000);
}

function setupEventListeners() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('mainHeader');
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

// --- Slider Logic ---
let currentSlide = 0;
let sliderInterval;

function renderSlider() {
    const wrapper = document.getElementById('heroSliderWrapper');
    const dotsContainer = document.getElementById('sliderDots');
    if (!wrapper || !dotsContainer) return;

    // Use admin slider data if available, otherwise use defaults
    const slidesData = slider.length > 0 ? slider : [
        {
            title: "زهرة الارجوان | تميز زراعي بلا حدود",
            desc: "وجهتك الأولى لأجود المستلزمات الزراعية، البذور، والأسمدة في سلطنة عمان.",
            image: "matjarna_hero_luxury_1778254117070.png",
            link: "#products"
        }
    ];

    wrapper.innerHTML = slidesData.map((s, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}">
            <div class="hero" style="background-image: linear-gradient(to bottom, rgba(11, 17, 32, 0.6), var(--bg-dark)), url('${s.image}')">
                <div class="hero-content" data-aos="zoom-out">
                    <h1>${s.title}</h1>
                    <p>${s.desc}</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="${s.link || '#products'}" class="btn-primary">استعرض الآن</a>
                        <a href="https://wa.me/96896017822" class="btn-primary" style="background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); box-shadow: none;">استشارة المهندس</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    dotsContainer.innerHTML = slidesData.map((_, i) => `
        <div class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
    `).join('');

    startAutoPlay();
}

function moveSlide(delta) {
    const slides = document.querySelectorAll('.slide');
    goToSlide((currentSlide + delta + slides.length) % slides.length);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0 || dots.length === 0) return;

    currentSlide = index;
    
    // Toggle active class for slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    // Toggle active class for dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });

    // Re-trigger AOS for the new active slide
    if (typeof AOS !== 'undefined') {
        const activeContent = slides[currentSlide].querySelector('.hero-content');
        if (activeContent) {
            activeContent.classList.remove('aos-animate');
            setTimeout(() => activeContent.classList.add('aos-animate'), 50);
        }
    }

    resetAutoPlay();
}

function startAutoPlay() {
    sliderInterval = setInterval(() => moveSlide(1), 5000);
}

function resetAutoPlay() {
    clearInterval(sliderInterval);
    startAutoPlay();
}

function renderProducts(filter = 'الكل', searchTerm = '') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let filtered = products;
    if (filter !== 'الكل') {
        filtered = products.filter(p => p.category === filter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.includes(searchTerm) || 
            (p.desc && p.desc.includes(searchTerm)) || 
            p.category.includes(searchTerm)
        );
    }

    grid.innerHTML = filtered.map(p => {
        const displayPrice = p.offerPrice ? p.offerPrice : p.price;
        const hasOffer = p.offerPrice !== null && p.offerPrice < p.price;
        const lowStock = p.stock > 0 && p.stock < 10;
        const outOfStock = p.stock <= 0;

        return `
            <div class="product-card" data-aos="fade-up">
                <div class="product-img" onclick="openProductModal(${p.id})" style="cursor: pointer;">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='glassy_botanical_hero.png'">
                    ${hasOffer ? `<span style="position:absolute; top:15px; right:15px; background:var(--secondary); color:var(--bg-dark); padding:5px 12px; border-radius:50px; font-weight:800; font-size:0.8rem;">خصم</span>` : ''}
                    ${outOfStock ? `<span style="position:absolute; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; font-weight:900; color:#ef4444; font-size:1.2rem;">نفذت الكمية</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-meta-row">
                        <span class="product-cat">${p.category}</span>
                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                            <span class="rating-value">(4.8)</span>
                        </div>
                    </div>
                    <a href="#" class="product-name" onclick="openProductModal(${p.id}); return false;">${p.name}</a>
                    <div class="product-price-row">
                        <div class="price-container">
                            <span class="product-price ${hasOffer ? 'has-offer' : ''}">${Number(displayPrice).toFixed(3)} ر.ع</span>
                            ${hasOffer ? `<del class="original-price">${Number(p.price).toFixed(3)} ر.ع</del>` : ''}
                        </div>
                        <span class="stock-status ${outOfStock ? 'out' : (lowStock ? 'low' : 'in')}">
                            ${outOfStock ? 'غير متوفر' : (lowStock ? `باقي ${p.stock}` : 'متوفر')}
                        </span>
                    </div>
                    <div class="product-actions">
                        <button class="add-btn" onclick="addToCart(${p.id})" ${outOfStock ? 'disabled' : ''}>
                            <i class="fa-solid fa-cart-plus"></i>
                            <span class="add-btn-text">${outOfStock ? 'غير متوفر' : 'إضافة للسلة'}</span>
                        </button>
                        <button class="whatsapp-share-btn" onclick="shareProductOnWhatsApp(${p.id})">
                            <i class="fa-brands fa-whatsapp"></i>
                            <span class="share-btn-text">مشاركة</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterCategory(cat, el) {
    currentCategory = cat;
    document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
    if (el) el.classList.add('active');
    renderProducts(cat);
}

function searchProducts() {
    const term = document.getElementById('productSearch').value;
    renderProducts(currentCategory, term);
}

function addToCart(id) {
    const product = products.find(p => p.id == id);
    if (!product || product.stock <= 0) return;

    const existing = cart.find(item => item.id == id);
    if (existing) {
        if (existing.quantity < product.stock) {
            existing.quantity++;
        } else {
            showToast('عذراً، لا توجد كمية كافية في المخزون');
            return;
        }
    } else {
        const priceToUse = product.offerPrice ? product.offerPrice : product.price;
        cart.push({ ...product, price: priceToUse, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`تمت إضافة ${product.name} إلى السلة`);
    
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.classList.add('bounce');
    setTimeout(() => cartBtn.classList.remove('bounce'), 500);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id != id);
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(item => item.id == id);
    const product = products.find(p => p.id == id);
    if (item && product) {
        const newQty = item.quantity + delta;
        if (newQty > 0 && newQty <= product.stock) {
            item.quantity = newQty;
            saveCart();
            updateCartUI();
        } else if (newQty <= 0) {
            removeFromCart(id);
        } else {
            showToast('وصلت للحد الأقصى للمخزون');
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const totalAmount = document.getElementById('totalAmount');
    
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCount) cartCount.textContent = count;
    const mobileCartCount = document.getElementById('mobileCartCount');
    if (mobileCartCount) mobileCartCount.textContent = count;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<div style="text-align:center; padding: 2rem; color: var(--text-muted);">السلة فارغة حالياً</div>`;
        totalAmount.textContent = "0.000 ر.ع";
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='glassy_botanical_hero.png'">
            <div style="flex: 1;">
                <h4 style="font-size: 0.95rem; margin-bottom: 0.25rem;">${item.name}</h4>
                <div style="color: var(--secondary); font-weight: 700;">${(item.price * item.quantity).toFixed(3)} ر.ع</div>
                <div class="qty-ctrl">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <i class="fa-solid fa-trash" style="color: #ef4444; cursor: pointer;" onclick="removeFromCart(${item.id})"></i>
        </div>
    `).join('');

    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // Apply Coupon if any
    if (appliedCoupon) {
        const discount = subtotal * (appliedCoupon.percent / 100);
        subtotal -= discount;
    }

    totalAmount.textContent = subtotal.toFixed(3) + " ر.ع";
}

function applyCoupon() {
    const codeInput = document.getElementById('couponCode');
    if (!codeInput) return;
    const code = codeInput.value.toUpperCase().trim();
    const found = coupons.find(c => c.code === code);
    
    if (found) {
        appliedCoupon = found;
        showToast(`تم تطبيق خصم ${found.percent}% بنجاح!`);
        updateCartUI();
    } else {
        showToast('كود الخصم غير صحيح أو منتهي');
    }
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
}

function saveCart() {
    localStorage.setItem('aljawan_cart', JSON.stringify(cart));
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function sendToWhatsApp() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const loc = document.getElementById('custLoc').value.trim();

    if (!name || !phone || !loc) {
        showToast('يرجى تعبئة جميع البيانات لإتمام الطلب');
        return;
    }

    if (cart.length === 0) {
        showToast('سلة المشتريات فارغة');
        return;
    }

    let message = `*🌿 طلب جديد من متجر زهرة الارجوان*%0A`;
    message += `👤 *الاسم:* ${name}%0A`;
    message += `📱 *الهاتف:* ${phone}%0A`;
    message += `📍 *الموقع:* ${loc}%0A`;
    if (appliedCoupon) message += `🎟️ *كوبون الخصم:* ${appliedCoupon.code} (${appliedCoupon.percent}%)%0A`;
    message += `----------------------------%0A`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}* (عدد ${item.quantity}) = ${(item.price * item.quantity).toFixed(3)} ر.ع%0A`;
    });
    
    message += `----------------------------%0A`;
    message += `💰 *الإجمالي النهائي:* ${document.getElementById('totalAmount').textContent}%0A`;
    
    // Save Order Locally for Admin (New Feature)
    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleDateString('ar-OM'),
        customer: name,
        phone: phone,
        items: cart.map(i => `${i.name} (x${i.quantity})`).join(', '),
        total: document.getElementById('totalAmount').textContent,
        status: 'قيد الانتظار'
    };
    const orders = JSON.parse(localStorage.getItem('aljawan_orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('aljawan_orders', JSON.stringify(orders));

    const settings = JSON.parse(localStorage.getItem('aljawan_settings')) || { whatsapp: '96896017822' };
    const storePhone = settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '');

    const whatsappUrl = `https://wa.me/${storePhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function shareProductOnWhatsApp(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;

    const price = product.offerPrice ? product.offerPrice : product.price;
    // Strip query parameters to get base URL
    const storeUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${storeUrl}?product=${product.id}`;
    
    let message = `*🌿 منتج مميز من متجر زهرة الارجوان*%0A%0A`;
    message += `*الاسم:* ${product.name}%0A`;
    message += `*السعر:* ${Number(price).toFixed(3)} ر.ع%0A`;
    if (product.desc) message += `*الوصف:* ${product.desc}%0A`;
    message += `%0A🔗 *رابط المنتج المباشر:* ${shareUrl}%0A`;
    message += `%0Aتصفح واشترِ المنتج الآن! ✨`;

    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Flash Sale Countdown Logic
function startFlashSaleCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    let time = 12 * 3600 + 45 * 60; // 12h 45m in seconds
    setInterval(() => {
        if (time <= 0) return;
        time--;
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        countdownEl.textContent = `ينتهي خلال: ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

// Mobile Menu Placeholder
function toggleMobileMenu() {
    const nav = document.getElementById('desktopNav');
    nav.classList.toggle('mobile-active');
}

// Run Init
document.addEventListener('DOMContentLoaded', init);

function loadDynamicSettings() {
    const settings = JSON.parse(localStorage.getItem('aljawan_settings'));
    if (settings) {
        // Update Store Name
        document.querySelectorAll('.logo span').forEach(el => {
            el.textContent = settings.storeName.replace('زهرة ', '');
        });
        
        // Update About Text
        const aboutP = document.querySelector('#about p');
        if (aboutP) aboutP.textContent = settings.aboutText;

        // Update Footer Info
        const contactCol = document.getElementById('contact');
        if (contactCol) {
            const footerLinks = contactCol.querySelector('.footer-links');
            if (footerLinks) {
                footerLinks.innerHTML = `
                    <li><i class="fa-solid fa-phone" style="color: var(--primary); margin-left: 10px;"></i> ${settings.whatsapp}</li>
                    <li><i class="fa-solid fa-location-dot" style="color: var(--primary); margin-left: 10px;"></i> ${settings.address}</li>
                `;
            }
        }

        // Update WhatsApp links
        document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
            const phone = settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
            el.href = `https://wa.me/${phone}`;
        });
    }

    const offers = JSON.parse(localStorage.getItem('aljawan_offer_settings'));
    if (offers) {
        const flashSale = document.getElementById('flashSaleBanner');
        if (flashSale) {
            flashSale.style.display = offers.flashEnabled === 'true' ? 'block' : 'none';
            const flashText = flashSale.querySelector('span');
            if (flashText) flashText.textContent = offers.flashText;
        }
    }
}

function renderNewProductsSlider() {
    const track = document.getElementById('newProductsTrack');
    if (!track) return;

    // Sort products by ID descending (newest first) and take the first 8
    const latestProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 8);

    track.innerHTML = latestProducts.map(p => {
        const displayPrice = p.offerPrice ? p.offerPrice : p.price;
        const outOfStock = p.stock <= 0;

        return `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='glassy_botanical_hero.png'">
                    <span style="position:absolute; top:15px; left:15px; background:var(--primary); color:white; padding:5px 12px; border-radius:50px; font-weight:800; font-size:0.7rem;">جديد</span>
                </div>
                <div class="product-info">
                    <span class="product-cat">${p.category}</span>
                    <a href="#" class="product-name" style="font-size:1rem;">${p.name}</a>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="product-price" style="font-size:1.1rem;">${Number(displayPrice).toFixed(3)} ر.ع</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="add-btn" style="flex: 1; padding:0.6rem;" onclick="addToCart(${p.id})" ${outOfStock ? 'disabled' : ''}>
                             ${outOfStock ? 'نفذت' : 'أضف للسلة'}
                        </button>
                        <button class="add-btn" style="width: 40px; padding:0.6rem; background: #25d366; border-color: #25d366;" onclick="shareProductOnWhatsApp(${p.id})">
                            <i class="fa-brands fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function scrollNewProducts(delta) {
    const container = document.querySelector('.product-slider-container');
    if (container) {
        const scrollAmount = 300; 
        container.scrollBy({ left: delta * scrollAmount, behavior: 'smooth' });
    }
}

// --- FOMO Recent Sales Popups ---
const fomoNames = ['أحمد', 'سالم', 'محمد', 'علي', 'فاطمة', 'مريم', 'خالد', 'عبدالله', 'سعيد', 'ناصر', 'يعرب'];
const fomoLocations = ['صحار', 'مسقط', 'صلالة', 'نزوى', 'صور', 'الرستاق', 'السويق', 'عبري', 'البريمي'];

function showFomoPopup() {
    const popup = document.getElementById('fomoPopup');
    if (!popup || products.length === 0) return;
    
    const randomName = fomoNames[Math.floor(Math.random() * fomoNames.length)];
    const randomLoc = fomoLocations[Math.floor(Math.random() * fomoLocations.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    
    popup.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
            <img src="${randomProduct.image}" style="width:45px; height:45px; object-fit:cover; border-radius:6px;" onerror="this.src='glassy_botanical_hero.png'">
            <div>
                <p style="font-size:0.85rem; font-weight:700; color:white; margin:0;">${randomName} من ${randomLoc}</p>
                <p style="font-size:0.75rem; color:var(--primary); margin:2px 0 0 0;">اشترى للتو: ${randomProduct.name}</p>
            </div>
        </div>
    `;
    
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 4000);
}

function startFomoPopups() {
    setTimeout(() => {
        showFomoPopup();
        setInterval(showFomoPopup, 20000);
    }, 5000);
}

// --- OmPay Integration Frontend Logic ---
let currentPaymentMethod = 'whatsapp';

function checkOmPayStatus() {
    fetch('/api/ompay-status')
        .then(r => r.json())
        .then(data => {
            const container = document.getElementById('ompaySelectorContainer');
            if (container && data.enabled) {
                container.style.display = 'block';
            }
        })
        .catch(err => console.error('Failed to fetch OmPay status:', err));
}

function selectPaymentMethod(method) {
    currentPaymentMethod = method;
    const btnWhatsApp = document.getElementById('btnCheckoutWhatsApp');
    const btnOmPay = document.getElementById('btnCheckoutOmPay');
    const optionWhatsApp = document.getElementById('methodWhatsApp');
    const optionOmPay = document.getElementById('methodOmPay');
    
    if (method === 'ompay') {
        btnWhatsApp.style.display = 'none';
        btnOmPay.style.display = 'block';
        optionWhatsApp.classList.remove('active');
        optionOmPay.classList.add('active');
    } else {
        btnWhatsApp.style.display = 'block';
        btnOmPay.style.display = 'none';
        optionWhatsApp.classList.add('active');
        optionOmPay.classList.remove('active');
    }
}

function payWithOmPay() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const loc = document.getElementById('custLoc').value.trim();

    if (!name || !phone || !loc) {
        showToast('يرجى تعبئة جميع البيانات لإتمام الدفع');
        return;
    }

    if (cart.length === 0) {
        showToast('سلة المشتريات فارغة');
        return;
    }

    // Calculate final total
    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (appliedCoupon) {
        const discount = total * (appliedCoupon.percent / 100);
        total -= discount;
    }

    showToast('جاري تحضير بوابة الدفع الآمنة...');

    fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: total,
            description: `طلب من ${name} (${phone}) - متجر زهرة الارجوان`,
            origin: window.location.origin
        })
    })
    .then(r => r.json())
    .then(res => {
        if (res.success && res.checkoutLink) {
            // Save pending order info to reconstruct it on return
            const pendingOrder = {
                orderId: res.orderId,
                name: name,
                phone: phone,
                location: loc,
                cart: cart,
                total: total.toFixed(3) + " ر.ع",
                coupon: appliedCoupon ? appliedCoupon.code : null
            };
            localStorage.setItem('aljawan_pending_order_' + res.orderId, JSON.stringify(pendingOrder));
            
            // Redirect to OmPay hosted checkout page
            window.location.href = res.checkoutLink;
        } else {
            showToast('خطأ: ' + (res.error || 'لم نتمكن من الاتصال ببوابة الدفع'));
        }
    })
    .catch(err => {
        console.error(err);
        showToast('حدث خطأ في الاتصال بالخادم. حاول لاحقاً.');
    });
}

function checkPaymentCallback() {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    const orderId = params.get('orderId');
    
    if (payment === 'status' && orderId) {
        // Clean URL immediately
        window.history.replaceState({}, document.title, window.location.pathname);
        
        showToast('جاري التحقق من عملية الدفع...');
        
        fetch(`/api/check-status?orderId=${orderId}`)
            .then(r => r.json())
            .then(res => {
                if (res.success && res.status === 'success') {
                    // Payment succeeded!
                    const pendingOrderRaw = localStorage.getItem('aljawan_pending_order_' + orderId);
                    let name = '-';
                    let total = '0.000 ر.ع';
                    
                    if (pendingOrderRaw) {
                        const pending = JSON.parse(pendingOrderRaw);
                        name = pending.name;
                        total = pending.total;
                        
                        // Save Order to Local Storage for Admin
                        const newOrder = {
                            id: orderId,
                            date: new Date().toLocaleDateString('ar-OM'),
                            customer: pending.name,
                            phone: pending.phone,
                            items: pending.cart.map(i => `${i.name} (x${i.quantity})`).join(', '),
                            total: pending.total,
                            status: 'مدفوع (بوابة OmPay)'
                        };
                        const orders = JSON.parse(localStorage.getItem('aljawan_orders')) || [];
                        orders.push(newOrder);
                        localStorage.setItem('aljawan_orders', JSON.stringify(orders));
                        
                        localStorage.removeItem('aljawan_pending_order_' + orderId);
                    }
                    
                    // Clear cart
                    cart = [];
                    saveCart();
                    updateCartUI();
                    
                    // Show success modal
                    document.getElementById('successOrderId').textContent = orderId;
                    document.getElementById('successCustomerName').textContent = name;
                    document.getElementById('successOrderTotal').textContent = total;
                    document.getElementById('paymentSuccessModal').classList.add('active');
                } else {
                    // Payment failed or cancelled
                    document.getElementById('paymentFailureModal').classList.add('active');
                }
            })
            .catch(err => {
                console.error(err);
                showToast('فشل التحقق من حالة الدفع.');
            });
    }
}

function closeSuccessModal() {
    document.getElementById('paymentSuccessModal').classList.remove('active');
}

// Re-enable body scroll or cart close if needed
function closeFailureModal() {
    document.getElementById('paymentFailureModal').classList.remove('active');
}

// Expose functions globally for inline onclick handlers
window.selectPaymentMethod = selectPaymentMethod;
window.payWithOmPay = payWithOmPay;
window.closeSuccessModal = closeSuccessModal;
window.closeFailureModal = closeFailureModal;

// --- PWA & Service Worker Support ---
function initPwaInstall() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('PWA Service Worker registered!', reg))
            .catch(err => console.error('PWA Service Worker failed:', err));
    }

    let deferredPrompt;
    const installBtn = document.getElementById('installAppBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) installBtn.style.display = 'flex';
    });

    if (installBtn) {
        installBtn.addEventListener('click', () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('App successfully installed!');
                }
                deferredPrompt = null;
                installBtn.style.display = 'none';
            });
        });
    }
}

// --- Instagram-style Vertical Stories Slider (9:16) ---
let activeStoryIndex = 0;
let storyTimer = null;
let storyProgressInterval = null;
let storyDuration = 5000; // 5 seconds per story
let storiesList = JSON.parse(localStorage.getItem('aljawan_stories')) || [];

// Seed default stories if empty
if (storiesList.length === 0) {
    storiesList = [
        { id: 1, title: "عروض الصيف", image: "matjarna_hero_luxury_1778254117070.png", link: "#products" },
        { id: 2, title: "أسمدة فاخرة", image: "glassy_botanical_hero.png", link: "#products" },
        { id: 3, title: "بذور مهجنة", image: "agricultural_glass_hero.png", link: "#products" }
    ];
    localStorage.setItem('aljawan_stories', JSON.stringify(storiesList));
}

function renderStories() {
    const container = document.getElementById('storiesContainer');
    const section = document.getElementById('storiesSection');
    if (!container || !section) return;

    if (storiesList.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    
    // Check viewed stories from localStorage
    const viewedStories = JSON.parse(localStorage.getItem('aljawan_viewed_stories')) || [];

    container.innerHTML = storiesList.map((story, index) => {
        const isViewed = viewedStories.includes(story.id);
        return `
            <div class="story-badge" onclick="openStoryViewer(${index})">
                <div class="story-ring ${isViewed ? 'viewed' : ''}">
                    <div class="story-img-wrapper">
                        <img src="${story.image}" alt="${story.title}" onerror="this.src='app_icon.png'">
                    </div>
                </div>
                <span class="story-title">${story.title}</span>
            </div>
        `;
    }).join('');
}

function openStoryViewer(index) {
    activeStoryIndex = index;
    const modal = document.getElementById('storyViewerModal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling background
    
    // Mark story as viewed
    const viewedStories = JSON.parse(localStorage.getItem('aljawan_viewed_stories')) || [];
    if (!viewedStories.includes(storiesList[activeStoryIndex].id)) {
        viewedStories.push(storiesList[activeStoryIndex].id);
        localStorage.setItem('aljawan_viewed_stories', JSON.stringify(viewedStories));
        renderStories(); // Rerender ring styles
    }

    showActiveStory();
}

function closeStoryViewer() {
    const modal = document.getElementById('storyViewerModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    
    clearStoryTimers();
}

function clearStoryTimers() {
    clearTimeout(storyTimer);
    clearInterval(storyProgressInterval);
}

function showActiveStory() {
    clearStoryTimers();
    
    const story = storiesList[activeStoryIndex];
    const imgContainer = document.getElementById('storyViewerContent');
    const titleContainer = document.getElementById('storyViewerTitle');
    const footerContainer = document.getElementById('storyViewerFooter');
    const actionBtn = document.getElementById('storyActionBtn');
    
    if (!imgContainer || !titleContainer) return;
    
    titleContainer.textContent = story.title;
    imgContainer.innerHTML = `<img src="${story.image}" alt="${story.title}" onerror="this.src='app_icon.png'">`;
    
    if (story.link && story.link.trim() !== '') {
        actionBtn.href = story.link;
        footerContainer.style.display = 'block';
    } else {
        footerContainer.style.display = 'none';
    }
    
    // Render progress bar ticks
    const progressContainer = document.getElementById('storyProgressContainer');
    if (progressContainer) {
        progressContainer.innerHTML = storiesList.map((_, idx) => `
            <div class="story-progress-bar">
                <div class="story-progress-fill" id="progressFill_${idx}" style="width: ${idx < activeStoryIndex ? '100%' : '0%'}"></div>
            </div>
        `).join('');
    }
    
    // Start progress fill animation
    let start = Date.now();
    const fillEl = document.getElementById(`progressFill_${activeStoryIndex}`);
    
    storyProgressInterval = setInterval(() => {
        let elapsed = Date.now() - start;
        let pct = Math.min((elapsed / storyDuration) * 100, 100);
        if (fillEl) fillEl.style.width = pct + '%';
        
        if (elapsed >= storyDuration) {
            clearInterval(storyProgressInterval);
            nextStory();
        }
    }, 50);
}

function nextStory() {
    if (activeStoryIndex < storiesList.length - 1) {
        activeStoryIndex++;
        showActiveStory();
    } else {
        closeStoryViewer();
    }
}

function prevStory() {
    if (activeStoryIndex > 0) {
        activeStoryIndex--;
        showActiveStory();
    } else {
        // Restart current story if it is the first one
        showActiveStory();
    }
}

// Expose stories functions globally
window.openStoryViewer = openStoryViewer;
window.closeStoryViewer = closeStoryViewer;
window.nextStory = nextStory;
window.prevStory = prevStory;
window.renderStories = renderStories;

// --- Product Quick View Modal Logic ---

function openProductModal(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const content = document.getElementById('productModalContent');
    if (!modal || !content) return;

    const displayPrice = product.offerPrice ? product.offerPrice : product.price;
    const hasOffer = product.offerPrice !== null && product.offerPrice < product.price;
    const lowStock = product.stock > 0 && product.stock < 10;
    const outOfStock = product.stock <= 0;

    content.innerHTML = `
        <div class="product-modal-grid">
            <div class="product-modal-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='glassy_botanical_hero.png'">
            </div>
            <div class="product-modal-info">
                <div>
                    <span class="product-cat" style="display:block; margin-bottom:0.25rem;">${product.category}</span>
                    <h3 class="product-modal-name">${product.name}</h3>
                    
                    <div style="color:var(--secondary); font-size:0.85rem; margin-bottom:1rem; display:flex; align-items:center; gap:4px;">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                        <span style="color:var(--text-muted);">(4.8 التقييم العام)</span>
                    </div>

                    <div class="product-modal-price">
                        <span style="color:${hasOffer ? 'var(--primary)' : 'var(--secondary)'}">${Number(displayPrice).toFixed(3)} ر.ع</span>
                        ${hasOffer ? `<del style="font-size:1rem; color:var(--text-muted); opacity:0.6; margin-right:8px; text-decoration:line-through;">${Number(product.price).toFixed(3)} ر.ع</del>` : ''}
                    </div>

                    <p class="product-modal-desc">${product.desc || 'منتج زراعي ذو جودة عالية، مناسب للاستخدام الزراعي في ظروف سلطنة عمان البيئية لتحقيق أقصى إنتاجية.'}</p>
                </div>

                <div>
                    <div style="margin-bottom:1rem; display:flex; align-items:center; gap:8px;">
                        <span style="font-size:0.9rem; font-weight:700;">حالة المنتج:</span>
                        <span style="font-size:0.9rem; font-weight:800; color: ${outOfStock ? '#ef4444' : (lowStock ? '#fbbf24' : '#10b981')}">
                            ${outOfStock ? 'نفذت الكمية' : (lowStock ? `باقي ${product.stock} قطع فقط!` : 'متوفر في المخزن')}
                        </span>
                    </div>

                    <div class="product-actions" style="margin-top:0;">
                        <button class="add-btn" style="padding:1.1rem; font-size:1rem;" onclick="addToCart(${product.id}); closeProductModal();" ${outOfStock ? 'disabled' : ''}>
                            <i class="fa-solid fa-cart-plus"></i> ${outOfStock ? 'غير متوفر' : 'إضافة إلى السلة'}
                        </button>
                        <button class="whatsapp-share-btn" style="width: 60px;" onclick="shareProductOnWhatsApp(${product.id})">
                            <i class="fa-brands fa-whatsapp" style="font-size:1.5rem;"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update URL query parameter without reloading
    const newUrl = window.location.origin + window.location.pathname + '?product=' + id;
    window.history.replaceState({ path: newUrl }, '', newUrl);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';

    // Remove query parameter from URL
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
}

function checkUrlForProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId) {
        // Delay slightly to allow AOS and content to initialize
        setTimeout(() => {
            openProductModal(productId);
        }, 1200);
    }
}

// Expose modal functions to window
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.initPwaInstall = initPwaInstall;
