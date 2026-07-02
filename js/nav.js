/* Sabiha Jewellery — Shared Navigation Component
   Usage: set window.NAV_BASE before loading this script
   Root pages:    <script>window.NAV_BASE = './';</script>
   Sub pages:     <script>window.NAV_BASE = '../';</script>
*/
(function() {
  const B = window.NAV_BASE || './';

  const socials = `
    <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="f-soc" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    </a>
    <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="f-soc" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>`;

  const navHtml = `
  <div class="announce-bar">
    <span>Worldwide Shipping</span>
    <span class="ann-dot">&#183;</span>
    <a href="https://wa.me/923212110805" target="_blank" rel="noopener">WhatsApp Us</a>
    <span class="ann-dot">&#183;</span>
    <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener">@sabihasjewellery</a>
  </div>

  <header class="site-header">
    <div class="h-inner">

      <a href="${B}index.html" class="h-logo">
        <img src="${B}Images/logo-sabihas.png" alt="sabihas jewellery" class="h-logo-img">
      </a>

      <nav class="h-nav" role="navigation" aria-label="Main navigation">
        <ul class="nav-list">

          <li class="nav-item has-dropdown">
            <a href="${B}index.html#shop" class="nav-link">
              Jewellery
              <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
            </a>
            <div class="dropdown">
              <div class="dropdown-inner">
                <div>
                  <div class="dd-col-head">Shop by Category</div>
                  <a href="${B}index.html#rings" class="dd-link">Rings</a>
                  <a href="${B}index.html#earrings" class="dd-link">Earrings</a>
                  <a href="${B}index.html#necklaces" class="dd-link">Necklaces</a>
                  <a href="${B}index.html#pendants" class="dd-link">Pendants</a>
                  <a href="${B}index.html#bracelets" class="dd-link">Bracelets</a>
                  <a href="${B}index.html#bangles" class="dd-link">Bangles</a>
                  <a href="${B}index.html#chains" class="dd-link">Chains</a>
                  <a href="${B}index.html#anklets" class="dd-link">Anklets</a>
                </div>
                <div>
                  <div class="dd-col-head">Quick Links</div>
                  <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="dd-link featured">&rarr; Order via WhatsApp</a>
                  <a href="${B}index.html#new-arrivals" class="dd-link featured">&rarr; New Arrivals</a>
                  <hr class="dd-divider">
                  <a href="${B}gallery.html" class="dd-link">Gallery</a>
                  <a href="${B}reviews.html" class="dd-link">Customer Reviews</a>
                  <a href="${B}about.html" class="dd-link">Our Story</a>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <a href="${B}index.html#collections" class="nav-link">
              Collections
              <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
            </a>
            <div class="dropdown">
              <div class="dropdown-inner">
                <div>
                  <div class="dd-col-head">Shop Collections</div>
                  <a href="${B}index.html#bridal" class="dd-link">Bridal Collection</a>
                  <a href="${B}index.html#everyday" class="dd-link">Everyday Wear</a>
                  <a href="${B}index.html#signature" class="dd-link">Signature Collection</a>
                  <a href="${B}index.html#new-arrivals" class="dd-link">New Arrivals</a>
                  <a href="${B}index.html#bestsellers" class="dd-link">Best Sellers</a>
                  <a href="${B}index.html#gifts" class="dd-link">Gift Collection</a>
                </div>
                <div>
                  <div class="dd-col-head">Discover</div>
                  <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="dd-link featured">&rarr; WhatsApp to Order</a>
                  <hr class="dd-divider">
                  <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="dd-link">Follow on Instagram</a>
                  <a href="${B}reviews.html" class="dd-link">Customer Reviews</a>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a href="${B}about.html" class="nav-link">About</a>
          </li>

          <li class="nav-item">
            <a href="${B}gallery.html" class="nav-link">Gallery</a>
          </li>

          <li class="nav-item">
            <a href="${B}reviews.html" class="nav-link">Reviews</a>
          </li>

          <li class="nav-item has-dropdown">
            <a href="${B}contact.html" class="nav-link">
              Contact
              <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
            </a>
            <div class="dropdown">
              <div class="dropdown-inner">
                <div>
                  <div class="dd-col-head">Get in Touch</div>
                  <div class="dd-contact-block">
                    <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="dd-contact-item">
                      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                      <span>WhatsApp: +92 321 2110805</span>
                    </a>
                    <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="dd-contact-item">
                      <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                      <span>@sabihasjewellery</span>
                    </a>
                    <div class="dd-contact-item">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                      <span>Online Store &nbsp;&middot;&nbsp; Worldwide Shipping</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dd-col-head">Order Now</div>
                  <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="dd-link featured">&rarr; WhatsApp to Order</a>
                  <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="dd-link featured">&rarr; Shop on Instagram</a>
                  <hr class="dd-divider">
                  <a href="${B}index.html#new-arrivals" class="dd-link">New Arrivals</a>
                  <a href="${B}index.html#bridal" class="dd-link">Bridal Collection</a>
                  <a href="${B}reviews.html" class="dd-link">Reviews</a>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </nav>

      <div class="h-icons">
        <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="h-icon" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="h-icon" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <button class="h-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-jewellery">Jewellery<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-jewellery">
        <a href="${B}index.html#rings">Rings</a>
        <a href="${B}index.html#earrings">Earrings</a>
        <a href="${B}index.html#necklaces">Necklaces</a>
        <a href="${B}index.html#pendants">Pendants</a>
        <a href="${B}index.html#bracelets">Bracelets</a>
        <a href="${B}index.html#bangles">Bangles</a>
        <a href="${B}index.html#chains">Chains</a>
        <a href="${B}index.html#anklets">Anklets</a>
      </div>
    </div>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-collections">Collections<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-collections">
        <a href="${B}index.html#bridal">Bridal Collection</a>
        <a href="${B}index.html#everyday">Everyday Wear</a>
        <a href="${B}index.html#new-arrivals">New Arrivals</a>
        <a href="${B}index.html#bestsellers">Best Sellers</a>
        <a href="${B}index.html#gifts">Gift Collection</a>
      </div>
    </div>
    <a href="${B}about.html" class="m-nav-link">About</a>
    <a href="${B}gallery.html" class="m-nav-link">Gallery</a>
    <a href="${B}reviews.html" class="m-nav-link">Reviews</a>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-contact">Contact<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-contact">
        <a href="https://wa.me/923212110805" target="_blank" rel="noopener">WhatsApp: +92 321 2110805</a>
        <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener">Instagram: @sabihasjewellery</a>
        <a href="${B}contact.html">Contact Page</a>
      </div>
    </div>
    <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="m-nav-appt">Order via WhatsApp</a>
  </div>`;

  const footerHtml = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="f-brand-name">sabihas</div>
          <div class="f-brand-sub">Jewellery &middot; Gul Plaza</div>
          <div class="f-brand-desc">Premium gold jewellery crafted for the woman who values timeless elegance. Online store with worldwide shipping. Rebuilding with love after Gul Plaza.</div>
        </div>
        <div>
          <div class="f-col-h">Shop</div>
          <a class="f-link" href="${B}index.html#rings">Rings</a>
          <a class="f-link" href="${B}index.html#earrings">Earrings</a>
          <a class="f-link" href="${B}index.html#necklaces">Necklaces</a>
          <a class="f-link" href="${B}index.html#bracelets">Bracelets</a>
          <a class="f-link" href="${B}index.html#bangles">Bangles</a>
          <a class="f-link" href="${B}index.html#pendants">Pendants</a>
        </div>
        <div>
          <div class="f-col-h">Collections</div>
          <a class="f-link" href="${B}index.html#bridal">Bridal Collection</a>
          <a class="f-link" href="${B}index.html#new-arrivals">New Arrivals</a>
          <a class="f-link" href="${B}index.html#everyday">Everyday Wear</a>
          <a class="f-link" href="${B}index.html#bestsellers">Best Sellers</a>
          <a class="f-link" href="${B}reviews.html">Reviews</a>
          <a class="f-link" href="${B}about.html">Our Story</a>
        </div>
        <div>
          <div class="f-col-h">Connect</div>
          <a class="f-link" href="https://wa.me/923212110805" target="_blank" rel="noopener">WhatsApp: +92 321 2110805</a>
          <a class="f-link" href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener">Instagram: @sabihasjewellery</a>
          <a class="f-link" href="${B}contact.html">Contact Us</a>
          <div style="font-size:11px;color:#4a4038;margin-top:6px">Online Store &middot; Worldwide Shipping</div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="f-copy">&copy; 2026 Sabiha Jewellery &middot; All rights reserved.</div>
        <div class="f-socials">${socials}</div>
      </div>
    </div>
  </footer>`;

  const fabHtml = `
  <div class="fab-stack" id="fabStack">
    <button class="fab-btn fab-top" id="fabTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>
    </button>
    <a href="https://wa.me/923212110805" target="_blank" rel="noopener" class="fab-btn fab-book" aria-label="Order via WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <span class="fab-label">Order</span>
    </a>
    <a href="https://instagram.com/sabihasjewellery" target="_blank" rel="noopener" class="fab-btn fab-text" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      <span class="fab-label">Insta</span>
    </a>
    <a href="${B}index.html#new-arrivals" class="fab-btn fab-call" aria-label="New Arrivals">
      <svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
      <span class="fab-label">New</span>
    </a>
  </div>`;

  // Inject nav at top (synchronous — must be first)
  const navEl = document.createElement('div');
  navEl.innerHTML = navHtml;
  document.body.insertBefore(navEl, document.body.firstChild);

  // Inject footer + floating action bar AFTER full DOM is parsed
  document.addEventListener('DOMContentLoaded', function() {
    const bottomEl = document.createElement('div');
    bottomEl.innerHTML = footerHtml;
    document.body.appendChild(bottomEl);

    const fabEl = document.createElement('div');
    fabEl.innerHTML = fabHtml;
    document.body.appendChild(fabEl);
    setTimeout(() => {
      document.querySelectorAll('.fab-book, .fab-text, .fab-call').forEach(el => el.classList.add('show'));
    }, 250);
  });

  // Favicon
  (function() {
    if (!document.querySelector('link[rel="icon"]')) {
      const fav = document.createElement('link');
      fav.rel = 'icon'; fav.type = 'image/svg+xml';
      fav.href = B + 'favicon.svg';
      document.head.appendChild(fav);
    }
  })();

  // Set active nav link
  const path = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    const base = href.split('#')[0];
    if (base && path.endsWith(base.replace(/^\.\/|^\.\.\//,''))) {
      a.classList.add('active');
    }
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileNav) mobileNav.classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const opening = !mobileNav.classList.contains('open');
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('nav-open', opening);
    });
  }

  // Mobile accordion toggles
  document.querySelectorAll('.m-nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const sub = document.getElementById(targetId);
      const isOpen = sub && sub.classList.contains('open');
      document.querySelectorAll('.m-nav-sub').forEach(s => s.classList.remove('open'));
      document.querySelectorAll('.m-nav-toggle').forEach(t => t.classList.remove('open'));
      if (!isOpen && sub) {
        sub.classList.add('open');
        toggle.classList.add('open');
      }
    });
  });

  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

  // Transparent hero overlay: make header transparent when hero is in view
  (function() {
    const header = document.querySelector('.site-header');
    const hero   = document.querySelector('.hero-luxury');
    if (!hero || !header) return;

    function update() {
      const solid = window.scrollY > hero.offsetHeight * 0.6;
      header.classList.toggle('is-transparent', !solid);
    }

    header.classList.add('is-transparent');
    window.addEventListener('scroll', update, { passive: true });
  })();

})();
