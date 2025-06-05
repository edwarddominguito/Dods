// Show/hide back-to-top button
window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('backToTop');
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Smooth scroll with header offset
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 90; // header height
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
});
