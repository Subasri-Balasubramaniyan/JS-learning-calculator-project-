function calculate() {
  // Get input values
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  // Conditional statements + operators
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    // Prevent division by zero
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0!";
  } else {
    result = "Invalid operation";
  }

  // Show result
  document.getElementById("result").innerText = "Result: " + result;
}
