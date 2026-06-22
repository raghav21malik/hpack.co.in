/* =========================================
   HPack Product Catalog - JavaScript
   Product Data, Filters, Search, Cart
   ========================================= */

// ── Product Data ──
const products = [
  // ─── PHARMA CONTAINERS ───
  { id: 1, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 30, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 5, neck: 20, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "Odorless"], description: "Transparent PET syrup bottle ideal for liquid pharmaceutical formulations. Manufactured in Class 10,000 Clean Room." },
  { id: 2, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 60, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 8, neck: 24, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "Accurate Neck Finish"], description: "Medium-capacity PET syrup bottle with precise 24mm neck finish for pharmaceutical syrups and suspensions." },
  { id: 3, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 100, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 12, neck: 24, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "High Shelf Appeal"], description: "Standard 100ml PET syrup bottle — our most popular pharmaceutical container. Crystal-clear transparency." },
  { id: 4, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 150, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 15, neck: 28, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "Durable"], description: "150ml PET syrup bottle with 28mm neck. Suitable for larger volume pharmaceutical liquids." },
  { id: 5, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 200, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 18, neck: 28, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "Tamper Evident Compatible"], description: "200ml PET syrup bottle designed for family-size pharmaceutical syrups. Compatible with tamper-evident closures." },
  { id: 6, name: "PET Syrup Bottle", category: "pharma", material: "PET", size: 500, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 30, neck: 28, type: "bottle", features: ["Food Grade", "Recyclable", "Clean Room Packed", "Bulk Packaging"], description: "Large 500ml PET syrup bottle for bulk pharmaceutical packaging. Lightweight yet durable." },
  { id: 7, name: "Amber PET Syrup Bottle", category: "pharma", material: "PET", size: 100, unit: "ml", industry: "pharmaceutical", color: "amber", weight: 12, neck: 24, type: "bottle", features: ["UV Protection", "Food Grade", "Clean Room Packed", "Light Sensitive Formulations"], description: "Amber-colored PET bottle providing UV protection for light-sensitive pharmaceutical formulations." },
  { id: 8, name: "Amber PET Syrup Bottle", category: "pharma", material: "PET", size: 200, unit: "ml", industry: "pharmaceutical", color: "amber", weight: 18, neck: 28, type: "bottle", features: ["UV Protection", "Food Grade", "Clean Room Packed", "Recyclable"], description: "200ml amber PET bottle for light-sensitive pharma liquids. Superior UV barrier properties." },
  { id: 9, name: "HDPE Tablet Container", category: "pharma", material: "HDPE", size: 50, unit: "ml", industry: "pharmaceutical", color: "white", weight: 8, neck: 38, type: "jar", features: ["Moisture Barrier", "Food Grade", "Child Resistant Compatible", "Clean Room Packed"], description: "White HDPE container for tablets and capsules. Excellent moisture barrier for solid dosage forms." },
  { id: 10, name: "HDPE Tablet Container", category: "pharma", material: "HDPE", size: 100, unit: "ml", industry: "pharmaceutical", color: "white", weight: 12, neck: 38, type: "jar", features: ["Moisture Barrier", "Food Grade", "Recyclable", "Wide Mouth"], description: "100ml HDPE wide-mouth container for tablets, capsules, and powdered formulations." },
  { id: 11, name: "HDPE Tablet Container", category: "pharma", material: "HDPE", size: 150, unit: "ml", industry: "pharmaceutical", color: "white", weight: 16, neck: 38, type: "jar", features: ["Moisture Barrier", "Food Grade", "Clean Room Packed", "Bulk Count"], description: "Large 150ml HDPE container for bulk tablet counts. Ideal for hospital and institutional packaging." },
  { id: 12, name: "HDPE Dry Syrup Bottle", category: "pharma", material: "HDPE", size: 60, unit: "ml", industry: "pharmaceutical", color: "white", weight: 9, neck: 28, type: "bottle", features: ["Moisture Barrier", "Food Grade", "Reconstitution Friendly", "Clean Room Packed"], description: "HDPE bottle designed for dry syrup formulations. Optimal for reconstitution with water before use." },
  { id: 13, name: "PET Dropper Bottle", category: "pharma", material: "PET", size: 15, unit: "ml", industry: "pharmaceutical", color: "transparent", weight: 4, neck: 18, type: "dropper", features: ["Precision Dispensing", "Food Grade", "Clean Room Packed", "Compact"], description: "15ml PET dropper bottle for ophthalmic, nasal, and ear drop formulations. Precision dispensing." },
  { id: 14, name: "PET Dropper Bottle", category: "pharma", material: "PET", size: 30, unit: "ml", industry: "pharmaceutical", color: "amber", weight: 6, neck: 20, type: "dropper", features: ["UV Protection", "Precision Dispensing", "Food Grade", "Clean Room Packed"], description: "30ml amber PET dropper bottle with UV protection for sensitive liquid formulations." },

  // ─── FMCG CONTAINERS ───
  { id: 15, name: "PET Wide-Mouth Jar", category: "fmcg", material: "PET", size: 100, unit: "ml", industry: "fmcg", color: "transparent", weight: 10, neck: 53, type: "jar", features: ["Food Grade", "Recyclable", "Wide Mouth", "Stackable"], description: "Transparent PET jar with 53mm wide mouth for pickles, jams, sauces, and spreads." },
  { id: 16, name: "PET Wide-Mouth Jar", category: "fmcg", material: "PET", size: 250, unit: "ml", industry: "fmcg", color: "transparent", weight: 16, neck: 63, type: "jar", features: ["Food Grade", "Recyclable", "Wide Mouth", "High Clarity"], description: "250ml PET jar with excellent clarity for retail food product display and packaging." },
  { id: 17, name: "PET Wide-Mouth Jar", category: "fmcg", material: "PET", size: 500, unit: "ml", industry: "fmcg", color: "transparent", weight: 25, neck: 83, type: "jar", features: ["Food Grade", "Recyclable", "Wide Mouth", "Bulk Size"], description: "500ml PET jar for bulk food products, protein powders, and household items." },
  { id: 18, name: "PET Round Jar", category: "fmcg", material: "PET", size: 1000, unit: "ml", industry: "fmcg", color: "transparent", weight: 35, neck: 83, type: "jar", features: ["Food Grade", "Recyclable", "Wide Mouth", "Family Size"], description: "1-litre PET jar for family-size food products, snacks, and bulk retail packaging." },
  { id: 19, name: "HDPE Bottle", category: "fmcg", material: "HDPE", size: 200, unit: "ml", industry: "fmcg", color: "white", weight: 14, neck: 28, type: "bottle", features: ["Food Grade", "Recyclable", "Chemical Resistant", "Lightweight"], description: "HDPE bottle for household cleaners, personal care products, and liquid consumer goods." },
  { id: 20, name: "PP Container", category: "fmcg", material: "PP", size: 250, unit: "ml", industry: "fmcg", color: "transparent", weight: 12, neck: 53, type: "jar", features: ["Microwave Safe", "Food Grade", "Recyclable", "Impact Resistant"], description: "PP container suitable for hot-fill and microwave applications. Ideal for ready-to-eat food." },

  // ─── COSMETIC CONTAINERS ───
  { id: 21, name: "PET Sprayer Bottle", category: "cosmetic", material: "PET", size: 50, unit: "ml", industry: "cosmetic", color: "transparent", weight: 8, neck: 20, type: "sprayer", features: ["Fine Mist Spray", "Premium Finish", "Recyclable", "Travel Size"], description: "Elegant 50ml PET sprayer bottle for perfumes, facial mists, and hair care products." },
  { id: 22, name: "PET Pump Bottle", category: "cosmetic", material: "PET", size: 100, unit: "ml", industry: "cosmetic", color: "transparent", weight: 12, neck: 24, type: "pump", features: ["Smooth Dispensing", "Premium Finish", "Recyclable", "Salon Grade"], description: "100ml PET bottle with pump dispenser for lotions, serums, and liquid soaps." },
  { id: 23, name: "PET Pump Bottle", category: "cosmetic", material: "PET", size: 200, unit: "ml", industry: "cosmetic", color: "transparent", weight: 16, neck: 24, type: "pump", features: ["Smooth Dispensing", "Premium Finish", "Recyclable", "Retail Ready"], description: "200ml PET pump bottle for shampoos, conditioners, body wash, and skincare products." },
  { id: 24, name: "PET Cream Jar", category: "cosmetic", material: "PET", size: 50, unit: "ml", industry: "cosmetic", color: "transparent", weight: 10, neck: 53, type: "jar", features: ["Wide Mouth", "Premium Finish", "Recyclable", "Airtight Seal"], description: "Elegant PET cream jar for moisturizers, night creams, and premium skincare products." },
  { id: 25, name: "PP Cosmetic Jar", category: "cosmetic", material: "PP", size: 100, unit: "ml", industry: "cosmetic", color: "white", weight: 12, neck: 53, type: "jar", features: ["Impact Resistant", "Premium Finish", "Recyclable", "Frosted Option"], description: "PP cosmetic jar with premium finish for body butters, hair masks, and beauty products." },

  // ─── LIQUOR CONTAINERS ───
  { id: 26, name: "PET Liquor Bottle", category: "liquor", material: "PET", size: 180, unit: "ml", industry: "liquor", color: "transparent", weight: 15, neck: 28, type: "bottle", features: ["Tamper Evident", "High Shelf Appeal", "Lightweight", "Shatterproof"], description: "180ml PET bottle for single-serve spirits. Shatterproof alternative to glass with high clarity." },
  { id: 27, name: "PET Liquor Bottle", category: "liquor", material: "PET", size: 375, unit: "ml", industry: "liquor", color: "transparent", weight: 22, neck: 28, type: "bottle", features: ["Tamper Evident", "High Shelf Appeal", "Custom Shape", "Recyclable"], description: "375ml PET liquor bottle with custom design options. Premium appearance with practical durability." },
  { id: 28, name: "PET Liquor Bottle", category: "liquor", material: "PET", size: 750, unit: "ml", industry: "liquor", color: "transparent", weight: 32, neck: 28, type: "bottle", features: ["Tamper Evident", "High Shelf Appeal", "Full Size", "Lightweight"], description: "Full-size 750ml PET liquor bottle. 60% lighter than glass with excellent shelf presence." },

  // ─── CAPS & CLOSURES ───
  { id: 29, name: "Talc Twister Cap", category: "caps", material: "PP", size: 20, unit: "mm", industry: "pharmaceutical", color: "white", weight: 1.25, neck: 20, type: "cap", features: ["Twist-Open", "Tamper Evident", "Precision Fit", "±0.15g Tolerance"], description: "20mm Talc Twister Cap (1.25g ±0.15g) for pharmaceutical syrup bottles. Precise twist-open mechanism." },
  { id: 30, name: "Flip Top Cap", category: "caps", material: "PP", size: 19, unit: "mm", industry: "pharmaceutical", color: "white", weight: 1.5, neck: 19, type: "cap", features: ["One-Hand Open", "Snap Closure", "Leak Proof", "Child Friendly"], description: "19mm Flip Top Cap for dropper bottles and small pharma containers. Convenient one-hand operation." },
  { id: 31, name: "Flip Top Cap", category: "caps", material: "PP", size: 24, unit: "mm", industry: "cosmetic", color: "white", weight: 2, neck: 24, type: "cap", features: ["One-Hand Open", "Snap Closure", "Leak Proof", "Premium Finish"], description: "24mm Flip Top Cap for cosmetic and personal care bottles. Smooth snap-closure mechanism." },
  { id: 32, name: "Screw Cap", category: "caps", material: "PP", size: 53, unit: "mm", industry: "fmcg", color: "white", weight: 5, neck: 53, type: "cap", features: ["Secure Seal", "Wide Mouth", "Tamper Evident", "Reusable"], description: "53mm Screw Cap for wide-mouth jars. Provides secure sealing for food and FMCG products." },
  { id: 33, name: "Screw Cap", category: "caps", material: "PP", size: 83, unit: "mm", industry: "fmcg", color: "white", weight: 8, neck: 83, type: "cap", features: ["Secure Seal", "Wide Mouth", "Tamper Evident", "Industrial Grade"], description: "83mm Screw Cap for large-mouth containers. Heavy-duty construction for bulk packaging." },
  { id: 34, name: "Press Top Cap", category: "caps", material: "PP", size: 45, unit: "mm", industry: "cosmetic", color: "white", weight: 4, neck: 45, type: "cap", features: ["Press to Open", "Smooth Action", "Leak Proof", "Elegant Design"], description: "45mm Press Top Cap for cosmetic jars and containers. Elegant press-to-open design." },

  // ─── SPECIALTY PRODUCTS ───
  { id: 35, name: "HiMax Sanitizer Bottle", category: "specialty", material: "PET", size: 100, unit: "ml", industry: "fmcg", color: "transparent", weight: 10, neck: 24, type: "pump", features: ["Pump Dispenser", "Food Grade", "Recyclable", "Hygienic"], description: "100ml PET sanitizer bottle with pump dispenser. Launched under the HiMax brand." },
  { id: 36, name: "HiMax Sanitizer Bottle", category: "specialty", material: "PET", size: 500, unit: "ml", industry: "fmcg", color: "transparent", weight: 28, neck: 28, type: "pump", features: ["Pump Dispenser", "Food Grade", "Recyclable", "Institutional Size"], description: "500ml PET sanitizer bottle for institutional and commercial use. HiMax brand." },
  { id: 37, name: "Sports Water Bottle", category: "specialty", material: "PC", size: 750, unit: "ml", industry: "sports", color: "transparent", weight: 35, neck: 28, type: "bottle", features: ["Impact Resistant", "BPA Free", "Reusable", "Sports Cap"], description: "750ml polycarbonate sports water bottle. Durable, reusable, and designed for active lifestyles. Via Himalayan Polysports." },
];

// ── SVG Product Illustrations ──
function getProductSVG(type, color) {
  const colors = {
    transparent: { fill: '#E8F0FE', stroke: '#2D6DA4', accent: '#B8D4F0' },
    amber:       { fill: '#FEF3E2', stroke: '#B8860B', accent: '#F5DEB3' },
    white:       { fill: '#F5F5F5', stroke: '#9CA3AF', accent: '#E5E7EB' },
    custom:      { fill: '#FAF6EE', stroke: '#B8935A', accent: '#E8DCC8' },
  };
  const c = colors[color] || colors.transparent;

  const svgs = {
    bottle: `<svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="8" width="20" height="14" rx="2" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1.5"/>
      <rect x="33" y="2" width="14" height="8" rx="2" fill="${c.stroke}" opacity="0.2"/>
      <path d="M30 22 C30 22, 22 35, 22 50 L22 120 C22 126, 26 130, 32 130 L48 130 C54 130, 58 126, 58 120 L58 50 C58 35, 50 22, 50 22" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <path d="M26 60 L54 60" stroke="${c.accent}" stroke-width="0.8" opacity="0.5"/>
      <path d="M24 90 L56 90" stroke="${c.accent}" stroke-width="0.8" opacity="0.5"/>
      <ellipse cx="40" cy="90" rx="12" ry="3" fill="${c.stroke}" opacity="0.04"/>
    </svg>`,
    jar: `<svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="8" width="32" height="10" rx="3" fill="${c.stroke}" opacity="0.15"/>
      <rect x="20" y="18" width="40" height="85" rx="8" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <path d="M24 45 L56 45" stroke="${c.accent}" stroke-width="0.8" opacity="0.5"/>
      <path d="M22 70 L58 70" stroke="${c.accent}" stroke-width="0.8" opacity="0.5"/>
      <rect x="28" y="52" width="24" height="12" rx="2" fill="${c.stroke}" opacity="0.06"/>
    </svg>`,
    dropper: `<svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 2 L36 12 C36 12, 32 14, 32 18 L32 22 L48 22 L48 18 C48 14, 44 12, 44 12 L44 2 Z" fill="${c.stroke}" opacity="0.15"/>
      <ellipse cx="40" cy="10" rx="6" ry="4" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1"/>
      <path d="M32 22 C32 22, 24 34, 24 48 L24 110 C24 118, 30 124, 38 124 L42 124 C50 124, 56 118, 56 110 L56 48 C56 34, 48 22, 48 22" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <line x1="40" y1="28" x2="40" y2="60" stroke="${c.stroke}" stroke-width="1" opacity="0.15"/>
    </svg>`,
    sprayer: `<svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="18" width="20" height="12" rx="2" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1.5"/>
      <rect x="44" y="8" width="16" height="8" rx="3" fill="${c.stroke}" opacity="0.2"/>
      <line x1="52" y1="16" x2="52" y2="22" stroke="${c.stroke}" stroke-width="1.5"/>
      <path d="M30 30 C30 30, 22 42, 22 55 L22 115 C22 122, 27 127, 34 127 L46 127 C53 127, 58 122, 58 115 L58 55 C58 42, 50 30, 50 30" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <path d="M56 12 L65 8" stroke="${c.stroke}" stroke-width="1" stroke-dasharray="2 2" opacity="0.4"/>
      <circle cx="67" cy="7" r="2" fill="${c.stroke}" opacity="0.2"/>
    </svg>`,
    pump: `<svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="37" y="2" width="6" height="20" rx="2" fill="${c.stroke}" opacity="0.25"/>
      <rect x="33" y="22" width="14" height="6" rx="2" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1"/>
      <rect x="30" y="28" width="20" height="10" rx="2" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1.2"/>
      <path d="M30 38 C30 38, 22 48, 22 58 L22 115 C22 122, 27 127, 34 127 L46 127 C53 127, 58 122, 58 115 L58 58 C58 48, 50 38, 50 38" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <path d="M26 75 L54 75" stroke="${c.accent}" stroke-width="0.8" opacity="0.5"/>
    </svg>`,
    cap: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="55" rx="28" ry="8" fill="${c.stroke}" opacity="0.06"/>
      <rect x="18" y="20" width="44" height="30" rx="8" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
      <rect x="22" y="15" width="36" height="8" rx="4" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1.2"/>
      <path d="M18 35 L62 35" stroke="${c.stroke}" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.25"/>
      <path d="M26 42 L54 42" stroke="${c.stroke}" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.15"/>
    </svg>`,
  };
  return svgs[type] || svgs.bottle;
}

// ── State ──
let activeFilters = { category: [], material: [], industry: [], color: [], sizeRange: 'all' };
let searchQuery = '';
let inquiryCart = JSON.parse(localStorage.getItem('hpack_inquiry') || '[]');
let selectedProduct = null;

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();
  setupNavbar();
});

// ── Setup Functions ──
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  // Filter checkboxes
  document.querySelectorAll('.filter-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      updateFiltersFromUI();
      renderProducts();
    });
  });

  // Size range
  document.querySelectorAll('input[name="sizeRange"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      activeFilters.sizeRange = e.target.value;
      renderProducts();
    });
  });

  // Clear filters
  document.getElementById('clearFilters').addEventListener('click', clearFilters);

  // Modal close
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile filter toggle
  document.getElementById('filterToggle')?.addEventListener('click', () => {
    document.querySelector('.catalog-sidebar').classList.toggle('active');
  });

  // Cart actions
  document.getElementById('cartClear')?.addEventListener('click', () => {
    inquiryCart = [];
    saveCart();
    updateCartUI();
    renderProducts();
  });
}

function updateFiltersFromUI() {
  activeFilters.category = getCheckedValues('category');
  activeFilters.material = getCheckedValues('material');
  activeFilters.industry = getCheckedValues('industry');
  activeFilters.color = getCheckedValues('color');
}

function getCheckedValues(group) {
  return [...document.querySelectorAll(`.filter-checkbox[data-group="${group}"]:checked`)].map(cb => cb.value);
}

function clearFilters() {
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  document.querySelector('input[name="sizeRange"][value="all"]').checked = true;
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  activeFilters = { category: [], material: [], industry: [], color: [], sizeRange: 'all' };
  renderProducts();
}

// ── Filter Logic ──
function getFilteredProducts() {
  return products.filter(p => {
    if (searchQuery && !matchesSearch(p)) return false;
    if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
    if (activeFilters.material.length && !activeFilters.material.includes(p.material)) return false;
    if (activeFilters.industry.length && !activeFilters.industry.includes(p.industry)) return false;
    if (activeFilters.color.length && !activeFilters.color.includes(p.color)) return false;
    if (!matchesSizeRange(p)) return false;
    return true;
  });
}

function matchesSearch(p) {
  const q = searchQuery;
  return p.name.toLowerCase().includes(q)
    || p.category.toLowerCase().includes(q)
    || p.material.toLowerCase().includes(q)
    || p.description.toLowerCase().includes(q)
    || p.features.some(f => f.toLowerCase().includes(q))
    || `${p.size}${p.unit}`.includes(q)
    || p.industry.toLowerCase().includes(q);
}

function matchesSizeRange(p) {
  if (activeFilters.sizeRange === 'all') return true;
  if (p.unit === 'mm') return activeFilters.sizeRange === 'small';
  const s = p.size;
  switch (activeFilters.sizeRange) {
    case 'small': return s <= 50;
    case 'medium': return s > 50 && s <= 200;
    case 'large': return s > 200 && s <= 500;
    case 'xlarge': return s > 500;
    default: return true;
  }
}

// ── Render Products ──
function renderProducts() {
  const filtered = getFilteredProducts();
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const totalEl = document.getElementById('productTotal');
  const emptyEl = document.getElementById('emptyState');

  countEl.textContent = filtered.length;
  totalEl.textContent = products.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }

  emptyEl.style.display = 'none';

  grid.innerHTML = filtered.map((p, i) => {
    const inCart = inquiryCart.some(item => item.id === p.id);
    const categoryLabel = { pharma: 'Pharma', fmcg: 'FMCG', cosmetic: 'Cosmetic', liquor: 'Liquor', caps: 'Caps & Closures', specialty: 'Specialty' };
    return `
      <div class="product-card reveal active" style="animation-delay:${Math.min(i * 0.05, 0.4)}s">
        <div class="pc-image" onclick="openModal(${p.id})">
          ${getProductSVG(p.type, p.color)}
        </div>
        <div class="pc-body">
          <div class="pc-category">${categoryLabel[p.category] || p.category}</div>
          <h3 class="pc-name" onclick="openModal(${p.id})">${p.name}</h3>
          <div class="pc-specs">
            <span class="pc-spec">${p.material}</span>
            <span class="pc-dot">•</span>
            <span class="pc-spec">${p.size}${p.unit}</span>
            <span class="pc-dot">•</span>
            <span class="pc-spec">${p.weight}g</span>
          </div>
          <div class="pc-tags">
            ${p.features.slice(0, 3).map(f => `<span class="pc-tag">${f}</span>`).join('')}
          </div>
          <div class="pc-actions">
            <button class="pc-btn-details" onclick="openModal(${p.id})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
              View Details
            </button>
            <button class="pc-btn-inquiry ${inCart ? 'in-cart' : ''}" onclick="toggleInquiry(${p.id})">
              ${inCart
                ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Added'
                : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14m-7-7h14"/></svg> Add to Inquiry'}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── Modal ──
function openModal(id) {
  selectedProduct = products.find(p => p.id === id);
  if (!selectedProduct) return;
  const p = selectedProduct;
  const inCart = inquiryCart.some(item => item.id === p.id);
  const categoryLabel = { pharma: 'Pharmaceutical', fmcg: 'FMCG', cosmetic: 'Cosmetic', liquor: 'Liquor & Spirits', caps: 'Caps & Closures', specialty: 'Specialty' };

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-grid">
      <div class="modal-image">${getProductSVG(p.type, p.color)}</div>
      <div class="modal-info">
        <span class="modal-category">${categoryLabel[p.category]}</span>
        <h2 class="modal-title">${p.name} — ${p.size}${p.unit}</h2>
        <p class="modal-desc">${p.description}</p>

        <div class="modal-specs-grid">
          <div class="modal-spec"><span class="spec-label">Material</span><span class="spec-value">${p.material}</span></div>
          <div class="modal-spec"><span class="spec-label">Volume/Size</span><span class="spec-value">${p.size} ${p.unit}</span></div>
          <div class="modal-spec"><span class="spec-label">Weight</span><span class="spec-value">${p.weight}g</span></div>
          <div class="modal-spec"><span class="spec-label">Neck Size</span><span class="spec-value">${p.neck}mm</span></div>
          <div class="modal-spec"><span class="spec-label">Color</span><span class="spec-value">${p.color.charAt(0).toUpperCase() + p.color.slice(1)}</span></div>
          <div class="modal-spec"><span class="spec-label">Category</span><span class="spec-value">${categoryLabel[p.category]}</span></div>
        </div>

        <div class="modal-features">
          <h4>Key Features</h4>
          <div class="modal-feature-tags">
            ${p.features.map(f => `<span class="modal-ftag">${f}</span>`).join('')}
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-primary" onclick="toggleInquiry(${p.id}); openModal(${p.id});">
            ${inCart ? '✓ In Inquiry Cart' : '+ Add to Inquiry'}
          </button>
          <a href="mailto:info@hpack.co.in?subject=Inquiry: ${encodeURIComponent(p.name + ' ' + p.size + p.unit)}&body=${encodeURIComponent('Dear HPack Team,\n\nI am interested in the following product:\n\nProduct: ' + p.name + '\nSize: ' + p.size + p.unit + '\nMaterial: ' + p.material + '\n\nPlease share pricing and availability.\n\nRegards,')}" class="btn btn-secondary">
            Email Inquiry
          </a>
        </div>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  selectedProduct = null;
}

// ── Inquiry Cart ──
function toggleInquiry(id) {
  const idx = inquiryCart.findIndex(item => item.id === id);
  if (idx > -1) {
    inquiryCart.splice(idx, 1);
  } else {
    const p = products.find(item => item.id === id);
    if (p) inquiryCart.push({ id: p.id, name: p.name, size: p.size, unit: p.unit, material: p.material });
  }
  saveCart();
  updateCartUI();
  renderProducts();
}

function saveCart() {
  localStorage.setItem('hpack_inquiry', JSON.stringify(inquiryCart));
}

function updateCartUI() {
  const bar = document.getElementById('inquiryBar');
  const countEl = document.getElementById('inquiryCount');
  const listEl = document.getElementById('inquiryList');

  if (inquiryCart.length === 0) {
    bar.classList.remove('active');
    return;
  }

  bar.classList.add('active');
  countEl.textContent = inquiryCart.length;
  listEl.innerHTML = inquiryCart.map(item =>
    `<span class="inquiry-item">${item.name} ${item.size}${item.unit}
      <button onclick="toggleInquiry(${item.id})" class="inquiry-remove">&times;</button>
    </span>`
  ).join('');
}

function sendInquiry() {
  if (inquiryCart.length === 0) return;
  const items = inquiryCart.map(item => `• ${item.name} — ${item.size}${item.unit} (${item.material})`).join('\n');
  const subject = `Product Inquiry — ${inquiryCart.length} item(s)`;
  const body = `Dear HPack Team,\n\nI am interested in the following products:\n\n${items}\n\nPlease share pricing, MOQ, and availability.\n\nRegards,`;
  window.location.href = `mailto:info@hpack.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
