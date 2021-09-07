const navButton = document.querySelector(".btn-container");
const navMenu = document.querySelector(".nav-menu");
const button = document.querySelector(".nav-btn");

navButton.addEventListener("click", mobileMenu);

function mobileMenu() {
  button.classList.toggle('show');
  navMenu.classList.toggle('show');
}