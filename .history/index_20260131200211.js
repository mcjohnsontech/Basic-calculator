// Get the input box for filling the inputed number from the calculator

var addition = document.getElementById("addition");
var multiply = document.getElementById("multiply");
var division = document.getElementById("division");
var subtraction = document.getElementById("subtraction");

var display = document.getElementById("display");
var collate = [];

document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Numbers
  if (!isNaN(key)) {
    appendToDisplay(key);
  }

  // Operators
  else if (["+", "-", "*", "/"].includes(key)) {
    mathsOperator(key);
  }

  // Decimal point
  else if (key === ".") {
    appendToDisplay(".");
  }

  // Enter key → calculate
  else if (key === "Enter") {
    event.preventDefault(); // stops form submit if inside form
    totalFunc();
  }

  // Backspace → remove last character
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape → clear display
  else if (key === "Escape") {
    clearDisplay();
  }
});

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