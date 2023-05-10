const { stringLength, reverseString, Calculator, capitalize } = require('./index.js');

test('stringLength returns the correct length of a string', () => {
    expect(stringLength('wherever')).toBe(8);
    expect(stringLength('Hi')).toBe(2);
    expect(stringLength('   ')).toBe(3);
    expect(stringLength('Hello!')).toBe(6);
});

test('stringLength throws an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow('The string cannot be empty');

});

test('stringLength throws an error if the string is too long', () => {
    expect(() => stringLength('Hello Ruben')).toThrow('The string cannot have more than 10 characters');
});

test('stringLength returns the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('12345')).toBe(5);
});

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverseString returns an empty string when given an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString reverses a string with one character', () => {
    expect(reverseString('a')).toBe('a');
});

test('reverseString reverses a string with multiple characters', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds a positive and a negative number', () => {
            expect(calculator.add(-2, 3)).toBe(1);
        });

        test('adds two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        test('subtracts a smaller positive number from a larger positive number', () => {
            expect(calculator.subtract(10, 3)).toBe(7);
        });

        test('subtracts a positive number from a negative number', () => {
            expect(calculator.subtract(-2, 3)).toBe(-5);
        });

        test('subtracts two negative numbers', () => {
            expect(calculator.subtract(-2, -3)).toBe(1);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        test('multiplies a positive and a negative number', () => {
            expect(calculator.multiply(-2, 3)).toBe(-6);
        });

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });
    });

    describe('divide', () => {
        test('divides a positive number by a smaller positive number', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        test('divides a negative number by a positive number', () => {
            expect(calculator.divide(-10, 2)).toBe(-5);
        });

        test('throws an error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });
});

test('capitalize capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});