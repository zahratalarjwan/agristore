// --- Configuration & State ---
const GOOGLE_SHEETS_API_URL = ""; // ضع رابط Web App الخاص بـ Google Apps Script هنا
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

function fetchProductsFromDB() {
    fetch(GOOGLE_SHEETS_API_URL + "?action=getProducts")
        .then(res => res.json())
        .then(data => {
            if(data && data.length > 0) {
                products = data;
                localStorage.setItem('aljawan_products', JSON.stringify(products));
                renderProducts(currentCategory);
                renderNewProductsSlider();
            }
        })
        .catch(err => console.error('Error fetching from DB:', err));
}

function init() {
    if (GOOGLE_SHEETS_API_URL) {
        fetchProductsFromDB();
    }
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
    checkDeepLink();
    renderStories();
    initPwaInstall();
    
    // Initialize AOS - disable on mobile to prevent layout issues
    const isMobile = window.innerWidth <= 768;
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: isMobile ? 0 : 1000, 
            once: true, 
            offset: isMobile ? 0 : 50,
            disable: isMobile
        });
    }

    // Hide Preloader and fix layout on mobile
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                // Force layout recalculation to fix mobile scroll bug
                window.dispatchEvent(new Event('resize'));
                window.scrollTo(0, 0);
            }, 600);
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
            <div class="hero" style="background-image: linear-gradient(to bottom, rgba(250,249,246,0.15), rgba(250,249,246,0.98)), url('${s.image}')">
                <div class="hero-content" data-aos="zoom-out">
                    <h1>${s.title}</h1>
                    <p>${s.desc}</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="${s.link || '#products'}" class="btn-primary">استعرض الآن</a>
                        <a href="https://wa.me/96896017822" class="btn-primary" style="background: rgba(109,40,217,0.05); border: 1px solid var(--border-dark); box-shadow: none;">استشارة المهندس</a>
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
                    ${hasOffer ? `<span class="badge-discount">خصم</span>` : ''}
                    ${outOfStock ? `<span class="badge-outofstock">نفذت الكمية</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-meta-row">
                        <span class="product-cat">${p.category}</span>
                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                            <span class="rating-value">(4.8)</span>
                        </div>
                    </div>
                    <a href="javascript:void(0)" onclick="openProductModal(${p.id})" class="product-name">${p.name}</a>
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
        cartItemsList.innerHTML = `<div style="text-align:center; padding: 3rem 2rem; color: var(--text-secondary); opacity: 0.7; font-weight: 600;">السلة فارغة حالياً</div>`;
        totalAmount.textContent = "0.000 ر.ع";
        switchCartStep(1);
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
    
    // Volume calculation
    let totalVol = 0;
    cart.forEach(item => {
        if (item.volume) {
            let num = parseFloat(item.volume);
            if (!isNaN(num)) totalVol += (num * item.quantity);
        }
    });
    const totalVolumeEl = document.getElementById('totalVolume');
    const totalVolumeRow = document.getElementById('totalVolumeRow');
    if (totalVolumeEl && totalVolumeRow) {
        if (totalVol > 0) {
            totalVolumeEl.textContent = totalVol;
            totalVolumeRow.style.display = 'flex';
        } else {
            totalVolumeRow.style.display = 'none';
        }
    }
    
    const discountRow = document.getElementById('discountRow');
    const discountAmountEl = document.getElementById('discountAmount');

    // Apply Coupon if any
    if (appliedCoupon) {
        const discount = subtotal * (appliedCoupon.percent / 100);
        if (discountRow && discountAmountEl) {
            discountAmountEl.textContent = "-" + discount.toFixed(3) + " ر.ع";
            discountRow.style.display = 'flex';
        }
        subtotal -= discount;
    } else {
        if (discountRow) discountRow.style.display = 'none';
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
    if (!drawer || !overlay) return;

    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';

    if (drawer.classList.contains('active')) {
        switchCartStep(1);
    }
}

function switchCartStep(step) {
    const step1 = document.getElementById('cartStep1');
    const step2 = document.getElementById('cartStep2');
    const title = document.getElementById('cartDrawerTitle');
    const checkoutTotal = document.getElementById('checkoutTotalAmount');
    const totalAmount = document.getElementById('totalAmount');

    if (!step1 || !step2) return;

    if (step === 2) {
        if (cart.length === 0) {
            showToast('سلة المشتريات فارغة');
            return;
        }
        step1.style.display = 'none';
        step2.style.display = 'flex';
        if (title) title.textContent = 'بيانات الطلب';
        if (checkoutTotal && totalAmount) {
            checkoutTotal.textContent = totalAmount.textContent;
        }
    } else {
        step1.style.display = 'flex';
        step2.style.display = 'none';
        if (title) title.textContent = 'سلة المشتريات';
    }
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
        let volText = item.volume ? ` [الحجم: ${item.volume}]` : '';
        message += `${index + 1}. *${item.name}*${volText} (عدد ${item.quantity}) = ${(item.price * item.quantity).toFixed(3)} ر.ع%0A`;
    });
    
    let totalVol = 0;
    cart.forEach(item => {
        if (item.volume) {
            let num = parseFloat(item.volume);
            if (!isNaN(num)) totalVol += (num * item.quantity);
        }
    });
    if (totalVol > 0) {
        message += `📦 *الحجم الإجمالي:* ${totalVol}%0A`;
    }
    
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
    const storeUrl = window.location.href.split('#')[0].split('?')[0]; 
    
    let message = `*🌿 منتج مميز من متجر زهرة الارجوان*%0A%0A`;
    message += `*الاسم:* ${product.name}%0A`;
    message += `*السعر:* ${Number(price).toFixed(3)} ر.ع%0A`;
    if (product.desc) message += `*الوصف:* ${product.desc}%0A`;
    message += `%0A🔗 *رابط الشراء:* ${storeUrl}?productId=${id}#products%0A`;
    message += `%0Aتصفح المزيد في متجرنا! ✨`;

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
                <div class="product-img" onclick="openProductModal(${p.id})" style="cursor: pointer;">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='glassy_botanical_hero.png'">
                    <span class="badge-new">جديد</span>
                </div>
                <div class="product-info">
                    <span class="product-cat">${p.category}</span>
                    <a href="javascript:void(0)" onclick="openProductModal(${p.id})" class="product-name" style="font-size:1rem;">${p.name}</a>
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
window.switchCartStep = switchCartStep;

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
let storiesList = JSON.parse(localStorage.getItem('aljawan_stories_v2')) || [];

// Seed default stories if empty
if (storiesList.length === 0) {
    storiesList = [
        { id: 1, title: "اشترك وتابع جديدنا", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", link: "https://whatsapp.com/channel/0029VbBwEAu7IUYNRVJOtX3X", direct: true },
        { id: 2, title: "قناة يوتيوب", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", link: "https://www.youtube.com/@abuhassan1ai", direct: true }
    ];
    localStorage.setItem('aljawan_stories_v2', JSON.stringify(storiesList));
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
        const onClickAction = story.direct ? `window.open('${story.link}', '_blank')` : `openStoryViewer(${index})`;
        return `
            <div class="story-badge glass-rect" onclick="${onClickAction}">
                <div class="story-img-wrapper">
                    <img src="${story.image}" alt="${story.title}" onerror="this.src='app_icon.png'">
                </div>
                <span class="story-title-inline">${story.title}</span>
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
window.initPwaInstall = initPwaInstall;


function openProductModal(id) {
    currentModalProductId = id;
    renderModalReviews(id);
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


// --- Translation System ---
const translations = {
    en: {
        home: "Home", store: "Store", about: "About Us", contact: "Contact",
        browse_products: "Browse Products", consult_engineer: "Consult Engineer",
        cart: "Cart", contact_short: "Contact",
        wa_support: "Live Support", wa_welcome: "Welcome to Zahrat Alarjwan! How can we help you today? 🌿",
        wa_placeholder: "Type your message...", customer_reviews: "Customer Reviews",
        add_cart: "Add to Cart", out_stock: "Out of Stock", share: "Share"
    },
    ar: {
        home: "الرئيسية", store: "المتجر", about: "عن المؤسسة", contact: "تواصل معنا",
        browse_products: "استعرض المنتجات", consult_engineer: "استشارة المهندس",
        cart: "السلة", contact_short: "تواصل",
        wa_support: "الدعم الفني المباشر", wa_welcome: "مرحباً بك في زهرة الارجوان! كيف يمكننا مساعدتك اليوم؟ 🌿",
        wa_placeholder: "اكتب رسالتك هنا...", customer_reviews: "تقييمات العملاء",
        add_cart: "أضف للسلة", out_stock: "نفذت الكمية", share: "مشاركة"
    }
};

let currentLang = localStorage.getItem('aljawan_lang') || 'ar';
if(currentLang === 'en') applyLanguage('en');

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('aljawan_lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.querySelector('.btn-lang').textContent = lang === 'ar' ? 'EN' : 'عربي';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    
    // Re-render components with translated texts if needed
    renderProducts(currentCategory, document.getElementById('productSearch') ? document.getElementById('productSearch').value : '');
}

// --- WhatsApp Widget Logic ---
function toggleWaWidget() {
    document.getElementById('waWidgetWindow').classList.toggle('active');
}

function sendWaMessage() {
    const input = document.getElementById('waInput');
    const msg = input.value.trim();
    if(!msg) return;
    
    const settings = JSON.parse(localStorage.getItem('aljawan_settings')) || { whatsapp: '96896017822' };
    const storePhone = settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    
    const url = `https://wa.me/${storePhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    input.value = '';
    toggleWaWidget();
}

// --- Dynamic Reviews System ---
let reviews = JSON.parse(localStorage.getItem('aljawan_reviews')) || {};
let currentModalProductId = null;

function addReview() {
    const input = document.getElementById('reviewInput');
    const msg = input.value.trim();
    if(!msg || !currentModalProductId) return;
    
    if(!reviews[currentModalProductId]) reviews[currentModalProductId] = [];
    reviews[currentModalProductId].push({ user: 'زائر', text: msg, date: new Date().toLocaleDateString('ar-OM') });
    
    localStorage.setItem('aljawan_reviews', JSON.stringify(reviews));
    input.value = '';
    renderModalReviews(currentModalProductId);
}

function renderModalReviews(id) {
    const container = document.getElementById('detailReviews');
    const stars = document.getElementById('detailStars');
    if(!container || !stars) return;
    
    const prodReviews = reviews[id] || [];
    
    if(prodReviews.length === 0) {
        container.innerHTML = '<span style="opacity:0.6;">لا توجد تقييمات بعد. كن أول من يقيّم!</span>';
        stars.innerHTML = '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> (5.0)';
    } else {
        container.innerHTML = prodReviews.map(r => `<div style="margin-bottom:8px; padding-bottom:8px; border-bottom:1px solid rgba(0,0,0,0.05);"><b>${r.user}</b> (${r.date}): ${r.text}</div>`).join('');
        // Randomize rating slightly based on reviews count for realistic feel
        const rating = (5.0 - (Math.random() * 0.4)).toFixed(1);
        stars.innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> (${rating})`;
    }
}
        