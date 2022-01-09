'use strict'

document.addEventListener('DOMContentLoaded', addButtonListeners());

let displayInputElement = document.getElementById('display-input');
let displayPreview = document.getElementById('display-preview');

function addButtonListeners() {
    let calculatorButtons = Array.from(document.getElementsByClassName('button'));

    for(let button of calculatorButtons) {
        if(button.classList.contains('number')) {
            button.addEventListener('click', (e) => updateInputDisplay(e.target.getAttribute('value')));
        } else if(button.classList.contains('operation')) {
            button.addEventListener('click', (e) => {
                if(e.target.getAttribute('id') === 'equals') {
                    operate(`${displayPreview.innerText} ${displayInputElement.innerText}`);
                } else {
                    updatePreviewDisplay(`${displayInputElement.innerText} ${e.target.getAttribute('value')}`);
                }
            });
        } else if(button.classList.contains('action')) {
            button.addEventListener('click', (e) => console.log('action'));
        }
    }
}

function updateInputDisplay(numberToDisplay) {
    //checks for decimal input and that only ONE decimal is allowed
    if(numberToDisplay === '.' && displayInputElement.innerText.includes('.')) {
        return;
    }
    if(displayInputElement.innerText === '0') {
        if(numberToDisplay === '0') {
            return;
        } else {
            numberToDisplay === '.' ? displayInputElement.innerText += numberToDisplay : displayInputElement.innerText = numberToDisplay;
            return;
        }
    }
    displayInputElement.innerText += numberToDisplay;
}

function updatePreviewDisplay(operationString) {
    displayPreview.innerText = operationString;
    displayInputElement.innerText = 0;
}

function operate(operationString) {
    console.log(operationString);
    displayPreview.innerText = operationString;
    
    let operationArray = operationString.split(' ');
    let num1 = Number.parseInt(operationArray[0]);
    let operation = operationArray[1];
    let num2 = Number.parseInt(operationArray[2]);
    switch(operation) {
        case "+":
            displayInputElement.innerText = add(num1, num2);
            break;
        case "-":
            displayInputElement.innerText = subtract(num1, num2);
            break;
        case "*":
            displayInputElement.innerText = multiply(num1, num2);
            break;
        case "/":
            displayInputElement.innerText = divide(num1, num2);
            break;
        case "^":
            displayInputElement.innerText = power(num1, num2);
            break;
        case "!":
            console.table(operationArray)
            // displayInputElement.innerText = factorial(num1); some special code needs to work so ! only needs 1 number
            break;
        default:
            console.log("Invalid operation");
    }
}

/* Math functions */
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function power(base, exponent) {
    if(exponent === 0) return 1;

    let final = base;
    while(exponent > 1) {
        final *= base;
        exponent--;
    }
    return final;
    };

function factorial(num) {
    if(num === 0 || num === 1) return 1;

    let sum = 1;
    while(num > 0) {
        sum *= num;
        num--;
    }
    return sum;
};
