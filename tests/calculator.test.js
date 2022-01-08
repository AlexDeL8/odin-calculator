const Calculator = require('../calculator.js');

let calculator = new Calculator();

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.multiply(2,4)).toBe(8);
	});

	test('multiplies by 0', () => {
		expect(calculator.multiply(2,0)).toBe(0);
	});
});

describe('power', () => {
	test('raises one number to the power of another number', () => {
		expect(calculator.power(4,3)).toBe(64); // 4 to third power is 64
	});

    test('raises one number to the power 1', () => {
		expect(calculator.power(4,1)).toBe(4); // 4 to third power is 64
	});

    test('raises one number to the power 0', () => {
		expect(calculator.power(4,0)).toBe(1); // 4 to third power is 64
	});
});

describe('factorial', () => {
	test('computes the factorial of 0', () => {
		expect(calculator.factorial(0)).toBe(1); // 0! = 1
	});

	test('computes the factorial of 1', () => {
		expect(calculator.factorial(1)).toBe(1);
	});

	test('computes the factorial of 2', () => {
		expect(calculator.factorial(2)).toBe(2);
	});

	test('computes the factorial of 5', () => {
		expect(calculator.factorial(5)).toBe(120);
	});

	test('computes the factorial of 10', () => {
		expect(calculator.factorial(10)).toBe(3628800);
	});
});
