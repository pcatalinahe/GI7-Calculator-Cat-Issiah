//create function to change themes for calculator and bg on user's click

let btnThemes = document.querySelector(".themes");
let btnWinter = document.querySelector("#winter");
let btnFall = document.querySelector("#fall");
let btnSpring = document.querySelector("#spring");
let btnButtons = document.querySelectorAll(".btn");

/*
btnThemes.addEventListener("click", function () {
  console.log("it works");
});
*/

btnWinter.addEventListener("click", function () {
  console.log("winter");
  this.style.backgroundColor = "blue";
  //   document.querySelectorAll(".btn").style.color = "green";
  btnButtons.classList.add("green-box");
});

btnFall.addEventListener("click", function () {
  console.log("fall");
});

btnSpring.addEventListener("click", function () {
  console.log("spring");
});
