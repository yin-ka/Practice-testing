//task 1
function stringLength(string) {
    return string.length;
  }
  
  const assert = require('assert');

assert.strictEqual(stringLength('hello'), 5);
assert.strictEqual(stringLength(''), 0);
assert.strictEqual(stringLength('1234567890'), 10);

function stringLength(string) {
    const length = string.length;
    if (length < 1) {
      throw new Error('String must be at least 1 character long.');
    } else if (length > 10) {
      throw new Error('String must be no longer than 10 characters.');
    }
    return length;
  }
  
  assert.strictEqual(stringLength('hello'), 5);
assert.throws(() => { stringLength(''); }, Error);
assert.throws(() => { stringLength('12345678901'); }, Error);

//task 2
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  test('reverseString function reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
  });
  
//task 3
// import the calculator class or object
const Calculator = require('./calculator');

// describe the tests for the add method
describe('Calculator add method', () => {
  const calculator = new Calculator();

  test('adds two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test('adds a positive and a negative number', () => {
    expect(calculator.add(2, -3)).toBe(-1);
  });
});

// describe the tests for the subtract method
describe('Calculator subtract method', () => {
  const calculator = new Calculator();

  test('subtracts two positive numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test('subtracts two negative numbers', () => {
    expect(calculator.subtract(-3, -2)).toBe(-1);
  });

  test('subtracts a positive and a negative number', () => {
    expect(calculator.subtract(3, -2)).toBe(5);
  });
});

// describe the tests for the divide method
describe('Calculator divide method', () => {
  const calculator = new Calculator();

  test('divides two positive numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('divides two negative numbers', () => {
    expect(calculator.divide(-6, -2)).toBe(3);
  });

  test('divides a positive and a negative number', () => {
    expect(calculator.divide(6, -2)).toBe(-3);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });
});

// describe the tests for the multiply method
describe('Calculator multiply method', () => {
  const calculator = new Calculator();

  test('multiplies two positive numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('multiplies two negative numbers', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test('multiplies a positive and a negative number', () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });
});

//task 4
// Test
describe("capitalize", () => {
    it("should capitalize the first character of a string", () => {
      expect(capitalize("hello")).toEqual("Hello");
      expect(capitalize("")).toEqual("");
      expect(capitalize("hELLO")).toEqual("HELLO");
    });
  });
  
  // Implementation
  function capitalize(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
