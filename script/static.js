const navButton = document.querySelector(".btn-container");
const navMenu = document.querySelector(".nav-menu-container");
const button = document.querySelector(".nav-btn");
const navLink = document.querySelectorAll(".nav-link");

navButton.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  button.classList.toggle('show');
  navMenu.classList.toggle('show');
}

function closeMenu() {
  button.classList.remove("show");
  navMenu.classList.remove("show");
}