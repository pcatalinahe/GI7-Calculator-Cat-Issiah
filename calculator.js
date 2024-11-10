// Calculator Aesthetic Code Starts Here
// This selects our html elements which we then change the class of for dynamic style changing with css
let themesChanged = document.querySelectorAll(
  ".background, .calc-container, .btn, #results, .display"
);
// Declaring our buttons that will do the theme changes
let btnWinter = document.querySelector("#winter");
let btnFall = document.querySelector("#fall");
let btnSpring = document.querySelector("#spring");

// Theme changes on button clicks, removes prior themes if applied, then changes background color and image for further theme stying
btnWinter.addEventListener("click", function () {
  themesChanged.forEach((element) =>
    element.classList.remove("theme-fall", "theme-spring")
  );
  themesChanged.forEach((element) => element.classList.add("theme-winter"));
  document.querySelector("body").style.backgroundImage =
    "URL('images/winter.jpg')";
  document.querySelector(".background").style.backgroundColor = "#5277d34d";
});

btnFall.addEventListener("click", function () {
  themesChanged.forEach((element) =>
    element.classList.remove("theme-winter", "theme-spring")
  );
  themesChanged.forEach((element) => element.classList.add("theme-fall"));
  document.querySelector("body").style.backgroundImage =
    "url('images/fall.jpg')";
  document.querySelector(".background").style.backgroundColor = "#bd74652a";
});

btnSpring.addEventListener("click", function () {
  themesChanged.forEach((element) =>
    element.classList.remove("theme-winter", "theme-fall")
  );
  themesChanged.forEach((element) => element.classList.add("theme-spring"));
  document.querySelector("body").style.backgroundImage =
    "URL(images/spring.jpg)";
  document.querySelector(".background").style.backgroundColor = "#e73b632b";
});

// Calculator Functional Code Starts Here
// An object we use later on to push numbers into and join
const btnValues = {
  dataValues: [],
};

// Declaration of our variables and buttons
let varNumber1 = null;
let varNumber2 = null;
let operator = null;
let result = null;
let btnOne = document.querySelector("#one");
let btnTwo = document.querySelector("#two");
let btnThree = document.querySelector("#three");
let btnFour = document.querySelector("#four");
let btnFive = document.querySelector("#five");
let btnSix = document.querySelector("#six");
let btnSeven = document.querySelector("#seven");
let btnEight = document.querySelector("#eight");
let btnNine = document.querySelector("#nine");
let btnZero = document.querySelector("#zero");
let btnDoubleZero = document.querySelector("#double-zero");
let btnClear = document.querySelector("#clear");
let btnPercentage = document.querySelector("#percentage");
let btnBackspace = document.querySelector("#backspace");
let btnProduct = document.querySelector("#product");
let btnQuotient = document.querySelector("#quotient");
let btnSubtract = document.querySelector("#subtract");
let btnSum = document.querySelector("#sum");
let btnDecimal = document.querySelector("#decimal");
let resultDisplay = document.querySelector("#numbers");

// Adding event listeners for our buttons we just declared, pushing corresponding value into our array, combining them together in real time and updating the display to show current value
btnZero.addEventListener("click", function () {
  btnValues.dataValues.push(0);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});

btnOne.addEventListener("click", function () {
  btnValues.dataValues.push(1);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});

btnTwo.addEventListener("click", function () {
  btnValues.dataValues.push(2);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnThree.addEventListener("click", function () {
  btnValues.dataValues.push(3);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnFour.addEventListener("click", function () {
  btnValues.dataValues.push(4);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnFive.addEventListener("click", function () {
  btnValues.dataValues.push(5);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnSix.addEventListener("click", function () {
  btnValues.dataValues.push(6);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnSeven.addEventListener("click", function () {
  btnValues.dataValues.push(7);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnEight.addEventListener("click", function () {
  btnValues.dataValues.push(8);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnNine.addEventListener("click", function () {
  btnValues.dataValues.push(9);
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});
btnDoubleZero.addEventListener("click", function () {
  btnValues.dataValues.push("00");
  resultDisplay.innerText = `${btnValues.dataValues.join("")}`;
});

// On click of operator buttons it will set our first variables to current data, then clear the object which contained the data values, and then it sets the operator to its respective choice
btnSum.addEventListener("click", function () {
  varNumber1 = btnValues.dataValues.join("");
  btnValues.dataValues = [];
  operator = "addition";
});

btnProduct.addEventListener("click", function () {
  varNumber1 = btnValues.dataValues.join("");
  btnValues.dataValues = [];
  operator = "product";
});

btnQuotient.addEventListener("click", function () {
  varNumber1 = btnValues.dataValues.join("");
  btnValues.dataValues = [];
  operator = "quotient";
});

btnSubtract.addEventListener("click", function () {
  varNumber1 = btnValues.dataValues.join("");
  btnValues.dataValues = [];
  operator = "subtraction";
});

btnPercentage.addEventListener("click", function () {
  varNumber1 = btnValues.dataValues.join("");
  btnValues.dataValues = [];
  operator = "percentage";
});

btnClear.addEventListener("click", function () {
  btnValues.dataValues = [];
  varNumber1 = null;
  varNumber2 = null;
  result = null;
  resultDisplay.innerText = ``;
  btnValues.operator = [];
});

// On backspace button click it will use pop method to remove last data input and then update the display
btnBackspace.addEventListener("click", function () {
  btnValues.dataValues.pop();
  resultDisplay.innerText = btnValues.dataValues.join("");
});

btnDecimal.addEventListener("click", function () {
  if (btnValues.dataValues.indexOf(".") === -1) {
    btnValues.dataValues.push(".");
  }
  resultDisplay.innerText = btnValues.dataValues.join("");
});

// Main function that does the calculations on equal sign button click, checks for empty data value for variable one, if else statements for checking operator values for which one to use, template literates to show full equation, both inputs and operator and result.
let btnEqual = document.querySelector("#equal");
btnEqual.addEventListener("click", function () {
  if (varNumber1 != null) {
    varNumber2 = btnValues.dataValues.join("");
  }
  if (operator == "quotient") {
    if (varNumber2 == 0) {
      resultDisplay.innerText = "cannot divide by 0";
    } else {
      result = varNumber1 / varNumber2;
      resultDisplay.innerText = `${varNumber1} ${"/"} ${varNumber2} = ${result};`;
    }
  } else if (operator == "addition") {
    result = parseFloat(varNumber1) + parseFloat(varNumber2);
    resultDisplay.innerText = `${varNumber1} ${"+"} ${varNumber2} = ${result};`;
  } else if (operator == "product") {
    result = varNumber1 * varNumber2;
    resultDisplay.innerText = `${varNumber1} ${"*"} ${varNumber2} = ${result};`;
  } else if (operator == "subtraction") {
    result = varNumber1 - varNumber2;
    resultDisplay.innerText = `${varNumber1} ${"-"} ${varNumber2} = ${result};`;
  } else if (operator == "percentage") {
    result = (varNumber1 / varNumber2) * 100;
    resultDisplay.innerText = `${varNumber1} ${"%"} ${varNumber2} = ${result};`;
  } else {
    console.log("Error! Please try again.");
  }
});
