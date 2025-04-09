const { add, subtract, multiply, divide, absolute, square } = require('./index');

test('Addition : 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('Soustraction : 5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('Multiplication : 4 * 3 = 12', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('Division : 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('Division par zéro : doit lever une erreur', () => {
    expect(() => divide(10, 0)).toThrow("Division par zéro !");
});

test('Valeur absolue : |-5| = 5', () => {
    expect(absolute(-5)).toBe(5);
});

test('Carré : 4² = 16', () => {
    expect(square(4)).toBe(16);
});
