// Year in footer
document.getElementById('year').textContent = new Date().getFullYear().toString();

// Loader fade-out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 300);
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));
}

// Projects filter
const filterButtons = document.querySelectorAll('.filters .chip');
const projectCards = document.querySelectorAll('.card');

function applyFilter(tag) {
  projectCards.forEach(card => {
    const tags = (card.getAttribute('data-tags') || '').split(',').map(s => s.trim());
    const show = tag === 'All' || tags.includes(tag);
    card.style.display = show ? '' : 'none';
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter || 'All');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const opts = { threshold: 0.6 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) link.classList.add('active');
    else link.classList.remove('active');
  });
}, opts);
sections.forEach(sec => observer.observe(sec));

// Lore toggle
const loreBtn = document.getElementById('loreBtn');
const lore = document.getElementById('lore');
if (loreBtn && lore) {
  loreBtn.addEventListener('click', () => {
    const isHidden = lore.classList.toggle('hidden');
    loreBtn.setAttribute('aria-expanded', String(!isHidden));
  });
}

// Optional: if you add images later, ensure they have alt text
// Optional: replace "No thumbnail yet" with <img src="assets/your-image.jpg" alt="Project screenshot">
