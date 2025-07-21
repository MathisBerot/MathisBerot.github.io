//Menu
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll vers le bas : masque le header
    navbar.classList.add('navbar-hidden');
  } else {
    // Scroll vers le haut : affiche le header
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour Firefox
});
