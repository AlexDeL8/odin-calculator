'use strict'

class Calculator {
  constructor() {
    
  }

  add(a, b) {
    return a + b;
  };

  subtract(a, b) {
    return a - b;
  };

  multiply(a, b) {
    return a * b;
  };

  power(base, exponent) {
    if(exponent === 0) return 1;
    
    let final = base;
    while(exponent > 1) {
      final *= base;
      exponent--;
    }
    return final;
  };

  factorial(num) {
    if(num === 0 || num === 1) return 1;
    
    let sum = 1;
    while(num > 0) {
      sum *= num;
      num--;
    }
    return sum;
  };
}

module.exports = Calculator;