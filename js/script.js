/* ----------MENU MOBILE */
var tog = document.querySelector(".navigation__tog");
var nav =  document.querySelector(".navigation__list");

nav.classList.remove('navigation__list--nojs');

tog.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("navigation__list--show");
  tog.classList.toggle("navigation__tog--close");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    nav.classList.remove("navigation__list--show");
    tog.classList.remove("navigation__tog--close");
  }
});
