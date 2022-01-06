'use strict'

// import {calculator} from './calculator.js'

document.addEventListener('DOMContentLoaded', addButtonListeners());
let displayInputElement = document.getElementById('display-input');

function addButtonListeners() {
    let calculatorButtons = Array.from(document.getElementsByClassName('button'));

    for(let button of calculatorButtons) {
        console.log(button);
        if(button.classList.contains('number')) {
            button.addEventListener('click', (e) => inputNumberToDisplay(e.target.getAttribute('value')))
        }
    }
}

function inputNumberToDisplay(numberToDisplay) {
    //checks for decimal input and that only ONE decimal is allowed
    //TODO HERE
    if(numberToDisplay === '.') {
        if(displayInputElement.innerText.includes('.')) {
            return;
        } else if(displayInputElement.innerText === '') {
            displayInputElement.innerText += '0'
        }
    }
    displayInputElement.innerText += numberToDisplay;
}
