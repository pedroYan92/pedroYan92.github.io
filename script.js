const hamburguer = document.getElementById('hamburguer');
const navUL = document.getElementById('menu__nav');

hamburguer.addEventListener('click', () => {
  navUL.classList.toggle('show');
});
