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
function mathsOperator(tag) {
  let chosenOne = display.value;
  collate.push(chosenOne);
  collate.push(tag);
  console.log(collate);
  display.value = "";
}

function totalFunc() {
  let choseSecond = display.value;
  collate.push(choseSecond);
  console.log(collate);
  if (collate.includes("x")) {
    let result = Number(collate[0]) * Number(collate[2]);
    console.log(result);
    display.value = result;

    if (Number.isInteger(result) == false) {
      let rounded = result.toFixed(3);
      display.value = rounded;
      if (isNaN(result) == true) {
        display.value = 'Error, please reload page';
      }
    }
  }
  if (collate.includes("-")) {
    let result = Number(collate[0]) - Number(collate[2]);
    console.log(result);
    display.value = result;

    if (Number.isInteger(result) == false) {
      let rounded = result.toFixed(3);
      display.value = rounded;
      if (isNaN(result) == true) {
        display.value = 'Error, please reload page';
      }
    }
  }
  if (collate.includes("/")) {
    let result = Number(collate[0]) / Number(collate[2]);
    console.log(result);
    display.value = result;

    if (Number.isInteger(result) == false) {
      let rounded = result.toFixed(3);
      display.value = rounded;
      if (isNaN(result) == true) {
        display.value = 'Error, please reload page';
      }
    }
  }
  if (collate.includes("+")) {
    let result = Number(collate[0]) + Number(collate[2]);
    console.log(result);
    display.value = result;

    if (Number.isInteger(result) == false) {
      let rounded = result.toFixed(3);
      display.value = rounded;
      if (isNaN(result) == true) {
      display.value = 'Error, please reload page';
    }
    }

  }

  collate = [];

  // addition.addEventListener("click", subFunc(addThem));
  // division.addEventListener("click", subFunc('divd'));
  // subtraction.addEventListener("click", subFunc(subThem));
  // multiply.addEventListener("click", subFunc(mulThem));
}