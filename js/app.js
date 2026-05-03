'use strict';

// ===== PRODUCT DATA =====
const PRODUCTS = [
  {
    id: 1, name: 'MacBook Pro 14"', category: 'electronica',
    price: 1299, oldPrice: 1599, rating: 4.9, reviews: 342,
    badge: 'Oferta', badgeType: '',
    color: '#e0e7ff', iconColor: '#6366f1',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>`
  },
  {
    id: 2, name: 'iPhone 16 Pro', category: 'electronica',
    price: 999, oldPrice: null, rating: 4.8, reviews: 1204,
    badge: 'Nuevo', badgeType: 'new',
    color: '#f0fdf4', iconColor: '#22c55e',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/></svg>`
  },
  {
    id: 3, name: 'AirPods Pro 3', category: 'electronica',
    price: 249, oldPrice: 329, rating: 4.7, reviews: 876,
    badge: 'Oferta', badgeType: '',
    color: '#fce7f3', iconColor: '#ec4899',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`
  },
  {
    id: 4, name: 'Chaqueta Premium', category: 'moda',
    price: 189, oldPrice: null, rating: 4.5, reviews: 234,
    badge: 'Destacado', badgeType: 'featured',
    color: '#fff7ed', iconColor: '#f97316',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`
  },
  {
    id: 5, name: 'Smart Watch Series 9', category: 'electronica',
    price: 399, oldPrice: 449, rating: 4.6, reviews: 567,
    badge: 'Oferta', badgeType: '',
    color: '#dcfce7', iconColor: '#16a34a',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="4" width="10" height="16" rx="3"/><path d="M7 9h10M7 15h10M9 4V2M15 4V2M9 20v2M15 20v2"/></svg>`
  },
  {
    id: 6, name: 'Zapatillas Running', category: 'deportes',
    price: 129, oldPrice: 159, rating: 4.4, reviews: 891,
    badge: 'Oferta', badgeType: '',
    color: '#fef9c3', iconColor: '#ca8a04',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 3L21 7l-9.5 9.5-4-4L3 17l4 4h14l2-8-6-10z"/></svg>`
  },
  {
    id: 7, name: 'Lámpara Inteligente', category: 'hogar',
    price: 59, oldPrice: null, rating: 4.3, reviews: 412,
    badge: 'Nuevo', badgeType: 'new',
    color: '#fef3c7', iconColor: '#d97706',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg>`
  },
  {
    id: 8, name: 'Libro: IA para todos', category: 'libros',
    price: 24, oldPrice: null, rating: 4.8, reviews: 156,
    badge: 'Nuevo', badgeType: 'new',
    color: '#ede9fe', iconColor: '#7c3aed',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  {
    id: 9, name: 'Perfume Élite', category: 'belleza',
    price: 89, oldPrice: 119, rating: 4.7, reviews: 203,
    badge: 'Oferta', badgeType: '',
    color: '#fdf2f8', iconColor: '#a855f7',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6l1 5H8z"/><path d="M8 8v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8"/><path d="M9 3V1h6v2"/></svg>`
  },
  {
    id: 10, name: 'LEGO Architecture', category: 'juguetes',
    price: 79, oldPrice: null, rating: 4.9, reviews: 328,
    badge: 'Destacado', badgeType: 'featured',
    color: '#fff1f2', iconColor: '#f43f5e',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v5M8 12v5M16 12v5"/></svg>`
  },
  {
    id: 11, name: 'Mochila Urbana Pro', category: 'moda',
    price: 99, oldPrice: 129, rating: 4.5, reviews: 445,
    badge: 'Oferta', badgeType: '',
    color: '#f0fdf4', iconColor: '#15803d',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="6" y="8" width="12" height="12" rx="2"/><path d="M8 8v-1a4 4 0 0 1 8 0v1"/></svg>`
  },
  {
    id: 12, name: 'Silla Ergonómica', category: 'hogar',
    price: 349, oldPrice: 499, rating: 4.6, reviews: 189,
    badge: 'Oferta', badgeType: '',
    color: '#e0f2fe', iconColor: '#0284c7',
    icon: `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14v-4a9 9 0 0 1 18 0v4"/><path d="M3 14a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v-4zM21 14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v-4zM12 20v2M8 22h8"/></svg>`
  },
];

// ===== STATE =====
const state = {
  cart: [],
  activeCategory: 'all',
  searchQuery: '',
  sortMode: 'default',
};

// ===== HELPERS =====
function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  return html;
}

function formatPrice(n) {
  return '$' + n.toLocaleString('es-ES', { minimumFractionDigits: 2 });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ===== RENDER =====
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');

  let list = PRODUCTS.filter(p => {
    const matchCat = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchQ = p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  if (state.sortMode === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (state.sortMode === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (state.sortMode === 'rating') list.sort((a, b) => b.rating - a.rating);

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  grid.innerHTML = list.map(p => {
    const inCart = state.cart.find(c => c.id === p.id);
    return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-card__image" style="background:${p.color}; color:${p.iconColor}">
        ${p.icon}
        ${p.badge ? `<span class="product-card__badge product-card__badge--${p.badgeType}">${p.badge}</span>` : ''}
        <button class="product-card__wishlist" data-wish="${p.id}" title="Guardar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${p.category}</span>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__stars">
          <span>${stars(p.rating)}</span>
          <span>(${p.reviews})</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div>
          <span class="product-card__price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="product-card__old-price">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart${inCart ? ' in-cart' : ''}" data-add="${p.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          ${inCart ? 'En carrito' : 'Añadir'}
        </button>
      </div>
    </div>`;
  }).join('');
}

// ===== CART =====
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  const badge = document.getElementById('cartCount');

  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = state.cart.reduce((s, i) => s + i.qty, 0);

  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';

  if (state.cart.length === 0) {
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    // remove all cart items except empty placeholder
    Array.from(itemsEl.querySelectorAll('.cart-item')).forEach(el => el.remove());
    return;
  }
  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';
  totalEl.textContent = formatPrice(total);

  Array.from(itemsEl.querySelectorAll('.cart-item')).forEach(el => el.remove());

  state.cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.cartId = item.id;
    el.innerHTML = `
      <div class="cart-item__img" style="background:${item.color}; color:${item.iconColor}">${item.icon}</div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" data-qty-dec="${item.id}">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-qty-inc="${item.id}">+</button>
      </div>
      <button class="cart-item__remove" data-remove="${item.id}" title="Eliminar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>`;
    itemsEl.appendChild(el);
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  renderCart();
  renderProducts();
  showToast(`"${product.name}" añadido al carrito`);
}

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(c => c.id !== id);
  renderCart();
  renderProducts();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  renderCart();
  renderProducts();
}

// ===== CART DRAWER =====
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  // Category chips
  document.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', e => {
    state.searchQuery = e.target.value;
    renderProducts();
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.sortMode = e.target.value;
    renderProducts();
  });

  // Product grid interactions (delegated)
  document.getElementById('productGrid').addEventListener('click', e => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) { addToCart(Number(addBtn.dataset.add)); return; }

    const wishBtn = e.target.closest('[data-wish]');
    if (wishBtn) {
      wishBtn.classList.toggle('active');
      const name = PRODUCTS.find(p => p.id === Number(wishBtn.dataset.wish))?.name;
      showToast(wishBtn.classList.contains('active') ? `"${name}" guardado` : `"${name}" eliminado de guardados`);
    }
  });

  // Cart open/close
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  // Cart item interactions (delegated)
  document.getElementById('cartItems').addEventListener('click', e => {
    const dec = e.target.closest('[data-qty-dec]');
    if (dec) { changeQty(Number(dec.dataset.qtyDec), -1); return; }
    const inc = e.target.closest('[data-qty-inc]');
    if (inc) { changeQty(Number(inc.dataset.qtyInc), 1); return; }
    const rem = e.target.closest('[data-remove]');
    if (rem) { removeFromCart(Number(rem.dataset.remove)); }
  });

  // Mobile menu
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });

  // Login button (demo)
  document.getElementById('loginBtn').addEventListener('click', () => {
    showToast('Función de inicio de sesión próximamente');
  });
});
