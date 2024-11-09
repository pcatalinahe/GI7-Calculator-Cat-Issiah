const themeChanger = document.querySelectorAll(
  ".main-container, calc-container, .btn"
);
// themeChanger.forEach((element) => element.classList.add("themeSpring"));

let btnWinter = document.querySelector("#winter");
let btnFall = document.querySelector("#fall");
let btnSpring = document.querySelector("#spring");

btnWinter.addEventListener("click", winter);
btnFall.addEventListener("click", fall);
btnSpring.addEventListener("click", spring);

function winter() {
  themeChanger.forEach((element) =>
    element.classList.remove("themeFall", "themeSpring")
  );
  themeChanger.forEach((element) => element.classList.add("themeWinter"));
  document.querySelector("body").style.backgroundImage =
    "url(/images/winter.jpg";
}
function fall() {
  themeChanger.forEach((element) =>
    element.classList.remove("themeWinter", "themeSpring")
  );
  themeChanger.forEach((element) => element.classList.add("themeFall"));
  document.querySelector("body").style.backgroundImage = "url(/images/fall.jpg";
}

function spring() {
  themeChanger.forEach((element) =>
    element.classList.remove("themeFall", "themeWinter")
  );
  themeChanger.forEach((element) => element.classList.add("themeSpring"));
  document.querySelector("body").style.backgroundImage =
    "url(/images/spring.jpg";
}

console.log(themeChanger);
