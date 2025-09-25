🧮 Simple Calculator – JavaScript Project
📌 Overview

This is a beginner-friendly JavaScript Calculator project that allows users to perform basic arithmetic operations (Addition, Subtraction, Multiplication, Division) between two numbers.

It demonstrates the use of variables, data types, operators, functions, and conditional statements in JavaScript.

🚀 Features

Input two numbers

Choose an operator (+, −, ×, ÷)

Perform calculation on button click

Prevents division by zero

Clean and simple UI with CSS styling

🛠️ Technologies Used

HTML → Structure of the calculator

CSS → Styling and layout

JavaScript → Functionality and logic

📂 Files

index.html → Main HTML file

style.css → Styles for the calculator

script.js → JavaScript logic

💻 How It Works

User enters two numbers.

Selects an operator from the dropdown.

Clicks Calculate.

JavaScript function processes the inputs using if-else conditions and operators.

The result is displayed on the screen.

📝 Example Code
function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0!";
  } else {
    result = "Invalid operation";
  }

  document.getElementById("result").innerText = "Result: " + result;
}

📖 Concepts Covered

Variables → storing inputs

Data Types → numbers, strings

Operators → +, -, *, /

Functions → reusable calculate() function

Conditional Statements → handling different operators
