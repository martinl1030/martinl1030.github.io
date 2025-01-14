const btn = document.querySelector("button.mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

window.addEventListener("scroll", stickyNav);

function stickyNav() {
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  if (window.scrollY > sticky) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
}
