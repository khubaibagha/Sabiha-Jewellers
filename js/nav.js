/* Journey Jewelers — Shared Navigation Component
   Usage: set window.NAV_BASE before loading this script
   Root pages:    <script>window.NAV_BASE = './';</script>
   Service pages: <script>window.NAV_BASE = '../';</script>
*/
(function() {
  const B = window.NAV_BASE || './';

  const socials = `
    <a href="https://instagram.com/journeyjewelers" target="_blank" rel="noopener" class="f-soc" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    </a>
    <a href="https://facebook.com/journeyjewelersmoore" target="_blank" rel="noopener" class="f-soc" aria-label="Facebook">
      <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>`;

  const navHtml = `
  <header class="site-header">
    <div class="h-inner">
      <a href="${B}index.html" class="h-logo">
        <div class="h-logo-name">Journey Jewelers</div>
        <div class="h-logo-sub">Oklahoma City, OK &middot; Est. 30+ Years</div>
      </a>
      <div class="h-right">
        <div class="h-contact-info">
          <span class="h-ci-hours">Mon&ndash;Fri &nbsp;9:30&ndash;5:30 PM</span>
          <a href="tel:4057592889" class="h-ci-phone">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            (405) 759-2889
          </a>
        </div>
        <a href="${B}contact.html#book" class="h-btn-appt">Book Appointment</a>
        <button class="h-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <nav class="main-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <ul class="nav-list">

        <li class="nav-item has-dropdown">
          <a href="${B}services/ring-resizing.html" class="nav-link">
            Services
            <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
          </a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div>
                <div class="dd-col-head">Shop by Service</div>
                <a href="${B}services/ring-resizing.html" class="dd-link">Ring Resizing</a>
                <a href="${B}services/jewelry-repair.html" class="dd-link">Jewelry Repair</a>
                <a href="${B}services/jewelry-repair.html#prong-repair" class="dd-link">Prong Repair</a>
                <a href="${B}services/jewelry-repair.html#chain-repair" class="dd-link">Chain &amp; Bracelet Repair</a>
                <a href="${B}services/jewelry-repair.html#earring-repair" class="dd-link">Earring Repair</a>
                <a href="${B}services/jewelry-repair.html#cleaning" class="dd-link">Professional Cleaning</a>
                <a href="${B}services/jewelry-repair.html#repurposing" class="dd-link">Jewelry Repurposing</a>
                <a href="${B}services/care-plan.html" class="dd-link">JM Care Plan</a>
              </div>
              <div>
                <div class="dd-col-head">Quick Links</div>
                <a href="${B}contact.html#book" class="dd-link featured">&rarr; Book Appointment</a>
                <a href="${B}contact.html#quote" class="dd-link featured">&rarr; Request Free Quote</a>
                <hr class="dd-divider">
                <a href="${B}about.html#process" class="dd-link">How It Works</a>
                <a href="${B}gallery.html" class="dd-link">Our Craftsmanship Gallery</a>
                <a href="${B}reviews.html" class="dd-link">Customer Reviews</a>
                <a href="${B}about.html" class="dd-link">About Our Shop</a>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item has-dropdown">
          <a href="${B}services/custom-design.html" class="nav-link">
            Custom Design
            <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
          </a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div>
                <div class="dd-col-head">Custom &amp; Bespoke</div>
                <a href="${B}services/custom-design.html" class="dd-link">Custom Jewelry Design</a>
                <a href="${B}services/custom-design.html#process" class="dd-link">Our Design Process</a>
                <a href="${B}services/custom-design.html#lab-grown" class="dd-link">Lab-Grown Diamonds</a>
                <a href="${B}services/jewelry-repair.html#repurposing" class="dd-link">Heirloom Repurposing</a>
              </div>
              <div>
                <div class="dd-col-head">Start Here</div>
                <a href="${B}contact.html" class="dd-link featured">&rarr; Schedule Free Consultation</a>
                <hr class="dd-divider">
                <a href="${B}services/custom-design.html#faq" class="dd-link">Custom Design FAQ</a>
                <a href="${B}reviews.html" class="dd-link">Client Stories</a>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item has-dropdown">
          <a href="${B}services/bridal-engagement.html" class="nav-link">
            Bridal &amp; Engagement
            <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
          </a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div>
                <div class="dd-col-head">Bridal Collections</div>
                <a href="${B}services/bridal-engagement.html#engagement-rings" class="dd-link">Engagement Rings</a>
                <a href="${B}services/bridal-engagement.html#wedding-bands" class="dd-link">Wedding Bands</a>
                <a href="${B}services/bridal-engagement.html#bridal-sets" class="dd-link">Bridal Sets</a>
                <a href="${B}services/bridal-engagement.html#lab-grown-diamonds" class="dd-link">Lab-Grown Diamonds</a>
                <a href="${B}services/custom-design.html" class="dd-link">Custom Bridal Design</a>
              </div>
              <div>
                <div class="dd-col-head">Learn &amp; Explore</div>
                <a href="${B}contact.html" class="dd-link featured">&rarr; Start Your Ring Journey</a>
                <hr class="dd-divider">
                <a href="${B}services/bridal-engagement.html#diamonds" class="dd-link">Diamond Education (4Cs)</a>
                <a href="${B}services/bridal-engagement.html#lab-grown-diamonds" class="dd-link">Lab vs. Natural Diamonds</a>
                <a href="${B}reviews.html" class="dd-link">Engagement Stories</a>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item has-dropdown">
          <a href="${B}about.html" class="nav-link">
            About
            <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg>
          </a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div>
                <div class="dd-col-head">Our Story</div>
                <a href="${B}about.html" class="dd-link">About Journey Jewelers</a>
                <a href="${B}about.html#promise" class="dd-link">Our Promise</a>
                <a href="${B}about.html#process" class="dd-link">Our Process</a>
                <a href="${B}services/care-plan.html" class="dd-link">JM Care Plan</a>
              </div>
              <div>
                <div class="dd-col-head">Trust &amp; Reviews</div>
                <a href="${B}reviews.html" class="dd-link">Customer Reviews</a>
                <a href="${B}reviews.html#google" class="dd-link">Google Reviews</a>
                <hr class="dd-divider">
                <a href="${B}contact.html" class="dd-link featured">&rarr; Visit Our Studio</a>
              </div>
            </div>
          </div>
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
                <div class="dd-col-head">Our Studio</div>
                <div class="dd-contact-block">
                  <a href="https://maps.google.com?q=13316+S+Western+Ave+Suite+L+Oklahoma+City+OK+73170" target="_blank" rel="noopener" class="dd-contact-item">
                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>13316 S Western Ave, Suite L<br>Oklahoma City, OK 73170</span>
                  </a>
                  <a href="tel:4057592889" class="dd-contact-item">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    <span>Call (405) 759-2889</span>
                  </a>
                  <a href="sms:4055375686" class="dd-contact-item">
                    <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    <span>Text (405) 537-5686</span>
                  </a>
                  <div class="dd-contact-item">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                    <span>Mon&ndash;Fri &nbsp;9:30 AM &ndash; 5:30 PM</span>
                  </div>
                  <a href="mailto:JourneyJewelers@gmail.com" class="dd-contact-item">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>JourneyJewelers@gmail.com</span>
                  </a>
                </div>
              </div>
              <div>
                <div class="dd-col-head">Get In Touch</div>
                <a href="${B}contact.html#book" class="dd-link featured">&rarr; Book Appointment</a>
                <a href="${B}contact.html#quote" class="dd-link featured">&rarr; Request Free Quote</a>
                <hr class="dd-divider">
                <a href="tel:4057592889" class="dd-link">Call Us Now</a>
                <a href="sms:4055375686" class="dd-link">Send a Text</a>
                <a href="mailto:JourneyJewelers@gmail.com" class="dd-link">Email Us</a>
                <a href="https://maps.google.com?q=13316+S+Western+Ave+Suite+L+Oklahoma+City+OK+73170" target="_blank" rel="noopener" class="dd-link">Get Directions</a>
                <a href="${B}referral.html" class="dd-link">Refer a Friend &amp; Save</a>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-services">Services<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-services">
        <a href="${B}services/ring-resizing.html">Ring Resizing</a>
        <a href="${B}services/jewelry-repair.html">Jewelry Repair</a>
        <a href="${B}services/jewelry-repair.html#prong-repair">Prong Repair</a>
        <a href="${B}services/jewelry-repair.html#chain-repair">Chain &amp; Bracelet Repair</a>
        <a href="${B}services/jewelry-repair.html#cleaning">Professional Cleaning</a>
        <a href="${B}services/jewelry-repair.html#repurposing">Jewelry Repurposing</a>
        <a href="${B}services/care-plan.html">JM Care Plan</a>
      </div>
    </div>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-custom">Custom Design<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-custom">
        <a href="${B}services/custom-design.html">Custom Jewelry Design</a>
        <a href="${B}services/custom-design.html#process">Our Design Process</a>
        <a href="${B}services/custom-design.html#lab-grown">Lab-Grown Diamonds</a>
        <a href="${B}services/jewelry-repair.html#repurposing">Heirloom Repurposing</a>
      </div>
    </div>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-bridal">Bridal &amp; Engagement<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-bridal">
        <a href="${B}services/bridal-engagement.html">Engagement Rings</a>
        <a href="${B}services/bridal-engagement.html#wedding-bands">Wedding Bands</a>
        <a href="${B}services/bridal-engagement.html#lab-grown-diamonds">Lab-Grown Diamonds</a>
        <a href="${B}services/custom-design.html">Custom Bridal Design</a>
      </div>
    </div>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-about">About<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-about">
        <a href="${B}about.html">About Us</a>
        <a href="${B}about.html#promise">Our Promise</a>
        <a href="${B}about.html#process">Our Process</a>
        <a href="${B}services/care-plan.html">JM Care Plan</a>
      </div>
    </div>
    <a href="${B}gallery.html" class="m-nav-link">Gallery</a>
    <a href="${B}reviews.html" class="m-nav-link">Reviews</a>
    <div class="m-nav-item">
      <div class="m-nav-toggle" data-target="m-contact">Contact<svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div>
      <div class="m-nav-sub" id="m-contact">
        <a href="${B}contact.html#book">Book Appointment</a>
        <a href="tel:4057592889">Call (405) 759-2889</a>
        <a href="sms:4055375686">Text (405) 537-5686</a>
        <a href="mailto:JourneyJewelers@gmail.com">Email Us</a>
        <a href="https://maps.google.com?q=13316+S+Western+Ave+Suite+L+Oklahoma+City+OK+73170" target="_blank" rel="noopener">Get Directions</a>
        <a href="${B}referral.html">Refer a Friend &amp; Save</a>
      </div>
    </div>
    <a href="${B}contact.html#book" class="m-nav-appt">Book Appointment</a>
  </div>`;

  const infoStripHtml = `
  <div class="site-info-strip">
    <div class="sis-inner">
      <a href="https://maps.google.com?q=13316+S+Western+Ave+Suite+L+Oklahoma+City+OK+73170" target="_blank" rel="noopener" class="sis-item">
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        13316 S Western Ave, Suite L &middot; Oklahoma City, OK 73170
      </a>
      <div class="sis-div"></div>
      <a href="tel:4057592889" class="sis-item">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        (405) 759-2889
      </a>
      <div class="sis-div"></div>
      <a href="sms:4055375686" class="sis-item">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Text (405) 537-5686
      </a>
      <div class="sis-div"></div>
      <span class="sis-item">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
        Mon&ndash;Fri &nbsp; 9:30 AM &ndash; 5:30 PM
      </span>
      <div class="sis-div"></div>
      <a href="mailto:JourneyJewelers@gmail.com" class="sis-item">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        JourneyJewelers@gmail.com
      </a>
    </div>
  </div>`;

  const footerHtml = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="f-brand-name">Journey Jewelers</div>
          <div class="f-brand-sub">Oklahoma City, OK</div>
          <div class="f-brand-desc">The local experts in ring resizing, jewelry repair, custom design, and bridal jewelry. Family-owned with over 30 years of experience.</div>
        </div>
        <div>
          <div class="f-col-h">Services</div>
          <a class="f-link" href="${B}services/ring-resizing.html">Ring Resizing</a>
          <a class="f-link" href="${B}services/jewelry-repair.html">Jewelry Repair</a>
          <a class="f-link" href="${B}services/custom-design.html">Custom Design</a>
          <a class="f-link" href="${B}services/bridal-engagement.html">Bridal &amp; Engagement</a>
          <a class="f-link" href="${B}services/jewelry-repair.html#prong-repair">Prong Repair</a>
          <a class="f-link" href="${B}services/care-plan.html">JM Care Plan</a>
        </div>
        <div>
          <div class="f-col-h">Company</div>
          <a class="f-link" href="${B}about.html">About Us</a>
          <a class="f-link" href="${B}about.html#process">How It Works</a>
          <a class="f-link" href="${B}gallery.html">Our Craftsmanship</a>
          <a class="f-link" href="${B}reviews.html">Reviews</a>
          <a class="f-link" href="${B}referral.html">Refer a Friend</a>
          <a class="f-link" href="${B}contact.html">Contact</a>
          <a class="f-link" href="${B}contact.html#book">Book Appointment</a>
        </div>
        <div>
          <div class="f-col-h">Visit Us</div>
          <a class="f-link" href="tel:4057592889">(405) 759-2889</a>
          <a class="f-link" href="sms:4055375686">Text: (405) 537-5686</a>
          <a class="f-link" href="mailto:JourneyJewelers@gmail.com">JourneyJewelers@gmail.com</a>
          <a class="f-link" href="https://maps.google.com?q=13316+S+Western+Ave+Suite+L+Oklahoma+City+OK+73170" target="_blank" rel="noopener">13316 S Western Ave, Suite L<br>Oklahoma City, OK 73170</a>
          <div style="font-size:11px;color:#4a4038;margin-top:6px">Mon&ndash;Fri &middot; 9:30 AM &ndash; 5:30 PM</div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="f-copy">&copy; 2026 Journey Jewelers &middot; Oklahoma City, OK &middot; All rights reserved.</div>
        <div class="f-socials">${socials}</div>
      </div>
    </div>
  </footer>`;

  const fabHtml = `
  <div class="fab-stack" id="fabStack">
    <button class="fab-btn fab-top" id="fabTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>
    </button>
    <a href="${B}contact.html#book" class="fab-btn fab-book" aria-label="Book an appointment">
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span class="fab-label">Book</span>
    </a>
    <a href="sms:4055375686" class="fab-btn fab-text" aria-label="Text us">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <span class="fab-label">Text</span>
    </a>
    <a href="tel:4057592889" class="fab-btn fab-call" aria-label="Call us">
      <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
      <span class="fab-label">Call</span>
    </a>
  </div>`;

  // Inject nav at top (synchronous — must be first)
  const navEl = document.createElement('div');
  navEl.innerHTML = navHtml;
  document.body.insertBefore(navEl, document.body.firstChild);

  // Inject info strip + footer + floating action bar AFTER full DOM is parsed
  document.addEventListener('DOMContentLoaded', function() {
    const bottomEl = document.createElement('div');
    bottomEl.innerHTML = infoStripHtml + footerHtml;
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

  // Close mobile nav on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

})();
