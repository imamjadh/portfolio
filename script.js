const observer = new IntersectionObserver((items) => {
  items.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const sections = document.querySelectorAll('section[id]');
const tabs = document.querySelectorAll('.side-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 260) current = s.id; });
  tabs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});