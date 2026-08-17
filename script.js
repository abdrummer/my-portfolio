document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded');

  // Smooth scroll for navbar links
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        const nav = document.getElementById('nav-menu');
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          document.getElementById('menu-toggle')?.setAttribute('aria-label', 'Open menu');
          document.body.classList.remove('no-scroll');
        }
      }
    });
  });

  // Theme toggle (uses body.light-theme)
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme === 'light') document.body.classList.add('light-theme');

  const updateThemeIcon = () => {
    const icon = themeToggle?.querySelector('i');
    if (!icon) return;
    if (document.body.classList.contains('light-theme')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  };

  if (themeToggle) {
    updateThemeIcon();
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('site-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      updateThemeIcon();
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const opened = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-label', opened ? 'Close menu' : 'Open menu');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !opened);
        icon.classList.toggle('fa-xmark', opened);
      }
      document.body.classList.toggle('no-scroll', opened);
    });
  }

});
