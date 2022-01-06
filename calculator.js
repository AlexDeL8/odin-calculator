'use strict'

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function power(base, exponent) {
  let final = base;
  while(exponent > 1) {
    final *= base;
    exponent--;
  }
  return final;
};

function factorial(num) {
  if(num === 0 || num === 1) {
    return 1;
  } else {
    let sum = 1;
    while(num > 0) {
      sum *= num;
      num--;
    }
    return sum;
  }
};

export default {
    add,
    subtract,
    multiply,
    power,
    factorial
};