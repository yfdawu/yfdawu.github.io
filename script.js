/* ============================================================
   script.js — Yu Feng Wu Portfolio
============================================================ */

/* ---- Navbar: add scrolled class ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close mobile nav when a link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ---- Fade-in on scroll ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

/* Observe project cards, skill groups, stat items */
document.querySelectorAll('.project-card, .skill-group, .stat, .edu-card, .contact-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

/* Add fade-in CSS dynamically so it works without extra CSS file edits */
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
