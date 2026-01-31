// Get the input box for filling the inputed number from the calculator

var addition = document.getElementById("addition");
var multiply = document.getElementById("multiply");
var division = document.getElementById("division");
var subtraction = document.getElementById("subtraction");

var display = document.getElementById("display");
var collate = [];

function appendToDisplay(input) {
  display.value += input;
  display.style.display = "inline";
}
function mathsOperator(operator) {
  let lastChar = display.value.slice(-1);

  // Prevent two operators in a row
  if ("+-*/".includes(lastChar)) return;

  // Convert × symbol to * for JavaScript
  if (operator === "x") operator = "*";

  display.value += operator;
}

function totalFunc() {
  try {
    let expression = display.value;

    // Replace visual ÷ if you used it
    expression = expression.replace(/÷/g, "/");

    let result = eval(expression);

    if (!isFinite(result)) {
      display.value = "Math Error";
    } else {
      display.value = Number.isInteger(result)
        ? result
        : result.toFixed(3);
    }
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}