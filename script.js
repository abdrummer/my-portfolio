document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded');

  // Smooth scroll for anchor links in the main menu
  document.querySelectorAll('.main-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
