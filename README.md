Calculator Application

This repository contains a simple calculator application built using JavaScript, HTML, and CSS. The application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.
Features

    Perform basic arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/).
    Clear the display.
    View the calculation result.

Getting Started

To get a local copy of the project up and running, follow these steps.
Prerequisites

Ensure you have the following installed:

    A modern web browser (e.g., Chrome, Firefox, Edge)
    Basic knowledge of HTML, CSS, and JavaScript

Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/calculator-app.git

Navigate to the project directory:

sh

    cd calculator-app

    Open index.html in your web browser to view the application.

Usage

The calculator application consists of a display and a set of buttons for digits and operators.

    Numbers: Click on the number buttons (0-9) to input values.
    Operators: Click on the operator buttons (+, -, *, /) to perform operations.
    Equals: Click the "=" button to calculate the result.
    Clear: Click the "C" button to clear the display and result.

JavaScript Functionality

The core functionality is implemented in JavaScript as follows:

    Calculator Function: The calculator function takes two numbers and an operator as arguments and returns the result of the operation.

    javascript

function calculator(num1 , num2 , operator){
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            break;
    }
}

Event Listeners: Event listeners are added to the number and operator buttons to handle user interactions and update the display and result.

javascript

/* Event listeners for numbers */
calc_button.forEach(button=>{
    button.addEventListener("click",function(e){
        let value = e.target.innerText;
        let display = document.querySelector(".calc-pre-display");
        display.innerHTML += value;
    });
});

/* Event listeners for Operators */
calc_button_operator.forEach(button=>{
    button.addEventListener("click",function(e){
        let value = e.target.innerText;
        let display = document.querySelector(".calc-pre-display");
        let answer = document.querySelector(".calc-result-display");
        let nums = display.innerHTML.split(/[+|\-|*|\/]/);
        if(value != "=" && value != "C"){
            if (nums.length > 1)
            {
                display.innerHTML = calculator(parseInt(nums[0]),parseInt(nums[1]),operator) + value;
            }
            else display.innerHTML += value; 
            operator = value;
        }
        if (value == "="){
            answer.innerHTML = calculator(parseInt(nums[0]),parseInt(nums[1]),operator);
        }
        if (value == "C"){
            display.innerHTML = "";
            answer.innerHTML = "";
        }        
    });
});
