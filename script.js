'use strict'

document.addEventListener('DOMContentLoaded', addButtonListeners());

let displayInputElement = document.getElementById('display-input');
let displayPreviewElement = document.getElementById('display-preview');

function addButtonListeners() {
    let calculatorButtons = Array.from(document.getElementsByClassName('button'));

    for(let button of calculatorButtons) {
        if(button.classList.contains('number')) {
            button.addEventListener('click', (e) => updateInputDisplay(e.target.getAttribute('value')));
        } else if(button.classList.contains('operation')) {
            if(button.getAttribute('id') === 'equals') {
                button.addEventListener('click', (e) => operate(`${displayPreviewElement.innerText} ${displayInputElement.innerText}`))
            } else {
                button.addEventListener('click', (e) => updatePreviewDisplay(displayInputElement.innerText, e.target.getAttribute('value')))
            }
        } else if(button.classList.contains('action')) {
            if(button.getAttribute('id') === 'clear') {
                button.addEventListener('click', (e) => clearDisplay());
            }
            else {
                button.addEventListener('click', (e) => deleteFromDisplay());
            }
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

function updatePreviewDisplay(num1, operation) {
    if(displayPreviewElement.innerText !== '' && displayInputElement.innerText) {
        displayPreviewElement.innerText = `${displayInputElement.innerText} ${operation}`;
    } else {
        displayPreviewElement.innerText = `${num1} ${operation}`;
    }
    displayInputElement.innerText = 0;
}

function clearDisplay() {
    displayInputElement.innerText = 0;
    displayPreviewElement.innerText = '';
}

function deleteFromDisplay() {
    let deletedDisplayInput = displayInputElement.innerText.split('');
    deletedDisplayInput.pop();
    deletedDisplayInput.length > 0 ? displayInputElement.innerText = deletedDisplayInput.join('') : displayInputElement.innerText = 0;
    
}

function operate(partialOperationString) {
    displayPreviewElement.innerText = partialOperationString;
    
    let operationArray = partialOperationString.split(' ');
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
