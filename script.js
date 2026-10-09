// mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});
document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
}));

// fade up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      if (e.target.querySelectorAll) {
        e.target.querySelectorAll('.skillbar > span').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// contact form (no backend — UI only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.classList.remove('hidden');
  form.reset();
  setTimeout(() => status.classList.add('hidden'), 4000);
});
