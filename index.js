function stringLength(string) {
    if (string.length === 0) {
        throw new Error('The string cannot be empty');
    }
    if (string.length > 10) {
        throw new Error('The string cannot have more than 10 characters');
    }
    return string.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    stringLength,
    reverseString,
    Calculator,
    capitalize
};