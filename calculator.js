//create function to change themes for calculator and bg on user's click

let themesChanged = document.querySelectorAll(
  ".main-container",
  ".calc-container",
  ".btn",
  "#results",
  ".display"
);

let btnWinter = document.querySelector("#winter");
let btnFall = document.querySelector("#fall");
let btnSpring = document.querySelector("#spring");

btnWinter.addEventListener("click", function () {
  themesChanged.forEach((element) => element.classList.remove("theme-fall", "theme-spring"));
  themesChanged.forEach((element) => element.classList.add("theme-winter"));
  document.querySelector('body').style.backgroundImage = "URL('images/winter.jpg')";
  document.querySelector('.main-container').style.backgroundColor = '#5277d34d';
});

btnFall.addEventListener("click", function () {
  themesChanged.forEach((element) => element.classList.remove("theme-winter", "theme-spring"));
  themesChanged.forEach((element) => element.classList.add("theme-fall"));
  document.querySelector("body").style.backgroundImage =
   "url('images/fall.jpg')";
  document.querySelector('.main-container').style.backgroundColor = '#bd74652a';
});

btnSpring.addEventListener("click", function () {
  themesChanged.forEach((element) => element.classList.remove("theme-winter", "theme-fall"));
  themesChanged.forEach((element) => element.classList.add('theme-spring'));
  document.querySelector('body').style.backgroundImage = "URL(images/spring.jpg)";
  document.querySelector('.main-container').style.backgroundColor = '#e73b632b';
});

/*
btnThemes.addEventListener("click", function () {
  console.log("it works");
});
*/
