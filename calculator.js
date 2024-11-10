//create function to change themes for calculator and bg on user's click

// let themesChanged = document.querySelectorAll(
//   ".main-container",
//   ".calc-container",
//   ".btn",
//   "#results",
//   ".display"
// );

let themesChanged = document.querySelectorAll(
  ".background, .calc-container, .btn, #results, .display"
);


let btnWinter = document.querySelector("#winter");
let btnFall = document.querySelector("#fall");
let btnSpring = document.querySelector("#spring");

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

const btnValues = {
  // numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"],
  dataValues: [],
  // btnNumbers: [document.querySelector("#one"), document.querySelector("#two")],
};

/*
console.log(btnValues.numbers[2]);
console.log(btnValues.btnNumbers[0] + btnValues.btnNumbers[1]);
console.log(btnValues.numbers[1] + btnValues.numbers[2]);

console.log(typeof btnValues.numbers[0]);
let x;
function strConversion(stringNumber) {
  parseInt.stringNumber;
  console.log(stringNumber);
}
strConversion("10");

function intConversion() {
  x = toString(btnValues.numbers[2]);
  console.log(typeof x);
}
intConversion();

*/

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

/*
btnOne.addEventListener("click", function () {
  varNumber1 + "1";
  console.log(varNumber1);
});
*/

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

let btnEqual = document.querySelector("#equal");
btnEqual.addEventListener("click", function () {
  if (varNumber1 != null) {
    varNumber2 = btnValues.dataValues.join("");
  }

  if (operator == "quotient") {
    if (varNumber2 == 0) {
      resultDisplay.innerText = 'cannot divide by 0';
    } else {
    result = varNumber1 / varNumber2;
    resultDisplay.innerText = `${varNumber1} ${"/"} ${varNumber2} = ${result};`
    }
  } else if (operator == "addition") {
    resultDisplay.innerText = parseFloat(varNumber1) + parseFloat(varNumber2);
  } else if (operator == "product") {
    resultDisplay.innerText = varNumber1 * varNumber2;
  } else if (operator == "subtraction") {
    resultDisplay.innerText = varNumber1 - varNumber2;
  } else if (operator == "percentage") {
    resultDisplay.innerText = (varNumber1 / varNumber2) * 100;
  }

  /*
  switch (operations) {
    case (btnValues.operator[0] = "+"):
      resultDisplay.innerText = varNumber1 + varNumber2;
    case (btnValues.operator[0] = "-"):
      resultDisplay.innerText = varNumber1 - varNumber2;
  }

  resultDisplay.innerText = eval(varNumber1 * varNumber2);
  resultDisplay.innerText = `${varNumber1} + ${varNumber2} = ${
    varNumber1 + varNumber2
  }`;

  */
});
