let lastScrollTop = 0;
const navbar = document.querySelector('header');
const navbarContent = document.querySelector('#navbarContent');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isMenuOpen = navbarContent.classList.contains('show');
  const isDesktop = window.matchMedia('(min-width: 992px)').matches;

  if (scrollTop > lastScrollTop && !isMenuOpen) {
    // Scroll vers le bas + menu fermé → cache le header et supprime la bordure
    navbar.classList.add('navbar-hidden');
    if (isDesktop) {
      navbar.style.borderBottom = 'none';
    }
  } else {
    // Scroll vers le haut ou menu ouvert → affiche le header
    navbar.classList.remove('navbar-hidden');

    if (isDesktop) {
      if (scrollTop <= 100) {
        // En haut de la page, on enlève la bordure
        navbar.style.borderBottom = 'none';
      } else {
        // Sinon on affiche la bordure
        navbar.style.borderBottom = '2px solid var(--orange)';
      }
    } else {
      navbar.style.borderBottom = 'none';
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



const menuToggle = document.getElementById('menu-toggle');

navbarContent.addEventListener('shown.bs.collapse', () => {
  menuToggle.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
});

navbarContent.addEventListener('hidden.bs.collapse', () => {
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
});

// Crée une instance Bootstrap Collapse pour le menu
const bsCollapse = new bootstrap.Collapse(navbarContent, { toggle: false });
// Récupère tous les liens dans la navbar
const navLinks = navbarContent.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    bsCollapse.hide();           // ferme le menu
  });
});
