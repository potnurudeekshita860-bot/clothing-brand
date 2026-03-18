// ── VELA SHARED JS ──

const PRODUCTS = [
  { id:1,  name:'Linen Wide-Leg Trousers',    cat:'women',       price:3299, was:null,  badge:'new',  new:true,  sale:false, imgs:['https://images.unsplash.com/photo-1594938298603-c8148c4b4d0e?w=700&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80'], desc:'Beautifully draped wide-leg trousers in 100% stonewashed natural linen. Relaxed yet refined, with an elasticated waistband and deep side pockets. A staple that earns its place in every wardrobe.', sizes:['XS','S','M','L','XL'] },
  { id:2,  name:'Oversized Cotton Blazer',     cat:'women',       price:4899, was:7200,  badge:'sale', new:false, sale:true,  imgs:['https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=700&q=80','https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=700&q=80'], desc:'A structured yet relaxed blazer in washed organic cotton twill. The slightly oversized silhouette gives it modern versatility — layer over anything from a slip dress to denim.', sizes:['XS','S','M','L','XL'] },
  { id:3,  name:'Cashmere Roll-Neck Sweater',  cat:'women',       price:6899, was:null,  badge:'new',  new:true,  sale:false, imgs:['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80','https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80'], desc:'Pure Grade A cashmere sourced from Inner Mongolia. This impossibly soft roll-neck is a forever piece. Naturally temperature-regulating and hand-washable at home.', sizes:['XS','S','M','L'] },
  { id:4,  name:'Relaxed Chore Jacket',        cat:'men',         price:4299, was:null,  badge:null,   new:false, sale:false, imgs:['https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&q=80','https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=700&q=80'], desc:'A modern take on the workwear staple. Heavyweight stonewashed canvas, antique brass buttons, and generous chest patch pockets. Ages beautifully with every wear.', sizes:['S','M','L','XL','XXL'] },
  { id:5,  name:'Merino Crewneck Sweater',     cat:'men',         price:4299, was:5800,  badge:'sale', new:false, sale:true,  imgs:['https://images.unsplash.com/photo-1609875224229-36f7e4e1e7e7?w=700&q=80','https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=700&q=80'], desc:'Extra-fine merino in a classic crewneck silhouette. Naturally odour-resistant, temperature-regulating, and machine washable on a gentle cycle. Ribbed cuffs and hem.', sizes:['S','M','L','XL'] },
  { id:6,  name:'Slim Tapered Chinos',         cat:'men',         price:2899, was:null,  badge:'new',  new:true,  sale:false, imgs:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80','https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&q=80'], desc:'A wardrobe workhorse in refined cotton-stretch twill. Slim tapered cut, smart enough to tuck in and comfortable enough to live in. Available in sand, navy, and olive.', sizes:['28','30','32','34','36'] },
  { id:7,  name:'Full-Grain Leather Tote',     cat:'accessories', price:8999, was:null,  badge:null,   new:false, sale:false, imgs:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80','https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&q=80'], desc:'Vegetable-tanned full-grain leather that develops a rich patina over time. Unlined interior, internal zipper pocket, and solid brass feet. Made in a family workshop in Kolkata.', sizes:['One Size'] },
  { id:8,  name:'Fine Merino Beanie',          cat:'accessories', price:1499, was:2200,  badge:'sale', new:false, sale:true,  imgs:['https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=700&q=80','https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&q=80'], desc:'A simple, close-fitting ribbed beanie in extra-fine merino. Warm without bulk, naturally soft against skin. Won\'t pill or stretch out over time.', sizes:['One Size'] },
  { id:9,  name:'Silk Bias-Cut Slip Dress',    cat:'women',       price:7299, was:null,  badge:'new',  new:true,  sale:false, imgs:['https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80'], desc:'100% mulberry silk on a bias cut that moves with the body. Adjustable spaghetti straps with a delicate lace trim at the neckline. Effortlessly transitions from day to evening.', sizes:['XS','S','M','L'] },
  { id:10, name:'Organic Canvas Sneakers',     cat:'accessories', price:2999, was:null,  badge:null,   new:false, sale:false, imgs:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&q=80'], desc:'Vulcanised low-top sneakers in unbleached organic cotton canvas. Minimal profile, natural rubber sole, and cotton laces. Vegan-friendly and sustainably produced.', sizes:['6','7','8','9','10','11'] },
  { id:11, name:'Washed Linen Shirt',          cat:'men',         price:2499, was:null,  badge:null,   new:false, sale:false, imgs:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=80','https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=80'], desc:'A foundational garment in 100% pre-washed linen. Slightly oversized with a curved hem. Relaxed enough untucked, refined enough tucked in. The shirt you\'ll reach for every day.', sizes:['XS','S','M','L','XL','XXL'] },
  { id:12, name:'Pebble Grain Shoulder Bag',   cat:'accessories', price:5199, was:6800,  badge:'sale', new:false, sale:true,  imgs:['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80'], desc:'Semi-structured shoulder bag in pebble grain leather with solid gold hardware. Internal card slots and a detachable cross-body strap. Made to last a lifetime.', sizes:['One Size'] },
];

// ── CART ──
function getCart() { return JSON.parse(localStorage.getItem('vela_cart') || '[]'); }
function saveCart(c) { localStorage.setItem('vela_cart', JSON.stringify(c)); updateBadge(); }
function updateBadge() {
  const c = getCart(); const n = c.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = n);
}
function addToCart(id, size, qty=1) {
  const c = getCart(); const ex = c.find(x=>x.id===id&&x.size===size);
  if (ex) ex.qty += qty; else c.push({id,size,qty});
  saveCart(c); showToast('Added to cart ✓','success');
}
function removeFromCart(id, size) {
  const c = getCart().filter(x=>!(x.id===id&&x.size===size));
  saveCart(c);
}
function setCartQty(id, size, qty) {
  const c = getCart(); const item = c.find(x=>x.id===id&&x.size===size);
  if (item) { item.qty = Math.max(1, qty); saveCart(c); }
}

// ── TOAST ──
function showToast(msg, type='') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg; t.className = type; t.classList.add('show');
  clearTimeout(t._to); t._to = setTimeout(()=>t.classList.remove('show'), 3000);
}

// ── NAV ──
function initNav() {
  window.addEventListener('scroll', () => {
    document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 30);
  });
  updateBadge();

  // Highlight active page
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

function toggleDrawer() {
  document.getElementById('mobileDrawer').classList.toggle('open');
}

// ── PRODUCT CARD HTML ──
function productCardHTML(p, link='product.html') {
  return `
  <div class="product-card" onclick="location.href='${link}?id=${p.id}'">
    <div class="product-img">
      ${p.badge==='new' ? '<span class="badge badge-new">New</span>' : ''}
      ${p.badge==='sale' ? '<span class="badge badge-sale">Sale</span>' : ''}
      <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy">
      <button class="quick-add" onclick="event.stopPropagation();quickAdd(${p.id})">Quick Add — ${p.sizes[0]}</button>
    </div>
    <div class="product-meta">
      <p class="cat">${p.cat}</p>
      <h4>${p.name}</h4>
      <p class="price">
        ${p.was ? `<span class="was">₹${p.was.toLocaleString()}</span><span class="now">₹${p.price.toLocaleString()}</span>` : `₹${p.price.toLocaleString()}`}
      </p>
    </div>
  </div>`;
}

function quickAdd(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  if (p) addToCart(id, p.sizes[0], 1);
}

// ── NAV HTML (inject into every page) ──
function renderNav() {
  const nav = `
  <nav id="navbar">
    <a class="nav-logo" href="index.html">VEL<span>A</span></a>
    <div class="nav-center">
      <a href="index.html">Home</a>
      <a href="shop.html">Shop</a>
      <a href="about.html">About</a>
    </div>
    <div class="nav-right">
      <button class="nav-icon" onclick="location.href='cart.html'">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M1 1h2.5L5 10h9l2-7H4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="6.5" cy="13.5" r="1.3" fill="currentColor"/>
          <circle cx="13.5" cy="13.5" r="1.3" fill="currentColor"/>
        </svg>
        <span class="cart-badge">0</span>
      </button>
      <button class="hamburger" onclick="toggleDrawer()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-drawer" id="mobileDrawer">
    <button class="drawer-close" onclick="toggleDrawer()">×</button>
    <a href="index.html">Home</a>
    <a href="shop.html">Shop</a>
    <a href="about.html">About</a>
    <a href="cart.html">Cart</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

// ── FOOTER HTML ──
function renderFooter() {
  const footer = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="footer-brand-logo" href="index.html">VEL<span>A</span></a>
        <p>Luxury essentials for the discerning wardrobe. Crafted with care, worn with intention.</p>
      </div>
      <div class="footer-col">
        <h5>Shop</h5>
        <a href="shop.html?cat=women">Women</a>
        <a href="shop.html?cat=men">Men</a>
        <a href="shop.html?cat=accessories">Accessories</a>
        <a href="shop.html?cat=new">New Arrivals</a>
        <a href="shop.html?cat=sale">Sale</a>
      </div>
      <div class="footer-col">
        <h5>Help</h5>
        <a href="#">Shipping & Returns</a>
        <a href="#">Size Guide</a>
        <a href="#">Care Instructions</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <a href="about.html">About VELA</a>
        <a href="#">Sustainability</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Affiliates</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 VELA. All rights reserved.</p>
      <div class="social-row">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

// ── NEWSLETTER ──
function subscribeNewsletter(btn) {
  const inp = btn.previousElementSibling;
  if (!inp || !inp.value.trim()) { showToast('Please enter your email'); return; }
  showToast('Subscribed! Welcome to VELA ✓', 'success');
  inp.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  initNav();
});
