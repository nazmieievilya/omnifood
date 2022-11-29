const menuBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
function mobileMenuClickHandler() {
  header.classList.toggle("nav-open");
}
menuBtn.addEventListener("click", mobileMenuClickHandler);
