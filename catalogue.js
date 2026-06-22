/* =========================================
   HPack Catalogue Renderer
   ========================================= */

const CATEGORY_LABELS = {
  pharma:    'Pharma',
  fmcg:      'FMCG',
  cosmetic:  'Cosmetic',
  liquor:    'Liquor',
  caps:      'Caps & Closures',
  sanitizer: 'Sanitizer',
};

let currentCat = 'all';
let searchQuery = '';
let selectedIds = new Set();
let enquiryProducts = [];

// ── Counts ──
function updateCounts() {
  const cats = ['all','pharma','fmcg','cosmetic','liquor','caps','sanitizer'];
  cats.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (!el) return;
    const n = cat === 'all' ? products.length : products.filter(p => p.category === cat).length;
    el.textContent = n;
  });
}

// ── Spec rows helper ──
function specRow(label, value) {
  if (!value) return '';
  return `<div class="spec-row"><span class="spec-label">${label}</span><span class="spec-value">${value}</span></div>`;
}

// ── Render product card ──
function renderCard(p) {
  const isCap = p.category === 'caps';
  const isSelected = selectedIds.has(p.id);

  const specs = isCap
    ? `${specRow('Wt. (gm)', p.wt)}${specRow('Size (mm)', p.size)}${specRow('Type', p.type)}`
    : `${specRow('Wt. (gm)', p.wt)}${specRow('Ht. (mm)', p.ht)}${specRow('B. Dia (mm)', p.bdia)}${specRow('O.F.C (ml)', p.ofc)}`;

  return `
  <div class="prod-card ${isSelected ? 'selected' : ''}" data-id="${p.id}">
    <div class="prod-card-top">
      <div class="prod-num">${String(p.id).padStart(3,'0')}</div>
      <div class="prod-cat-tag">${CATEGORY_LABELS[p.category]}</div>
    </div>
    <div class="prod-img-wrap">
      <img src="${p.img}" alt="${p.code}" class="prod-img"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22120%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f0f4f8%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2211%22 fill=%22%23999%22>No Image</text></svg>'">
    </div>
    <div class="prod-body">
      <div class="prod-code">${p.code}</div>
      <div class="prod-specs">${specs}</div>
    </div>
    <div class="prod-footer">
      <button class="btn-enquire" onclick="openEnquiry([${p.id}])">Enquire</button>
      <button class="btn-select ${isSelected ? 'active' : ''}" onclick="toggleSelect(${p.id}, this)" title="${isSelected ? 'Remove from selection' : 'Add to selection'}">
        ${isSelected ? '✓ Selected' : '+ Select'}
      </button>
    </div>
  </div>`;
}

// ── Filter & render ──
function renderGrid() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const resultCount = document.getElementById('resultCount');

  const q = searchQuery.toLowerCase();
  const filtered = products.filter(p => {
    const catMatch = currentCat === 'all' || p.category === currentCat;
    const searchMatch = !q || p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'flex';
    resultCount.textContent = '0 products';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(renderCard).join('');
    resultCount.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  }
}

// ── Select toggle ──
function toggleSelect(id, btn) {
  if (selectedIds.has(id)) {
    selectedIds.delete(id);
    btn.classList.remove('active');
    btn.textContent = '+ Select';
    btn.closest('.prod-card').classList.remove('selected');
  } else {
    selectedIds.add(id);
    btn.classList.add('active');
    btn.textContent = '✓ Selected';
    btn.closest('.prod-card').classList.add('selected');
  }
  const enquireBtn = document.getElementById('enquireSelected');
  const countSpan = document.getElementById('selectedCount');
  countSpan.textContent = selectedIds.size;
  enquireBtn.style.display = selectedIds.size > 0 ? 'inline-flex' : 'none';
}

// ── Enquiry modal ──
function openEnquiry(ids) {
  enquiryProducts = products.filter(p => ids.includes(p.id));
  const infoEl = document.getElementById('modalProductInfo');
  const tags = enquiryProducts.map(p =>
    `<span class="product-tag">${p.code}</span>`
  ).join('');
  infoEl.innerHTML = `<div class="product-tags-row">${tags}</div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('enquireSelected').addEventListener('click', () => {
  openEnquiry([...selectedIds]);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('enquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  // Replace this timeout with Formspree / EmailJS in production
  setTimeout(() => {
    btn.textContent = '✓ Enquiry Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry';
      btn.style.background = '';
      btn.disabled = false;
      closeModal();
      e.target.reset();
    }, 2500);
  }, 800);
});

// ── Category tabs ──
document.getElementById('categoryTabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  currentCat = tab.dataset.cat;
  renderGrid();
});

// ── Search ──
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderGrid();
});

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile menu ──
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
}

// ── Init ──
updateCounts();
renderGrid();
