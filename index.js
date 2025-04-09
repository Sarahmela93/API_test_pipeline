function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro !");
    }
    return a / b;
}

function absolute(n) {
    return Math.abs(n);
}

function square(n) {
    return n * n;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    absolute,
    square
};
