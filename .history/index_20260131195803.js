function totalFunc() {
  collate.push(display.value);

  let num1 = Number(collate[0]);
  let operator = collate[1];
  let num2 = Number(collate[2]);
  let result;

  if (operator === "x") result = num1 * num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "/") result = num1 / num2;
  else if (operator === "+") result = num1 + num2;

  if (!isFinite(result)) {
    display.value = "Math Error";
  } else {
    display.value = Number.isInteger(result) ? result : result.toFixed(3);
  }

  collate = [];
}