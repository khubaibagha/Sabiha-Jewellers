/* Journey Jewelers — Shared Utilities */

// Scroll fade-in animations
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade, .fade-stagger').forEach(el => obs.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Contact form handling
  const formSubmit = document.getElementById('formSubmit');
  if (formSubmit) {
    formSubmit.addEventListener('click', () => {
      const name = document.getElementById('fname') && document.getElementById('fname').value.trim();
      const phone = document.getElementById('fphone') && document.getElementById('fphone').value.trim();
      const email = document.getElementById('femail') && document.getElementById('femail').value.trim();
      if (!name) { document.getElementById('fname') && document.getElementById('fname').focus(); return; }
      if (!phone && !email) { document.getElementById('fphone') && document.getElementById('fphone').focus(); return; }
      const form = document.getElementById('contactForm');
      const success = document.getElementById('formSuccess');
      if (form && success) {
        form.style.display = 'none';
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Smooth hash scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Page-transition fade on internal navigation
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a');
    if (!a || !a.href || a.target === '_blank' || a.hasAttribute('download')) return;
    if (a.protocol !== 'http:' && a.protocol !== 'https:') return;
    if (a.hostname !== location.hostname) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    e.preventDefault();
    document.body.classList.add('page-exit');
    setTimeout(() => { window.location.href = a.href; }, 220);
  });

  // Back-to-top floating button
  const fabTop = document.getElementById('fabTop');
  if (fabTop) {
    window.addEventListener('scroll', () => {
      fabTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // .ics calendar reminder downloads
  document.querySelectorAll('[data-ics]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-ics-title') || 'Jewelry Care Reminder';
      const desc = btn.getAttribute('data-ics-desc') || 'Time for your jewelry care visit at Journey Jewelers.';
      const months = parseInt(btn.getAttribute('data-ics-months') || '6', 10);
      const start = new Date();
      start.setMonth(start.getMonth() + months);
      const fmt = d => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      const end = new Date(start.getTime() + 60 * 60 * 1000);
      const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Journey Jewelers//Care Plan//EN',
        'BEGIN:VEVENT',
        'UID:' + Date.now() + '@journeyjewelers',
        'DTSTAMP:' + fmt(new Date()),
        'DTSTART:' + fmt(start),
        'DTEND:' + fmt(end),
        'SUMMARY:' + title,
        'DESCRIPTION:' + desc + ' Call (405) 759-2889 or visit 13316 S Western Ave, Suite L, Oklahoma City, OK.',
        'LOCATION:13316 S Western Ave, Suite L, Oklahoma City, OK 73170',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');
      const blob = new Blob([ics], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });

  // Before/after slider drag
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;
    const setPos = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + '%';
    };
    slider.addEventListener('pointerdown', e => { dragging = true; setPos(e.clientX); slider.setPointerCapture(e.pointerId); });
    slider.addEventListener('pointermove', e => { if (dragging) setPos(e.clientX); });
    slider.addEventListener('pointerup', () => { dragging = false; });
    slider.addEventListener('pointercancel', () => { dragging = false; });
  });

  // Gallery filter tabs
  const galTabs = document.querySelectorAll('.gal-tab');
  if (galTabs.length) {
    const galItems = document.querySelectorAll('.gal-item');
    galTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        galTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        galItems.forEach(item => {
          const show = filter === 'all' || item.getAttribute('data-cat') === filter;
          item.classList.toggle('show', show);
        });
      });
    });
  }

  // Ring size guide tool
  const rsSlider = document.getElementById('rsSlider');
  if (rsSlider) {
    const rsTable = [
      [140, 3], [145, 3.5], [148, 4], [152, 4.5], [157, 5], [160, 5.5], [165, 6], [169, 6.5],
      [173, 7], [177, 7.5], [181, 8], [185, 8.5], [189, 9], [194, 9.5], [198, 10],
      [202, 10.5], [206, 11], [210, 11.5], [214, 12], [218, 12.5], [222, 13]
    ];
    const rsCircle = document.getElementById('rsCircle');
    const rsSize = document.getElementById('rsSize');
    const rsMm = document.getElementById('rsMm');
    const updateRs = () => {
      const mmVal = parseInt(rsSlider.value, 10);
      let closest = rsTable[0];
      rsTable.forEach(row => { if (Math.abs(row[0] - mmVal) < Math.abs(closest[0] - mmVal)) closest = row; });
      rsSize.textContent = closest[1];
      rsMm.textContent = (mmVal / 10).toFixed(1) + 'mm';
      rsCircle.style.width = (Math.round(mmVal / 222 * 130) + 50) + 'px';
      rsCircle.style.height = (Math.round(mmVal / 222 * 130) + 50) + 'px';
    };
    rsSlider.addEventListener('input', updateRs);
    updateRs();
  }

  // 4Cs diamond comparison tool
  document.querySelectorAll('.dc-tool').forEach(tool => {
    const tabs = tool.querySelectorAll('.dc-tab');
    const panels = tool.querySelectorAll('.dc-panel');
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        panels[i].classList.add('active');
      });
    });
    tool.querySelectorAll('.dc-grade').forEach(grade => {
      grade.addEventListener('click', () => {
        const panel = grade.closest('.dc-panel');
        panel.querySelectorAll('.dc-grade').forEach(g => g.classList.remove('active'));
        grade.classList.add('active');
        const desc = panel.querySelector('.dc-desc');
        if (desc) desc.textContent = grade.getAttribute('data-desc') || '';
      });
    });
  });

  // Referral code copy
  const refCopyBtn = document.getElementById('refCopyBtn');
  if (refCopyBtn) {
    refCopyBtn.addEventListener('click', () => {
      const input = document.getElementById('refCodeInput');
      input.select();
      navigator.clipboard.writeText(input.value).then(() => {
        const msg = document.getElementById('refCopied');
        if (msg) { msg.classList.add('show'); setTimeout(() => msg.classList.remove('show'), 2200); }
      });
    });
  }
});
