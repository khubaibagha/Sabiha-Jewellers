/* Sabiha Jewellery — Shop / Shopify Storefront integration
   ─────────────────────────────────────────────────────────
   HOW TO CONNECT YOUR SHOPIFY STORE:
   1. In Shopify admin → Settings → Apps → Develop apps → create an app
      with Storefront API access (unauthenticated_read_product_listings).
   2. Paste your values below:
        domain: 'your-store.myshopify.com'
        token:  'your-storefront-access-token'
   3. Create collections in Shopify whose HANDLES match the
      data-collection attribute on each shop page (rings, earrings,
      necklaces, pendants, bracelets, bangles, chains, anklets,
      bridal, everyday, signature, new-arrivals, bestsellers, gifts).
   Products will then load automatically on every category page.
   Until connected, elegant "Coming Soon" placeholders are shown.
*/
(function () {
  const SHOPIFY = {
    domain: '',   // e.g. 'sabihasjewellery.myshopify.com'
    token:  '',   // Storefront API access token
    apiVersion: '2024-10',
    productsPerPage: 24
  };

  const WHATSAPP = 'https://wa.me/923212110805';
  const INSTAGRAM = 'https://instagram.com/sabihasjewellery';

  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  const collectionHandle = grid.getAttribute('data-collection') || '';
  const categoryLabel = grid.getAttribute('data-label') || 'Jewellery';
  const placeholderCount = parseInt(grid.getAttribute('data-placeholders') || '8', 10);

  const isConfigured = SHOPIFY.domain && SHOPIFY.token;

  /* ── Coming Soon placeholders ── */
  function renderComingSoon() {
    let html = '';
    for (let i = 0; i < placeholderCount; i++) {
      html += `
      <div class="product-card is-placeholder">
        <div class="pc-img pc-img-placeholder">
          <svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="32,12 46,26 32,52 18,26" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="18" y1="26" x2="46" y2="26" stroke="currentColor" stroke-width="1.4"/></svg>
          <span class="pc-soon-badge">Coming Soon</span>
        </div>
        <div class="pc-info">
          <div class="pc-name">${categoryLabel} — Piece ${String(i + 1).padStart(2, '0')}</div>
          <div class="pc-price">Launching soon</div>
        </div>
      </div>`;
    }
    grid.innerHTML = html;

    const note = document.getElementById('shopNote');
    if (note) {
      note.innerHTML = `
        <div class="shop-note-inner">
          <div class="shop-note-title">This collection is being photographed &amp; uploaded</div>
          <p>Our full ${categoryLabel.toLowerCase()} range is available right now on Instagram and WhatsApp — message us for photos, prices and live videos of any piece.</p>
          <div class="shop-note-ctas">
            <a href="${WHATSAPP}" target="_blank" rel="noopener" class="btn-dark">WhatsApp Us to Order</a>
            <a href="${INSTAGRAM}" target="_blank" rel="noopener" class="btn-outline">Browse on Instagram</a>
          </div>
        </div>`;
    }
  }

  /* ── Shopify Storefront fetch ── */
  function renderProducts(products) {
    grid.innerHTML = products.map(p => {
      const img = p.featuredImage
        ? `<img src="${p.featuredImage.url}" alt="${(p.featuredImage.altText || p.title).replace(/"/g, '&quot;')}" loading="lazy">`
        : `<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="32,12 46,26 32,52 18,26" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`;
      const price = p.priceRange && p.priceRange.minVariantPrice
        ? `${Number(p.priceRange.minVariantPrice.amount).toLocaleString()} ${p.priceRange.minVariantPrice.currencyCode}`
        : '';
      const url = p.onlineStoreUrl || `${WHATSAPP}?text=${encodeURIComponent('Hi! I am interested in: ' + p.title)}`;
      return `
      <a class="product-card" href="${url}" target="_blank" rel="noopener">
        <div class="pc-img">${img}</div>
        <div class="pc-info">
          <div class="pc-name">${p.title}</div>
          <div class="pc-price">${price}</div>
        </div>
      </a>`;
    }).join('');
  }

  async function loadShopify() {
    const query = `
      query CollectionProducts($handle: String!, $first: Int!) {
        collection(handle: $handle) {
          products(first: $first) {
            edges { node {
              title
              handle
              onlineStoreUrl
              featuredImage { url altText }
              priceRange { minVariantPrice { amount currencyCode } }
            } }
          }
        }
      }`;
    const res = await fetch(`https://${SHOPIFY.domain}/api/${SHOPIFY.apiVersion}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY.token
      },
      body: JSON.stringify({ query, variables: { handle: collectionHandle, first: SHOPIFY.productsPerPage } })
    });
    if (!res.ok) throw new Error('Storefront API ' + res.status);
    const json = await res.json();
    const edges = json.data && json.data.collection && json.data.collection.products.edges;
    if (!edges || !edges.length) throw new Error('No products in collection: ' + collectionHandle);
    renderProducts(edges.map(e => e.node));
  }

  if (isConfigured) {
    loadShopify().catch(err => {
      console.warn('[shop] Shopify unavailable, showing placeholders —', err.message);
      renderComingSoon();
    });
  } else {
    renderComingSoon();
  }
})();
