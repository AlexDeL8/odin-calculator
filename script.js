'use strict'

// import {calculator} from './calculator.js'

document.addEventListener('DOMContentLoaded', addButtonListeners());

let displayInputElement = document.getElementById('display-input');
let displayPreview = document.getElementById('display-preview');

function addButtonListeners() {
    let calculatorButtons = Array.from(document.getElementsByClassName('button'));

    for(let button of calculatorButtons) {
        if(button.classList.contains('number')) {
            button.addEventListener('click', (e) => updateInputDisplay(e.target.getAttribute('value')));
        } else if(button.classList.contains('operation')) {
            button.addEventListener('click', (e) => console.log('operation'));
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

function updatePreviewDisplay(num1, operation) {

}

function operate(num1, num2, operation) {

}
