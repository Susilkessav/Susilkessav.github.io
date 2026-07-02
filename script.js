// ===================== Theme toggle =====================
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();

// ===================== Mobile nav =====================
(function () {
  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');
  if (!burger || !links) return;

  function close() {
    links.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') close();
  });
})();

// ===================== Scroll-spy active link =====================
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) map[id] = a;
  });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });
  if (!('IntersectionObserver' in window) || !sections.length) return;

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('active'); });
        var active = map[entry.target.id];
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(function (s) { spy.observe(s); });
})();

// ===================== Reveal on scroll =====================
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!els.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduce) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { obs.observe(el); });
})();

// ===================== Scroll progress =====================
(function () {
  var bar = document.getElementById('progress');
  if (!bar) return;
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// ===================== Footer year =====================
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
