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

/* ----------INDEX SLIDER */
var btnBefore = document.querySelector(".range-slider__direction--before");
var btnAfter = document.querySelector(".range-slider__direction--after");
var imgBefore = document.querySelector(".range-slider__img-before");
var imgAfter = document.querySelector(".range-slider__img-after");
var handBefore = document.querySelector(".range-slider__handle:first-child");
var handAfter = document.querySelector(".range-slider__handle:last-child");
var bar = document.querySelector(".range-slider__bar");

btnAfter.addEventListener("click", function(event) {
  event.preventDefault();
  imgBefore.classList.add("range-slider__img-before--hidden");
  imgAfter.classList.remove("range-slider__img-after--hidden");
  handBefore.classList.add("range-slider__handle--hidden");
  handAfter.classList.remove("range-slider__handle--hidden");
  bar.classList.add("range-slider__bar--after");
});

btnBefore.addEventListener("click", function(event) {
  event.preventDefault();
  imgBefore.classList.remove("range-slider__img-before--hidden");
  imgAfter.classList.add("range-slider__img-after--hidden");
  handBefore.classList.remove("range-slider__handle--hidden");
  handAfter.classList.add("range-slider__handle--hidden");
  bar.classList.remove("range-slider__bar--after");
});
