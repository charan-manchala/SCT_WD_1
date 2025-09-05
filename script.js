// Dynamically set current year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Navbar scroll effect
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const panel = document.getElementById('mobile-menu');
toggle.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  panel.hidden = !open;
});

// Close mobile menu when clicking a link
panel.addEventListener('click', e => {
  if (e.target.matches('a')) panel.classList.remove('open');
});

// Smooth scroll for anchor links
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const el = document.querySelector(a.getAttribute('href'));
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });
  }
});
