/**
 * Ghosn Al-Matak Store (متجر غصن المتك)
 * Complete Agricultural & Gardening Supplies, Ad Slider & Admin CRUD Suite Engine
 */

// --- Admin Security Key ---
const ADMIN_SECRET_KEY = 'Asdf#$1234';

// --- Default Initial Database for Ghosn Al-Matak ---
const DEFAULT_PRODUCTS = [
    // --- 1. أنظمة الري الحديث ---
    {
        id: 1,
        name: 'شبكة ري بالتنقيط المتكاملة (50 متر + 40 قطارة قابلة للتعديل)',
        botanicalName: 'Pro Drip Irrigation System 50M Kit',
        category: 'irrigation',
        price: 12.50,
        originalPrice: 16.00,
        rating: 4.9,
        reviewsCount: 185,
        image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80',
        badge: 'الأكثر طلباً 💧',
        careLevel: 'easy',
        light: 'medium',
        water: 'توفير 70% من المياه',
        potSize: 'طول 50 متر + 40 قطارة',
        height: 'مقاوم للحرارة والشمس',
        description: 'طقم متكامل لتركيب شبكة ري بالتنقيط لحدائق المنازل والبيوت المحمية، يشمل أنبوب رئيسي، وصلات، وموزعات ماء قابلة لتعديل التدفق.',
        petFriendly: true,
        inStock: true
    },
    {
        id: 2,
        name: 'مؤقت ري رقمي إلكتروني ذكي يعمل بالبطارية مع شاشة LCD',
        botanicalName: 'Automatic Digital Water Timer Valve',
        category: 'irrigation',
        price: 14.90,
        originalPrice: 19.50,
        rating: 5.0,
        reviewsCount: 94,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        badge: 'تحكم أوتوماتيكي ⏱️',
        careLevel: 'easy',
        light: 'medium',
        water: 'برمجة دقيقة لأوقات السقي',
        potSize: 'مدخل قياسي 3/4 بوصة',
        height: 'مقاوم للماء IP65',
        description: 'جهاز تحكم أوتوماتيكي بالري يبرمج مواعيد ومدة السقي يومياً أو أسبوعياً، مثالي لري الحديقة أثناء السفر والغياب.',
        petFriendly: true,
        inStock: true
    },
    // --- 2. البذور والتقاوي ---
    {
        id: 3,
        name: 'بذور طماطم هجينة F1 عالية الإنتاجية (مقاومة للحرارة)',
        botanicalName: 'Solanum Lycopersicum F1 Hybrid',
        category: 'seeds',
        price: 2.20,
        originalPrice: 3.00,
        rating: 4.8,
        reviewsCount: 140,
        image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=600&q=80',
        badge: 'نسبة إنبات 98% 🌱',
        careLevel: 'easy',
        light: 'bright',
        water: 'سقي منتظم في مرحلة النمو',
        potSize: 'عبوة 200 بذرة',
        height: 'إنتاج غزير ومبكر',
        description: 'بذور طماطم ممتازة منتخبة ملائمة للبيئة العُمانية ومقاومة للأمراض الفيروسية والحرارة.',
        petFriendly: true,
        inStock: true
    },
    {
        id: 4,
        name: 'بذور خس هولندي مائي عالي الجودة (زراعة مائية وتربة)',
        botanicalName: 'Lactuca Sativa Hydroponic Seeds',
        category: 'seeds',
        price: 1.80,
        originalPrice: 2.50,
        rating: 4.9,
        reviewsCount: 110,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        badge: 'نمو سريع 🥬',
        careLevel: 'easy',
        light: 'bright',
        water: 'مناسب للهيدروبونيك والتربة',
        potSize: 'عبوة 500 بذرة',
        height: 'حصاد خلال 35 يوم',
        description: 'بذور خس مقرمش ذو أوراق عريضة ونكهة ممتازة، مخصص لأنظمة الزراعة المائية والحدائق المنزلية.',
        petFriendly: true,
        inStock: true
    },
    // --- 3. المبيدات والوقاية الزراعية ---
    {
        id: 5,
        name: 'زيت النيم العضوي النقي المركز لمكافحة الحشرات والفطريات (500 مل)',
        botanicalName: 'Pure Organic Cold-Pressed Neem Oil',
        category: 'pesticides',
        price: 5.50,
        originalPrice: 7.50,
        rating: 4.9,
        reviewsCount: 220,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
        badge: 'عضوي 100% 🛡️',
        careLevel: 'easy',
        light: 'medium',
        water: 'يخفف 5 مل لكل لتر ماء',
        potSize: 'عبوة 500 مل مركزة',
        height: 'تكفي لموسم كامل',
        description: 'مبيد وقائي عضوي طبيعي يقضي على المن، الذبابة البيضاء، البق الدقيقي، والعناكب دون إيذاء النحل أو الحيوانات.',
        petFriendly: true,
        inStock: true
    },
    {
        id: 6,
        name: 'مركب نحاسي وقائي لعلاج الفطريات والبياض الدقيقي (1 كجم)',
        botanicalName: 'Copper Hydroxide Fungicide Protectant',
        category: 'pesticides',
        price: 4.80,
        originalPrice: 6.50,
        rating: 4.7,
        reviewsCount: 88,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
        badge: 'علاج فطري سريع 🧪',
        careLevel: 'easy',
        light: 'medium',
        water: 'رش ورقي كل أسبوعين',
        potSize: 'عبوة 1 كجم مسحوق',
        height: 'حماية متكاملة للأوراق',
        description: 'مركب نحاسي علاجي واسع الطيف لحماية الأشجار والنباتات من أعفان الجذور وتبقع الأوراق والبياض الزغبي.',
        petFriendly: false,
        inStock: true
    },
    // --- 4. الأسمدة والمغذيات والتربة ---
    {
        id: 7,
        name: 'سماد NPK متوازن 20-20-20 ذواب سريع الامتصاص (2 كجم)',
        botanicalName: 'Balanced Water Soluble NPK 20-20-20 + TE',
        category: 'fertilizers',
        price: 3.80,
        originalPrice: 5.00,
        rating: 4.9,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1585336261026-40742f5e9547?auto=format&fit=crop&w=600&q=80',
        badge: 'نمو شامل متوازن 🌿',
        careLevel: 'easy',
        light: 'medium',
        water: 'ملعقة شاي لكل لتر ماء',
        potSize: 'كيس 2 كجم بودرة',
        height: 'مدعم بالعناصر الصغرى',
        description: 'تركيبة متكاملة تمد النبات بالنيتروجين للنمو الخضري، الفسفور لتجذير قوي، والبوتاسيوم للتزهير والإثمار.',
        petFriendly: true,
        inStock: true
    },
    {
        id: 8,
        name: 'تربة بتموس هولندية معقمة مع بيرلايت زراعي (50 لتر)',
        botanicalName: 'Premium Potting Mix Peat Moss + Perlite',
        category: 'fertilizers',
        price: 6.20,
        originalPrice: 8.00,
        rating: 5.0,
        reviewsCount: 165,
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
        badge: 'تربة نقية معقمة 🪴',
        careLevel: 'easy',
        light: 'medium',
        water: 'تهوية وتصريف ممتاز',
        potSize: 'كيس حجم 50 لتر',
        height: 'مثالية للزراعة الداخلية والخارجية',
        description: 'وسط زراعي خفيف خالي من بذور الحشائش والنيماتودا، غني بالمواد العضوية مع حبيبات البيرلايت لتهوية الجذور.',
        petFriendly: true,
        inStock: true
    },
    // --- 5. النباتات الطبيعية والنوادر ---
    {
        id: 9,
        name: 'مونستيرا ديليسيوسا (قفص صدري استوائي)',
        botanicalName: 'Monstera Deliciosa',
        category: 'plants',
        price: 8.90,
        originalPrice: 13.50,
        rating: 4.9,
        reviewsCount: 142,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
        badge: 'نبتة كلاسيكية فاخرة 🔥',
        careLevel: 'easy',
        light: 'medium',
        water: 'مرة كل 7-10 أيام',
        potSize: 'حوض 17 سم',
        height: 'ارتفاع 50 سم',
        description: 'أيقونة النباتات الداخلية الفاخرة! تتميز بأوراقها العريضة ذات الشقوق الجمالية الفريدة وتضفي لمسة استوائية فخمة.',
        petFriendly: false,
        inStock: true
    },
    {
        id: 10,
        name: 'فيلوديندرون خوسيه بونو المبرقش النادر',
        botanicalName: 'Philodendron Jose Buono Variegata',
        category: 'plants',
        price: 34.00,
        originalPrice: 42.00,
        rating: 5.0,
        reviewsCount: 38,
        image: 'https://images.unsplash.com/photo-1604762524889-3e2fccbc5604?auto=format&fit=crop&w=600&q=80',
        badge: 'نوادر استوائية ✨',
        careLevel: 'rare',
        light: 'bright',
        water: 'عند جفاف نصف التربة',
        potSize: 'حوض 19 سم',
        height: 'ارتفاع 55 سم',
        description: 'تحفة نباتية نادرة لهواة التميز والمبرقشات! تمتاز بفسيفساء لونية مبهرة من الأبيض والأخضر الزمردي.',
        petFriendly: false,
        inStock: true
    },
    // --- 6. الأدوات والمعدات الزراعية ---
    {
        id: 11,
        name: 'طقم مقصات التقليم والتطعيم الياباني الاحترافي (ستانلس ستيل)',
        botanicalName: 'Professional Pruning Shears & Grafting Tool',
        category: 'tools',
        price: 5.50,
        originalPrice: 7.50,
        rating: 4.8,
        reviewsCount: 96,
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80',
        badge: 'شفرات فائقة الحدة ✂️',
        careLevel: 'easy',
        light: 'low',
        water: 'مقاوم للصدأ تماماً',
        potSize: 'طول 21 سم مع مقبض مريح',
        height: 'مع قفل أمان وجراب',
        description: 'شفرات فولاذية صلبة تقص الأغصان وتجهز العقل بكل سهولة مع قفل أمان ومقبض مضاد للانزلاق.',
        petFriendly: true,
        inStock: true
    },
    {
        id: 12,
        name: 'مرش ضغط يدوي للمبيدات والأسمدة الورقية سعة 2 لتر',
        botanicalName: 'Handheld Pressure Sprayer 2L',
        category: 'tools',
        price: 3.20,
        originalPrice: 4.50,
        rating: 4.9,
        reviewsCount: 130,
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
        badge: 'ضغط هواء قوي 💨',
        careLevel: 'easy',
        light: 'medium',
        water: 'فوهة نحاسية قابلة للضبط',
        potSize: 'سعة 2 لتر',
        height: 'مقاوم للمواد الكيميائية',
        description: 'بخاخ ضغط هواء برأس نحاسي قابل لتعديل الرذاذ من ناعم جداً إلى تدفق مستقيم، ممتاز لرش الأسمدة والمبيدات.',
        petFriendly: true,
        inStock: true
    },
    // --- 7. المراكن والأحواض ---
    {
        id: 13,
        name: 'مركن سيراميك اسكندنافي فاخر مع طبق تصريف مدمج',
        botanicalName: 'Nordic Ceramic Planter with Drainage Tray',
        category: 'pots',
        price: 7.50,
        originalPrice: 9.50,
        rating: 5.0,
        reviewsCount: 88,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
        badge: 'سيراميك معالج 🏺',
        careLevel: 'easy',
        light: 'bright',
        water: 'مزود بفتحة تصريف ذكية',
        potSize: 'قطر 18 سم (ارتفاع 16 سم)',
        height: 'لمسة مطفية Matte',
        description: 'حوض سيراميكي فاخر بتصميم مينيمالي انسيابي مرفق بطبق تصريف لحماية الأسطح والأثاث من تسرب المياه.',
        petFriendly: true,
        inStock: true
    }
];

// --- Persistent State ---
let products = JSON.parse(localStorage.getItem('ghosn_matak_products')) || DEFAULT_PRODUCTS;
let coupons = JSON.parse(localStorage.getItem('ghosn_matak_coupons')) || [
    { code: 'GHOSN15', discount: 15, desc: 'خصم 15% بمناسبة تدشين غصن المتك' },
    { code: 'OMAN10', discount: 10, desc: 'كود خصم الترحيب' },
    { code: 'FREE', discount: 0, isFreeShipping: true, desc: 'شحن مجاني لكافة محافظات عُمان' }
];
let orders = JSON.parse(localStorage.getItem('ghosn_matak_orders')) || [
    { id: '#GM-9021', date: '2026-08-30 20:10', itemsCount: 3, total: 32.20, status: 'قيد التجهيز' },
    { id: '#GM-9018', date: '2026-08-30 17:45', itemsCount: 1, total: 14.90, status: 'تم الشحن' },
    { id: '#GM-9005', date: '2026-08-29 22:30', itemsCount: 2, total: 17.30, status: 'مكتمل' }
];
let announcements = JSON.parse(localStorage.getItem('ghosn_matak_announcements')) || {
    topBar: '🌱 عروض متجر غصن المتك: شحن مجاني للطلبات فوق 25 ر.ع + بذور عضوية هدية!',
    heroBadge: '🌿 غصن المتك: وجهتك الزراعية الأولى بسلطنة عُمان',
    heroTitle: 'كل ما تحتاجه لحديقتك ومزرعتك بأسعار الجملة',
    heroDesc: 'نباتات طبيعية، بذور هجينة، مبيدات آمنة، أسمدة، شبكات ري حديث، ومعدات زراعية تصلك أينما كنت في عُمان.'
};

let editingProductId = null;

let state = {
    category: 'all',
    searchQuery: '',
    maxPrice: 60,
    petFriendlyOnly: false,
    onSaleOnly: false,
    sortBy: 'featured',
    cart: JSON.parse(localStorage.getItem('ghosn_matak_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('ghosn_matak_wishlist')) || [],
    appliedCoupon: null,
    discountPercent: 0
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLucideIcons();
    initAnnouncements();
    initAdSlider();
    initCategoryNavigation();
    initFiltersAndSorting();
    initSearch();
    initCartDrawer();
    initWishlist();
    initModals();
    initCareWizard();
    initMobileBottomNav();
    initAdminPanel();
    renderProducts();
    updateCartUI();
    updateWishlistBadge();
});

function initLucideIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            initLucideIcons();
        });
    }
}

// --- Professional Ad Slider Logic ---
function initAdSlider() {
    const track = document.getElementById('slides-track');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    const showcase = document.getElementById('hero-slider-showcase');

    if (!track) return;

    let currentSlide = 0;
    const totalSlides = 3;
    let autoSlideInterval = null;

    function goToSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        const offset = currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.className = 'slider-dot active w-6 h-2 rounded-full bg-brand-400 transition-all';
            } else {
                dot.className = 'slider-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all';
            }
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(Number(dot.dataset.slide));
            startAutoplay();
        });
    });

    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoplay);
        showcase.addEventListener('mouseleave', startAutoplay);
    }

    document.querySelectorAll('.slide-cta-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            const targetBtn = document.querySelector(`.cat-nav-btn[data-category="${cat}"]`);
            if (targetBtn) targetBtn.click();
            const catalogSec = document.getElementById('catalog-section');
            if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
        });
    });

    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) prevSlide();
            else nextSlide();
        }
        startAutoplay();
    }, { passive: true });

    goToSlide(0);
    startAutoplay();
}

// --- Announcements & Header Texts ---
function initAnnouncements() {
    const annElem = document.getElementById('announcement-text');
    const heroBadge = document.getElementById('hero-badge-text');
    const heroTitle = document.getElementById('hero-title-text');
    const heroDesc = document.getElementById('hero-desc-text');
    const statCount = document.getElementById('stat-products-count');

    if (annElem && announcements.topBar) annElem.innerHTML = announcements.topBar;
    if (heroBadge && announcements.heroBadge) heroBadge.textContent = announcements.heroBadge;
    if (heroTitle && announcements.heroTitle) heroTitle.innerHTML = announcements.heroTitle;
    if (heroDesc && announcements.heroDesc) heroDesc.textContent = announcements.heroDesc;
    if (statCount) statCount.textContent = `+${products.length}`;
}

// --- Admin Panel Security & Management Suite ---
function initAdminPanel() {
    const openAdminBtn = document.getElementById('open-admin-btn');
    const mobileAdminAccessBtn = document.getElementById('mobile-admin-access-btn');
    const mobileNavAdminBtn = document.getElementById('mobile-nav-admin');

    const loginModal = document.getElementById('admin-login-modal');
    const loginOverlay = document.getElementById('admin-login-overlay');
    const closeLoginBtn = document.getElementById('close-admin-login');
    const loginForm = document.getElementById('admin-login-form');
    const passwordInput = document.getElementById('admin-password-input');
    const loginError = document.getElementById('admin-login-error');
    const togglePasswordBtn = document.getElementById('toggle-password-visibility');

    const adminPanelModal = document.getElementById('admin-panel-modal');
    const closeAdminBtn = document.getElementById('close-admin-panel');
    const closeAdminBottomBtn = document.getElementById('admin-close-bottom-btn');
    const adminOverlay = document.getElementById('admin-panel-overlay');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    const adminTabs = document.querySelectorAll('.admin-tab-btn');
    const tabPanels = {
        'products': document.getElementById('tab-content-products'),
        'add-product': document.getElementById('tab-content-add-product'),
        'announcements': document.getElementById('tab-content-announcements'),
        'coupons': document.getElementById('tab-content-coupons'),
        'orders': document.getElementById('tab-content-orders')
    };

    function isSessionAuthenticated() {
        return sessionStorage.getItem('ghosn_admin_auth') === 'true';
    }

    function openAdminGateway() {
        if (isSessionAuthenticated()) {
            openAdminPanelDirectly();
        } else {
            openLoginModal();
        }
    }

    function openLoginModal() {
        if (loginError) loginError.classList.add('hidden');
        if (passwordInput) {
            passwordInput.value = '';
            setTimeout(() => passwordInput.focus(), 100);
        }
        loginModal.classList.add('active');
        initLucideIcons();
    }

    function closeLoginModal() {
        loginModal.classList.remove('active');
    }

    function openAdminPanelDirectly() {
        renderAdminProductsTable();
        renderAdminCouponsTable();
        renderAdminOrdersTable();
        populateAnnouncementForm();
        adminPanelModal.classList.add('active');
        initLucideIcons();
    }

    function closeAdminPanel() {
        adminPanelModal.classList.remove('active');
    }

    if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminGateway);
    if (mobileAdminAccessBtn) {
        mobileAdminAccessBtn.addEventListener('click', () => {
            if (window.closeMobileDrawer) window.closeMobileDrawer();
            openAdminGateway();
        });
    }
    if (mobileNavAdminBtn) mobileNavAdminBtn.addEventListener('click', openAdminGateway);

    if (closeLoginBtn) closeLoginBtn.addEventListener('click', closeLoginModal);
    if (loginOverlay) loginOverlay.addEventListener('click', closeLoginModal);

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            togglePasswordBtn.innerHTML = isPassword 
                ? '<i data-lucide="eye-off" class="w-4 h-4"></i>' 
                : '<i data-lucide="eye" class="w-4 h-4"></i>';
            initLucideIcons();
        });
    }

    if (loginForm && passwordInput) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const entered = passwordInput.value.trim();

            if (entered === ADMIN_SECRET_KEY) {
                sessionStorage.setItem('ghosn_admin_auth', 'true');
                closeLoginModal();
                openAdminPanelDirectly();
                showToast('مرحباً بك في لوحة تحكم متجر غصن المتك! 🌿', 'success');
            } else {
                loginError.classList.remove('hidden');
                passwordInput.classList.add('ring-2', 'ring-rose-500');
                setTimeout(() => passwordInput.classList.remove('ring-2', 'ring-rose-500'), 1500);
            }
        });
    }

    if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminPanel);
    if (closeAdminBottomBtn) closeAdminBottomBtn.addEventListener('click', closeAdminPanel);
    if (adminOverlay) adminOverlay.addEventListener('click', closeAdminPanel);
    
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('ghosn_admin_auth');
            closeAdminPanel();
            showToast('تم تسجيل الخروج من لوحة تحكم غصن المتك', 'info');
        });
    }

    const quickAddBtn = document.getElementById('admin-quick-add-btn');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
            resetProductForm();
            switchAdminTab('add-product');
        });
    }

    function switchAdminTab(targetTab) {
        adminTabs.forEach(btn => {
            if (btn.dataset.tab === targetTab) {
                btn.className = 'admin-tab-btn active px-4 py-2 rounded-xl bg-brand-500 text-white shadow-sm flex items-center gap-1.5 shrink-0';
            } else {
                btn.className = 'admin-tab-btn px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-1.5 shrink-0';
            }
        });

        Object.keys(tabPanels).forEach(key => {
            if (tabPanels[key]) {
                if (key === targetTab) tabPanels[key].classList.remove('hidden');
                else tabPanels[key].classList.add('hidden');
            }
        });
        initLucideIcons();
    }

    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.dataset.tab === 'add-product' && !editingProductId) {
                resetProductForm();
            }
            switchAdminTab(tab.dataset.tab);
        });
    });

    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            resetProductForm();
            switchAdminTab('products');
        });
    }

    // Handle Add or Edit Product Form Submission
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('new-prod-name').value.trim();
            const botanicalName = document.getElementById('new-prod-botanical').value.trim() || 'Agricultural Product';
            const category = document.getElementById('new-prod-category').value;
            const price = parseFloat(document.getElementById('new-prod-price').value);
            const originalPrice = parseFloat(document.getElementById('new-prod-orig-price').value) || null;
            const image = document.getElementById('new-prod-image').value.trim();
            const badge = document.getElementById('new-prod-badge').value.trim() || null;
            const water = document.getElementById('new-prod-water').value.trim() || 'استخدام زراعي منتظم';
            const sizeInput = document.getElementById('new-prod-size').value.trim() || 'مواصفة قياسية';
            const petFriendly = document.getElementById('new-prod-pet').checked;
            const inStock = document.getElementById('new-prod-stock').checked;
            const description = document.getElementById('new-prod-desc').value.trim() || 'منتج زراعي عالي الجودة من غصن المتك.';

            if (editingProductId) {
                // UPDATE
                const productIndex = products.findIndex(p => p.id === editingProductId);
                if (productIndex > -1) {
                    products[productIndex] = {
                        ...products[productIndex],
                        name,
                        botanicalName,
                        category,
                        price,
                        originalPrice,
                        image,
                        badge,
                        water,
                        potSize: sizeInput,
                        height: sizeInput,
                        petFriendly,
                        inStock,
                        description
                    };
                    localStorage.setItem('ghosn_matak_products', JSON.stringify(products));
                    showToast(`تم تحديث بيانات "${name}" في غصن المتك بنجاح! 💾`, 'success');
                }
            } else {
                // ADD NEW
                const newProduct = {
                    id: Date.now(),
                    name,
                    botanicalName,
                    category,
                    price,
                    originalPrice,
                    rating: 5.0,
                    reviewsCount: 1,
                    image,
                    badge,
                    careLevel: 'easy',
                    light: 'bright',
                    water,
                    potSize: sizeInput,
                    height: sizeInput,
                    petFriendly,
                    inStock,
                    description
                };
                products.unshift(newProduct);
                localStorage.setItem('ghosn_matak_products', JSON.stringify(products));
                showToast(`تمت إضافة ونشر "${name}" في غصن المتك فوراً! 🚀`, 'success');
            }

            resetProductForm();
            renderAdminProductsTable();
            renderProducts();
            switchAdminTab('products');
        });
    }

    // Announcement update form
    const announcementForm = document.getElementById('announcement-form');
    if (announcementForm) {
        announcementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            announcements.topBar = document.getElementById('edit-announcement-input').value.trim();
            announcements.heroBadge = document.getElementById('edit-hero-badge-input').value.trim();
            announcements.heroTitle = document.getElementById('edit-hero-title-input').value.trim();
            announcements.heroDesc = document.getElementById('edit-hero-desc-input').value.trim();

            localStorage.setItem('ghosn_matak_announcements', JSON.stringify(announcements));
            initAnnouncements();
            showToast('تم تحديث إعلانات ونصوص متجر غصن المتك بنجاح! 📢', 'success');
        });
    }

    // Add coupon form
    const addCouponForm = document.getElementById('add-coupon-form');
    if (addCouponForm) {
        addCouponForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = document.getElementById('new-coupon-code').value.trim().toUpperCase();
            const discount = parseInt(document.getElementById('new-coupon-discount').value);
            const desc = document.getElementById('new-coupon-desc').value.trim();

            coupons.push({ code, discount, desc });
            localStorage.setItem('ghosn_matak_coupons', JSON.stringify(coupons));
            
            addCouponForm.reset();
            renderAdminCouponsTable();
            showToast(`تم إنشاء الكوبون ${code} بنجاح! 🎟️`, 'success');
        });
    }
}

function resetProductForm() {
    editingProductId = null;
    const form = document.getElementById('add-product-form');
    if (form) form.reset();

    const editIdInput = document.getElementById('edit-prod-id');
    if (editIdInput) editIdInput.value = '';

    const heading = document.getElementById('product-form-heading');
    const subheading = document.getElementById('product-form-subheading');
    const submitText = document.getElementById('submit-product-text');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const tabTitle = document.getElementById('admin-product-tab-title');

    if (heading) heading.textContent = 'إضافة منتج جديد إلى غصن المتك';
    if (subheading) subheading.textContent = 'أضف أو عدل منتجات النباتات، البذور، المبيدات، أنظمة الري، الأسمدة أو الأدوات';
    if (submitText) submitText.textContent = 'حفظ ونشر المنتج في غصن المتك فوراً 🚀';
    if (cancelBtn) cancelBtn.classList.add('hidden');
    if (tabTitle) tabTitle.textContent = '+ إضافة أو تعديل منتج';
}

function startEditingProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    editingProductId = product.id;

    document.getElementById('edit-prod-id').value = product.id;
    document.getElementById('new-prod-name').value = product.name;
    document.getElementById('new-prod-botanical').value = product.botanicalName || '';
    document.getElementById('new-prod-category').value = product.category;
    document.getElementById('new-prod-price').value = product.price;
    document.getElementById('new-prod-orig-price').value = product.originalPrice || '';
    document.getElementById('new-prod-image').value = product.image;
    document.getElementById('new-prod-badge').value = product.badge || '';
    document.getElementById('new-prod-water').value = product.water || '';
    document.getElementById('new-prod-size').value = product.potSize || product.height || '';
    document.getElementById('new-prod-pet').checked = Boolean(product.petFriendly);
    document.getElementById('new-prod-stock').checked = product.inStock !== false;
    document.getElementById('new-prod-desc').value = product.description || '';

    const heading = document.getElementById('product-form-heading');
    const subheading = document.getElementById('product-form-subheading');
    const submitText = document.getElementById('submit-product-text');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const tabTitle = document.getElementById('admin-product-tab-title');

    if (heading) heading.textContent = `تعديل: ${product.name}`;
    if (subheading) subheading.textContent = 'قم بتعديل الأسعار والبيانات والتوفر ثم اضغط حفظ التعديلات';
    if (submitText) submitText.textContent = 'حفظ وتحديث بيانات المنتج 💾';
    if (cancelBtn) cancelBtn.classList.remove('hidden');
    if (tabTitle) tabTitle.textContent = `✏️ تعديل: ${product.name.substring(0, 14)}...`;

    const tabBtn = document.querySelector('.admin-tab-btn[data-tab="add-product"]');
    if (tabBtn) tabBtn.click();
}

function populateAnnouncementForm() {
    const editAnn = document.getElementById('edit-announcement-input');
    const editHeroBadge = document.getElementById('edit-hero-badge-input');
    const editHeroTitle = document.getElementById('edit-hero-title-input');
    const editHeroDesc = document.getElementById('edit-hero-desc-input');

    if (editAnn) editAnn.value = announcements.topBar;
    if (editHeroBadge) editHeroBadge.value = announcements.heroBadge;
    if (editHeroTitle) editHeroTitle.value = announcements.heroTitle;
    if (editHeroDesc) editHeroDesc.value = announcements.heroDesc;
}

function renderAdminProductsTable() {
    const tbody = document.getElementById('admin-products-table-body');
    const countSpan = document.getElementById('admin-prod-count');
    if (countSpan) countSpan.textContent = products.length;

    if (!tbody) return;

    const catLabels = {
        'plants': '🪴 النباتات والنوادر',
        'seeds': '🌱 البذور والتقاوي',
        'pesticides': '🛡️ المبيدات والوقاية',
        'irrigation': '💧 أنظمة الري الحديث',
        'fertilizers': '🧪 الأسمدة والمغذيات',
        'tools': '✂️ الأدوات والمعدات',
        'pots': '🏺 المراكن والأحواض'
    };

    tbody.innerHTML = products.map((p) => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3">
                <img src="${p.image}" class="w-11 h-11 object-cover rounded-xl border border-gray-200 dark:border-gray-700">
            </td>
            <td class="p-3 font-bold text-gray-900 dark:text-white">
                ${p.name}
                <span class="block text-[10px] text-gray-400 font-mono">${p.botanicalName}</span>
            </td>
            <td class="p-3 text-gray-600 dark:text-gray-300 font-medium text-[11px]">${catLabels[p.category] || p.category}</td>
            <td class="p-3 font-mono font-bold text-brand-600 dark:text-brand-400">${p.price.toFixed(2)} ر.ع</td>
            <td class="p-3">
                <button class="toggle-stock-btn px-2.5 py-1 rounded-lg text-[10px] font-bold ${p.inStock ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800'}" data-id="${p.id}">
                    ${p.inStock ? 'متوفر' : 'نفذ'}
                </button>
            </td>
            <td class="p-3 text-center">
                <div class="flex items-center justify-center gap-1.5">
                    <button class="edit-prod-btn text-brand-600 dark:text-brand-400 hover:text-brand-800 p-2 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950 transition" data-id="${p.id}" title="تعديل المنتج">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                    </button>
                    <button class="delete-prod-btn text-rose-500 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950 transition" data-id="${p.id}" title="حذف المنتج">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    tbody.querySelectorAll('.edit-prod-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            startEditingProduct(id);
        });
    });

    tbody.querySelectorAll('.toggle-stock-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const p = products.find(item => item.id === id);
            if (p) {
                p.inStock = !p.inStock;
                localStorage.setItem('ghosn_matak_products', JSON.stringify(products));
                renderAdminProductsTable();
                renderProducts();
            }
        });
    });

    tbody.querySelectorAll('.delete-prod-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const p = products.find(item => item.id === id);
            if (confirm(`هل أنت متأكد من رغبتك في حذف "${p ? p.name : 'المنتج'}" من متجر غصن المتك؟`)) {
                products = products.filter(item => item.id !== id);
                localStorage.setItem('ghosn_matak_products', JSON.stringify(products));
                renderAdminProductsTable();
                renderProducts();
                showToast('تم حذف المنتج من المتجر', 'info');
            }
        });
    });

    initLucideIcons();
}

function renderAdminCouponsTable() {
    const tbody = document.getElementById('admin-coupons-table-body');
    if (!tbody) return;

    tbody.innerHTML = coupons.map(c => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">${c.code}</td>
            <td class="p-3 font-bold">${c.isFreeShipping ? 'شحن مجاني' : `${c.discount}%`}</td>
            <td class="p-3 text-gray-500">${c.desc || '-'}</td>
            <td class="p-3 text-center">
                <button class="delete-coupon-btn text-rose-500 hover:text-rose-700 p-1.5" data-code="${c.code}" title="حذف">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </td>
        </tr>
    `).join('');

    tbody.querySelectorAll('.delete-coupon-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            coupons = coupons.filter(c => c.code !== code);
            localStorage.setItem('ghosn_matak_coupons', JSON.stringify(coupons));
            renderAdminCouponsTable();
            showToast(`تم حذف الكوبون ${code}`, 'info');
        });
    });

    initLucideIcons();
}

function renderAdminOrdersTable() {
    const tbody = document.getElementById('admin-orders-table-body');
    const countSpan = document.getElementById('admin-orders-count');
    if (countSpan) countSpan.textContent = `${orders.length} طلبات`;
    if (!tbody) return;

    tbody.innerHTML = orders.map(o => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3 font-mono font-bold text-brand-600">${o.id}</td>
            <td class="p-3 text-gray-500 font-mono">${o.date}</td>
            <td class="p-3">${o.itemsCount} منتج</td>
            <td class="p-3 font-mono font-bold">${o.total.toFixed(2)} ر.ع</td>
            <td class="p-3">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    ${o.status}
                </span>
            </td>
        </tr>
    `).join('');
}

// --- Mobile Bottom Navigation ---
function initMobileBottomNav() {
    const navCats = document.getElementById('mobile-nav-cats');
    const navWishlist = document.getElementById('mobile-nav-wishlist');
    const navCart = document.getElementById('mobile-nav-cart');

    if (navCats) {
        navCats.addEventListener('click', () => {
            const drawer = document.getElementById('mobile-drawer');
            const overlay = document.getElementById('mobile-drawer-overlay');
            drawer.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
        });
    }

    if (navWishlist) {
        navWishlist.addEventListener('click', () => {
            if (state.wishlist.length === 0) {
                showToast('قائمة المفضلة فارغة حالياً 🌿', 'info');
            } else {
                showToast(`لديك ${state.wishlist.length} منتجات في المفضلة!`, 'info');
            }
        });
    }

    if (navCart) {
        navCart.addEventListener('click', () => {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-drawer-overlay');
            drawer.classList.remove('-translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
        });
    }
}

// --- Category Navigation ---
function initCategoryNavigation() {
    const desktopBtns = document.querySelectorAll('.cat-nav-btn');
    const mobileBtns = document.querySelectorAll('.mobile-cat-btn');
    const sidebarBtns = document.querySelectorAll('.filter-cat-sidebar-btn');

    function setActiveCategory(cat) {
        state.category = cat;
        
        desktopBtns.forEach(btn => {
            if (btn.dataset.category === cat) {
                btn.className = 'cat-nav-btn active shrink-0 px-3.5 py-1.5 rounded-full bg-brand-500 text-white font-bold transition shadow-sm';
            } else {
                btn.className = 'cat-nav-btn shrink-0 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 transition';
            }
        });

        const catTitles = {
            'all': 'كل الأقسام والمنتجات',
            'plants': '🪴 النباتات الطبيعية والنوادر',
            'seeds': '🌱 البذور والتقاوي',
            'pesticides': '🛡️ المبيدات والوقاية الزراعية',
            'irrigation': '💧 أنظمة الري الحديث والتقطير',
            'fertilizers': '🧪 الأسمدة والمغذيات والتربة',
            'tools': '✂️ الأدوات والمعدات الزراعية',
            'pots': '🏺 المراكن والأحواض والديكور'
        };

        const titleElem = document.getElementById('current-category-title');
        if (titleElem) {
            titleElem.textContent = catTitles[cat] || 'كل المنتجات';
        }

        renderProducts();
    }

    desktopBtns.forEach(btn => {
        btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
    });

    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
    });

    mobileBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveCategory(btn.dataset.category);
            if (window.closeMobileDrawer) window.closeMobileDrawer();
        });
    });
}

// --- Filters & Sorting ---
function initFiltersAndSorting() {
    const priceSlider = document.getElementById('price-slider');
    const priceLabel = document.getElementById('price-range-label');
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            state.maxPrice = Number(e.target.value);
            priceLabel.textContent = `حتى ${state.maxPrice.toFixed(2)} ر.ع`;
            renderProducts();
        });
    }

    const petFriendlyCb = document.getElementById('filter-pet-friendly');
    if (petFriendlyCb) {
        petFriendlyCb.addEventListener('change', (e) => {
            state.petFriendlyOnly = e.target.checked;
            renderProducts();
        });
    }

    const onSaleCb = document.getElementById('filter-on-sale');
    if (onSaleCb) {
        onSaleCb.addEventListener('change', (e) => {
            state.onSaleOnly = e.target.checked;
            renderProducts();
        });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderProducts();
        });
    }

    const resetBtn = document.getElementById('reset-filters-btn');
    const emptyResetBtn = document.getElementById('empty-reset-btn');
    const resetAll = () => {
        state.category = 'all';
        state.searchQuery = '';
        state.maxPrice = 60;
        state.petFriendlyOnly = false;
        state.onSaleOnly = false;

        if (priceSlider) priceSlider.value = 60;
        if (priceLabel) priceLabel.textContent = 'حتى 60.00 ر.ع';
        if (petFriendlyCb) petFriendlyCb.checked = false;
        if (onSaleCb) onSaleCb.checked = false;
        
        const desktopSearch = document.getElementById('desktop-search-input');
        if (desktopSearch) desktopSearch.value = '';
        const mobileSearch = document.getElementById('mobile-search-input');
        if (mobileSearch) mobileSearch.value = '';

        renderProducts();
    };

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);
}

// --- Live Search ---
function initSearch() {
    const desktopInput = document.getElementById('desktop-search-input');
    const mobileInput = document.getElementById('mobile-search-input');
    const clearBtn = document.getElementById('clear-search-btn');
    const dropdown = document.getElementById('search-results-dropdown');

    function handleSearch(query) {
        state.searchQuery = query.trim().toLowerCase();
        if (state.searchQuery.length > 0) {
            if (clearBtn) clearBtn.classList.remove('hidden');
            if (dropdown) showSearchPreview(state.searchQuery);
        } else {
            if (clearBtn) clearBtn.classList.add('hidden');
            if (dropdown) dropdown.classList.add('hidden');
        }
        renderProducts();
    }

    function showSearchPreview(q) {
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.botanicalName.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        ).slice(0, 5);

        if (matches.length === 0) {
            dropdown.innerHTML = `
                <div class="p-3 text-center text-xs text-gray-500">
                    لا توجد نتائج مطابقة لـ "<strong>${q}</strong>" في غصن المتك
                </div>
            `;
            dropdown.classList.remove('hidden');
            return;
        }

        dropdown.innerHTML = `
            <div class="p-2 border-b border-gray-100 dark:border-gray-800 text-[10px] font-bold text-gray-400">
                نتائج مطابقة سريعة في غصن المتك:
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-800">
                ${matches.map(p => `
                    <div class="p-2.5 hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer flex items-center justify-between transition search-preview-item" data-id="${p.id}">
                        <div class="flex items-center gap-2.5">
                            <img src="${p.image}" class="w-9 h-9 object-cover rounded-lg">
                            <div class="text-right">
                                <h5 class="text-xs font-bold text-gray-900 dark:text-white">${p.name}</h5>
                                <span class="text-[10px] text-gray-400 font-mono">${p.botanicalName}</span>
                            </div>
                        </div>
                        <span class="text-xs font-black text-brand-600 dark:text-brand-400 font-mono">${p.price.toFixed(2)} ر.ع</span>
                    </div>
                `).join('')}
            </div>
        `;
        dropdown.classList.remove('hidden');

        dropdown.querySelectorAll('.search-preview-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = Number(item.dataset.id);
                openQuickView(id);
                dropdown.classList.add('hidden');
            });
        });
    }

    if (desktopInput) {
        desktopInput.addEventListener('input', (e) => handleSearch(e.target.value));
        desktopInput.addEventListener('focus', () => {
            if (state.searchQuery.length > 0) showSearchPreview(state.searchQuery);
        });
    }

    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => handleSearch(e.target.value));
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (desktopInput) desktopInput.value = '';
            handleSearch('');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#desktop-search-input') && !e.target.closest('#search-results-dropdown')) {
            if (dropdown) dropdown.classList.add('hidden');
        }
    });
}

// --- Render Products Engine ---
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const countBadge = document.getElementById('product-count-badge');

    let filtered = products.filter(p => {
        if (state.category !== 'all' && p.category !== state.category) return false;

        if (state.searchQuery) {
            const matchName = p.name.toLowerCase().includes(state.searchQuery);
            const matchBotanical = p.botanicalName.toLowerCase().includes(state.searchQuery);
            const matchDesc = p.description.toLowerCase().includes(state.searchQuery);
            if (!matchName && !matchBotanical && !matchDesc) return false;
        }

        if (p.price > state.maxPrice) return false;
        if (state.petFriendlyOnly && !p.petFriendly) return false;
        if (state.onSaleOnly && (!p.originalPrice || p.originalPrice <= p.price)) return false;

        return true;
    });

    if (state.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'best-seller') {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (countBadge) {
        countBadge.textContent = `${filtered.length} منتج`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    grid.innerHTML = filtered.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        
        return `
            <div class="product-card bg-white dark:bg-gray-800/90 rounded-2xl sm:rounded-3xl border border-gray-200/70 dark:border-gray-700/60 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between group relative transition-all duration-300">
                
                <div class="relative card-shine overflow-hidden">
                    <img src="${product.image}" 
                        alt="${product.name}" 
                        loading="lazy"
                        class="w-full h-36 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500">
                    
                    <div class="absolute top-2 right-2 flex flex-col gap-1 z-10">
                        ${product.badge ? `
                            <span class="px-2 py-0.5 rounded-full bg-brand-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold shadow-xs">
                                ${product.badge}
                            </span>
                        ` : ''}
                        ${discountPercentage > 0 ? `
                            <span class="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-black w-max shadow-xs">
                                -${discountPercentage}%
                            </span>
                        ` : ''}
                    </div>

                    <button class="wishlist-btn absolute top-2 left-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-600 dark:text-gray-300 hover:text-rose-500 flex items-center justify-center shadow transition z-10 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}" 
                        data-id="${product.id}" 
                        title="أضف للمفضلة">
                        <i data-lucide="heart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}"></i>
                    </button>
                </div>

                <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between text-right space-y-2">
                    <div class="space-y-1">
                        <div class="flex items-center justify-between text-[10px] text-gray-400">
                            <span class="truncate">${product.water}</span>
                            <div class="flex items-center gap-0.5 text-amber-400 font-bold">
                                <span>★</span>
                                <span class="text-gray-600 dark:text-gray-300 font-mono">${product.rating}</span>
                            </div>
                        </div>

                        <h3 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white leading-tight line-clamp-1 hover:text-brand-600 transition cursor-pointer product-title-click" data-id="${product.id}">
                            ${product.name}
                        </h3>
                        <p class="text-[10px] text-gray-400 font-mono italic truncate">${product.botanicalName}</p>
                    </div>

                    <div class="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-700/60">
                        <div class="text-right">
                            <div class="flex items-baseline gap-1">
                                <span class="text-sm sm:text-base font-black text-brand-700 dark:text-brand-400 font-mono">${product.price.toFixed(2)}</span>
                                <span class="text-[10px] text-gray-500">ر.ع</span>
                            </div>
                        </div>

                        <button class="add-to-cart-btn px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs shadow-xs transition flex items-center gap-1" 
                            data-id="${product.id}"
                            title="إضافة للسلة">
                            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                            <span class="hidden sm:inline text-[11px]">أضف</span>
                        </button>
                    </div>
                </div>

            </div>
        `;
    }).join('');

    initLucideIcons();
    attachCardEventListeners();
}

function attachCardEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            addToCart(id, 1);
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            toggleWishlist(id);
        });
    });

    document.querySelectorAll('.product-title-click').forEach(elem => {
        elem.addEventListener('click', () => {
            const id = Number(elem.dataset.id);
            openQuickView(id);
        });
    });
}

// --- Cart System ---
function initCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    const openBtn = document.getElementById('cart-drawer-toggle');
    const closeBtn = document.getElementById('close-cart-drawer');
    const exploreBtn = document.getElementById('cart-explore-btn');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');

    function openCart() {
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    function closeCart() {
        drawer.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    }

    if (openBtn) openBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    if (exploreBtn) exploreBtn.addEventListener('click', closeCart);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) return;
            closeCart();
            openCheckoutModal();
        });
    }

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const couponInput = document.getElementById('coupon-input');
            const feedback = document.getElementById('coupon-feedback');
            const code = couponInput.value.trim().toUpperCase();

            const matched = coupons.find(c => c.code.toUpperCase() === code);

            if (matched) {
                state.appliedCoupon = matched.code;
                state.discountPercent = matched.isFreeShipping ? 0 : (matched.discount / 100);
                feedback.textContent = `🎉 تم تطبيق الكوبون ${matched.code} بنجاح (${matched.desc || ''})!`;
                feedback.className = 'text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block';
            } else {
                feedback.textContent = '❌ كود غير صالح، تأكد من صحة الرمز';
                feedback.className = 'text-[11px] font-bold text-rose-500 block';
            }
            updateCartUI();
        });
    }
}

function addToCart(productId, quantity = 1) {
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            botanicalName: product.botanicalName,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showToast('تمت إضافة المنتج إلى سلة غصن المتك! 🇴🇲🌱', 'success');
}

function updateCartQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast('تم إزالة المنتج من السلة', 'info');
}

function saveCart() {
    localStorage.setItem('ghosn_matak_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const emptyView = document.getElementById('cart-empty-view');
    const cartFooter = document.getElementById('cart-footer');
    const badge = document.getElementById('cart-badge');
    const mobileCartBadge = document.getElementById('mobile-cart-badge');
    const headerTotal = document.getElementById('cart-header-total');
    const countText = document.getElementById('cart-items-count-text');

    const subtotalElem = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('discount-row');
    const discountAmountElem = document.getElementById('cart-discount-amount');
    const shippingElem = document.getElementById('cart-shipping-fee');
    const grandTotalElem = document.getElementById('cart-grand-total');

    const freeShippingMsg = document.getElementById('free-shipping-message');
    const freeShippingProgress = document.getElementById('free-shipping-progress');
    const freeShippingPercent = document.getElementById('free-shipping-percent');

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const isFreeCode = state.appliedCoupon === 'FREE';
    const freeShippingThreshold = 25.00;
    let shippingFee = subtotal >= freeShippingThreshold || isFreeCode ? 0 : (subtotal > 0 ? 2.50 : 0);
    
    let discount = subtotal * state.discountPercent;
    let grandTotal = Math.max(0, subtotal - discount + shippingFee);

    if (badge) badge.textContent = totalItems;
    if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
    if (headerTotal) headerTotal.textContent = `${subtotal.toFixed(2)} ر.ع`;
    if (countText) countText.textContent = `${totalItems} منتجات`;

    if (subtotal >= freeShippingThreshold || isFreeCode) {
        freeShippingMsg.textContent = '🎉 مبروك! حصلت على توصيل مجاني لكافة محافظات عُمان!';
        freeShippingProgress.style.width = '100%';
        freeShippingPercent.textContent = '100%';
    } else {
        const remaining = (freeShippingThreshold - subtotal).toFixed(2);
        const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        freeShippingMsg.textContent = `أضف ${remaining} ر.ع للحصول على شحن مجاني 🚀`;
        freeShippingProgress.style.width = `${pct}%`;
        freeShippingPercent.textContent = `${pct}%`;
    }

    if (state.cart.length === 0) {
        list.innerHTML = '';
        list.classList.add('hidden');
        cartFooter.classList.add('hidden');
        emptyView.classList.remove('hidden');
    } else {
        list.classList.remove('hidden');
        cartFooter.classList.remove('hidden');
        emptyView.classList.add('hidden');

        list.innerHTML = state.cart.map(item => `
            <div class="flex items-center gap-2.5 bg-gray-50 dark:bg-gray-800/60 p-2.5 rounded-2xl border border-gray-100 dark:border-gray-700/60">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl shrink-0">
                <div class="flex-1 text-right min-w-0">
                    <h4 class="text-xs font-bold text-gray-900 dark:text-white truncate">${item.name}</h4>
                    <span class="text-[10px] text-gray-400 font-mono block">${item.botanicalName}</span>
                    <span class="text-xs font-black text-brand-600 dark:text-brand-400 font-mono">${(item.price * item.quantity).toFixed(2)} ر.ع</span>
                </div>
                
                <div class="flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-1.5 py-0.5">
                    <button class="cart-qty-minus text-gray-500 hover:text-brand-600 text-xs font-bold px-1" data-id="${item.id}">-</button>
                    <span class="text-xs font-bold text-gray-800 dark:text-gray-200 w-3 text-center font-mono">${item.quantity}</span>
                    <button class="cart-qty-plus text-gray-500 hover:text-brand-600 text-xs font-bold px-1" data-id="${item.id}">+</button>
                </div>

                <button class="cart-remove-item text-gray-400 hover:text-rose-500 p-1" data-id="${item.id}">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `).join('');

        list.querySelectorAll('.cart-qty-plus').forEach(b => {
            b.addEventListener('click', () => updateCartQuantity(Number(b.dataset.id), 1));
        });
        list.querySelectorAll('.cart-qty-minus').forEach(b => {
            b.addEventListener('click', () => updateCartQuantity(Number(b.dataset.id), -1));
        });
        list.querySelectorAll('.cart-remove-item').forEach(b => {
            b.addEventListener('click', () => removeFromCart(Number(b.dataset.id)));
        });
    }

    if (subtotalElem) subtotalElem.textContent = `${subtotal.toFixed(2)} ر.ع`;
    if (discount > 0 && discountRow && discountAmountElem) {
        discountRow.classList.remove('hidden');
        discountAmountElem.textContent = `-${discount.toFixed(2)} ر.ع`;
    } else if (discountRow) {
        discountRow.classList.add('hidden');
    }

    if (shippingElem) {
        shippingElem.textContent = shippingFee === 0 ? 'مجاني 🚀' : `${shippingFee.toFixed(2)} ر.ع`;
    }
    if (grandTotalElem) grandTotalElem.textContent = `${grandTotal.toFixed(2)} ر.ع`;

    initLucideIcons();
}

// --- Wishlist System ---
function initWishlist() {
    const toggleBtn = document.getElementById('wishlist-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (state.wishlist.length === 0) {
                showToast('قائمة المفضلة فارغة حالياً 🌿', 'info');
            } else {
                showToast(`لديك ${state.wishlist.length} منتجات في المفضلة!`, 'info');
            }
        });
    }
}

function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast('تمت الإزالة من قائمة المفضلة', 'info');
    } else {
        state.wishlist.push(productId);
        showToast('تمت الإضافة إلى المفضلة ❤️', 'success');
    }
    localStorage.setItem('ghosn_matak_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadge();
    renderProducts();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    const mobileWishlistBadge = document.getElementById('mobile-wishlist-badge');
    if (badge) badge.textContent = state.wishlist.length;
    if (mobileWishlistBadge) mobileWishlistBadge.textContent = state.wishlist.length;
}

// --- Modals & Drawers ---
function initModals() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
    const closeDrawerBtn = document.getElementById('close-mobile-drawer');

    function openMobileDrawer() {
        mobileDrawer.classList.remove('translate-x-full');
        mobileDrawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    function closeMobileDrawer() {
        mobileDrawer.classList.add('translate-x-full');
        mobileDrawerOverlay.classList.add('opacity-0', 'pointer-events-none');
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

    window.closeMobileDrawer = closeMobileDrawer;

    // Quick View Modal
    const quickViewModal = document.getElementById('quick-view-modal');
    const closeQuickViewBtn = document.getElementById('close-quick-view');
    const quickViewOverlay = document.getElementById('quick-view-overlay');

    function closeQuickView() {
        quickViewModal.classList.remove('active');
    }

    if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
    if (quickViewOverlay) quickViewOverlay.addEventListener('click', closeQuickView);

    const closeSuccessBtn = document.getElementById('close-success-modal-btn');
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            document.getElementById('order-success-modal').classList.remove('active');
        });
    }
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');

    content.innerHTML = `
        <div class="space-y-2">
            <div class="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xs">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 sm:h-64 object-cover">
            </div>
            <div class="flex items-center gap-1.5 text-[11px] text-brand-600 dark:text-brand-400 font-bold justify-center">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> متجر غصن المتك - ضمان جودة عالي
            </div>
        </div>

        <div class="space-y-3 text-right">
            <div>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 font-bold">
                    ${product.badge || 'منتج زراعي أصلي'}
                </span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-1">${product.name}</h3>
                <p class="text-[11px] text-gray-400 font-mono italic">${product.botanicalName}</p>
            </div>

            <div class="flex items-baseline gap-1.5 font-mono">
                <span class="text-xl font-black text-brand-600 dark:text-brand-400">${product.price.toFixed(2)} ر.ع</span>
                ${product.originalPrice ? `<span class="text-xs line-through text-gray-400">${product.originalPrice.toFixed(2)} ر.ع</span>` : ''}
            </div>

            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                ${product.description}
            </p>

            <div class="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/60 space-y-1.5 text-[11px]">
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">طريقة الاستخدام / الجدولة:</span>
                    <strong class="text-gray-800 dark:text-white">${product.water}</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">المواصفات والحجم:</span>
                    <strong class="text-gray-800 dark:text-white">${product.potSize}</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">الأمان والتصنيف:</span>
                    <strong class="${product.petFriendly ? 'text-emerald-600' : 'text-amber-600'}">
                        ${product.petFriendly ? '🌿 منتج آمن / عضوي' : '⚠️ يراعى اتباع تعليمات الاستخدام'}
                    </strong>
                </div>
            </div>

            <div class="flex gap-2 pt-1">
                <button class="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5 modal-add-to-cart" data-id="${product.id}">
                    <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                    <span>أضف للسلة</span>
                </button>
                <button class="wishlist-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300" data-id="${product.id}">
                    <i data-lucide="heart" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    initLucideIcons();

    content.querySelector('.modal-add-to-cart').addEventListener('click', () => {
        addToCart(product.id, 1);
        modal.classList.remove('active');
    });
}

// --- Plant Diagnostic Wizard ---
function initCareWizard() {
    const wizardModal = document.getElementById('care-wizard-modal');
    const openBtn = document.getElementById('open-care-wizard-btn');
    const closeBtn = document.getElementById('close-care-wizard');
    const overlay = document.getElementById('care-wizard-overlay');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            wizardModal.classList.add('active');
        });
    }

    function closeWizard() {
        wizardModal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeWizard);
    if (overlay) overlay.addEventListener('click', closeWizard);

    document.querySelectorAll('.wizard-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            state.category = cat;
            
            const stepsContainer = document.getElementById('wizard-steps-container');
            const resultContainer = document.getElementById('wizard-result-container');
            const recCards = document.getElementById('wizard-recommended-cards');

            const matches = products.filter(p => p.category === cat).slice(0, 2);

            recCards.innerHTML = matches.map(p => `
                <div class="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                    <img src="${p.image}" class="w-full h-20 object-cover rounded-lg mb-1.5">
                    <h5 class="text-[11px] font-bold truncate">${p.name}</h5>
                    <span class="text-[11px] font-black text-brand-600 font-mono">${p.price.toFixed(2)} ر.ع</span>
                </div>
            `).join('');

            stepsContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');

            const applyBtn = document.getElementById('wizard-apply-filter-btn');
            applyBtn.onclick = () => {
                closeWizard();
                const targetBtn = document.querySelector(`.cat-nav-btn[data-category="${cat}"]`);
                if (targetBtn) targetBtn.click();
                document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
            };
        });
    });
}

// --- WhatsApp Checkout Modal ---
const STORE_WHATSAPP_NUMBER = '96891660990'; // رقم واتساب متجر غصن المتك

function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const summaryContainer = document.getElementById('checkout-order-summary');
    const grandTotalElem = document.getElementById('checkout-grand-total');

    // Calculate totals
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const isFreeCode = state.appliedCoupon === 'FREE';
    let shippingFee = subtotal >= 25.00 || isFreeCode ? 0 : (subtotal > 0 ? 2.50 : 0);
    let discount = subtotal * state.discountPercent;
    let grandTotal = Math.max(0, subtotal - discount + shippingFee);

    // Render order summary inside checkout modal
    if (summaryContainer) {
        summaryContainer.innerHTML = state.cart.map(item => `
            <div class="flex items-center justify-between py-1 border-b border-gray-100 dark:border-gray-700/40 last:border-0">
                <div class="flex items-center gap-2">
                    <img src="${item.image}" class="w-8 h-8 rounded-lg object-cover">
                    <div class="text-right">
                        <span class="font-semibold text-gray-800 dark:text-gray-100 text-[11px] block">${item.name}</span>
                        <span class="text-gray-400 text-[10px] font-mono">× ${item.quantity}</span>
                    </div>
                </div>
                <span class="font-bold font-mono text-[11px] text-brand-700 dark:text-brand-400">${(item.price * item.quantity).toFixed(2)} ر.ع</span>
            </div>
        `).join('');
    }

    if (grandTotalElem) grandTotalElem.textContent = `${grandTotal.toFixed(2)} ر.ع`;

    modal.classList.add('active');
    initLucideIcons();

    // Delivery type radio toggle visual
    document.querySelectorAll('.delivery-radio').forEach(radio => {
        radio.addEventListener('change', () => {
            document.querySelectorAll('.delivery-card').forEach(card => {
                card.style.borderColor = '#e5e7eb';
                card.style.backgroundColor = '';
            });
            const selectedCard = radio.nextElementSibling;
            if (selectedCard) {
                selectedCard.style.borderColor = '#15803d';
                selectedCard.style.backgroundColor = 'rgba(21,128,61,0.07)';
            }
        });
    });

    // Close button
    const closeBtn = document.getElementById('close-checkout-modal');
    const overlay = document.getElementById('checkout-modal-overlay');
    const closeModal = () => modal.classList.remove('active');
    if (closeBtn) closeBtn.onclick = closeModal;
    if (overlay) overlay.onclick = closeModal;

    // Handle form submit -> Send WhatsApp invoice
    const form = document.getElementById('checkout-customer-form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const customerName   = document.getElementById('customer-name').value.trim();
            const customerPhone  = document.getElementById('customer-phone').value.trim();
            const governorate    = document.getElementById('customer-governorate').value;
            const address        = document.getElementById('customer-address').value.trim();
            const notes          = document.getElementById('customer-notes').value.trim();
            const deliveryType   = document.querySelector('input[name="delivery-type"]:checked')?.value || 'توصيل للبيت 🏠';

            sendWhatsAppInvoice({
                customerName,
                customerPhone,
                governorate,
                address,
                deliveryType,
                notes,
                cart: state.cart,
                subtotal,
                discount,
                shippingFee,
                grandTotal,
                couponCode: state.appliedCoupon
            });
        };
    }
}

function sendWhatsAppInvoice(data) {
    const {
        customerName, customerPhone, governorate, address,
        deliveryType, notes, cart, subtotal, discount,
        shippingFee, grandTotal, couponCode
    } = data;

    // Generate order number
    const orderNum = '#GM-' + Math.floor(1000 + Math.random() * 9000);
    const orderDate = new Date().toLocaleString('ar-OM', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
    });

    // Build the invoice message lines
    const divider = '━━━━━━━━━━━━━━━━━━━━━━';
    const dividerLight = '─────────────────────';

    let itemsText = cart.map((item, i) => 
        `${i + 1}. ${item.name}\n    الكمية: ×${item.quantity} | السعر: ${(item.price * item.quantity).toFixed(2)} ر.ع`
    ).join('\n');

    let discountLine = discount > 0 
        ? `\n🎟️ خصم الكوبون (${couponCode}): -${discount.toFixed(2)} ر.ع` 
        : '';

    let shippingLine = shippingFee === 0 
        ? `🚀 الشحن: مجاني` 
        : `📦 رسوم الشحن: ${shippingFee.toFixed(2)} ر.ع`;

    const message = 
`🌿 *فاتورة طلب | متجر غصن المتك* 🌿
${divider}

📋 *رقم الطلب:* ${orderNum}
📅 *التاريخ:* ${orderDate}

${divider}
👤 *بيانات المشتري*
${dividerLight}
*الاسم:* ${customerName}
*الهاتف (واتساب):* +968 ${customerPhone}
*المحافظة:* ${governorate}
*العنوان:* ${address}
*طريقة الاستلام:* ${deliveryType}
${notes ? `*ملاحظات:* ${notes}` : ''}

${divider}
🛒 *تفاصيل المنتجات المطلوبة*
${dividerLight}
${itemsText}

${divider}
💰 *ملخص الفاتورة*
${dividerLight}
🧾 المجموع الفرعي: ${subtotal.toFixed(2)} ر.ع${discountLine}
${shippingLine}
${divider}
✅ *الإجمالي الكلي: ${grandTotal.toFixed(2)} ر.ع*
${divider}

🙏 شكراً لتسوقكم من متجر غصن المتك!
سيتم التواصل معكم قريباً لتأكيد الطلب والتوصيل 🇴🇲`;

    // Encode for WhatsApp URL
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMsg}`;

    // Save order to local storage log
    orders.unshift({
        id: orderNum,
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        itemsCount: cart.reduce((s, i) => s + i.quantity, 0),
        total: grandTotal,
        status: 'قيد المراجعة'
    });
    localStorage.setItem('ghosn_matak_orders', JSON.stringify(orders));

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close checkout modal, clear cart, open success modal
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) checkoutModal.classList.remove('active');

    // Set order number in success modal and open it
    document.getElementById('order-number').textContent = orderNum;
    openOrderSuccessModal(orderNum, grandTotal, true);
}

// --- Order Placement Success & Confetti ---
function openOrderSuccessModal(orderNum = null, grandTotal = null, skipSave = false) {
    const modal = document.getElementById('order-success-modal');
    // If called from WhatsApp flow, order number and saving already handled
    if (!skipSave) {
        const randomOrderNumber = '#GM-' + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('order-number').textContent = randomOrderNumber;

        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isFreeCode = state.appliedCoupon === 'FREE';
        let shippingFee = subtotal >= 25.00 || isFreeCode ? 0 : 2.50;
        let discount = subtotal * state.discountPercent;
        let grandTotal = Math.max(0, subtotal - discount + shippingFee);

        orders.unshift({
            id: randomOrderNumber,
            date: new Date().toISOString().replace('T', ' ').substring(0, 16),
            itemsCount: state.cart.reduce((s, i) => s + i.quantity, 0),
            total: grandTotal,
            status: 'قيد التجهيز'
        });
        localStorage.setItem('ghosn_matak_orders', JSON.stringify(orders));
    }

    modal.classList.add('active');

    if (window.confetti) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    state.cart = [];
    saveCart();
    updateCartUI();
}

// --- Custom Toast Notification ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `px-3.5 py-2.5 rounded-2xl shadow-xl border text-xs font-bold flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto ${
        type === 'success' 
            ? 'bg-brand-900 text-white border-brand-700' 
            : 'bg-gray-900 text-white border-gray-700'
    }`;

    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-4 h-4 text-emerald-400"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    initLucideIcons();

    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}
