const menuBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
function mobileMenuClickHandler() {
  header.classList.toggle("nav-open");
}
menuBtn.addEventListener("click", mobileMenuClickHandler);
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

// smooth scroll
function gotToPage(e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link"))
    header.classList.remove("nav-open");
  const href = e.target.getAttribute("href");
  console.log(href);
  if (href === "#") {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const rect = document.querySelector(href).getBoundingClientRect();
  let coords = rect.top;
  console.log(rect);
  console.log(href);
  window.scrollTo({ top: coords, behavior: "smooth" });
}
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => link.addEventListener("click", gotToPage));
console.log(allLinks);

// Sticky navigation
const sectionHeroElement = document.querySelector(".section-hero");
function addStickyClass([e]) {
  if (e.isIntersecting) {
    sectionHeroElement.style.marginTop = "0";
    return header.classList.remove("sticky");
  }
  sectionHeroElement.style.marginTop = "8rem";
  header.classList.add("sticky");
}
const observer = new IntersectionObserver(addStickyClass, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHeroElement);
