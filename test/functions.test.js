const { checkNumber, findMax, getStatus, switchExample, loopExample, strictEquality, specialPhrases1,specialPhrases2, specialPhrases3,isPrime, looseEquality } = require('../src/functions');

test('checkNumber and checkNumber2 should return "even" for even numbers', () => {
  expect(checkNumber(4)).toBe('even');
  expect(checkNumber2(4)).toBe('even');
});

test('checkNumber and checkNumber2 should return "odd" for odd numbers', () => {
    expect(checkNumber(3)).toBe('odd');
    expect(checkNumber2(3)).toBe('odd');
});

test('findMax should return the largest number, handle equal numbers', () => {
  expect(findMax(10, 20)).toBe(20);
  expect(findMax(20, 20)).toBe(20);
});

test('getStatus and getStatus2 should return "active" for status code 1, "pending" for 2, and "unknown" otherwise', () => {
  expect(getStatus(1)).toBe('active');
  expect(getStatus(2)).toBe('pending');
  expect(getStatus(5)).toBe('unknown');
  expect(getStatus2(1)).toBe('active');
  expect(getStatus2(2)).toBe('pending');
  expect(getStatus2(5)).toBe('unknown');
});

test('switchExample should categorize number ranges correctly, handle edge values', () => {
  expect(switchExample(5)).toBe('low');
  expect(switchExample(10)).toBe('medium');
  expect(switchExample(20)).toBe('high');
});

test('isPrime should correctly identify prime numbers', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(13)).toBe(true);
    expect(isPrime2(5)).toBe(true);
    expect(isPrime2(10)).toBe(false);
    expect(isPrime2(13)).toBe(true);
});

test('loopExample should sum numbers up to n, exclude 7', () => {
  expect(loopExample(5)).toBe(15);
  expect(loopExample(10)).toBe(48);
});

test('strictEquality should compare values strictly, test for different types', () => {
  expect(strictEquality(1, '1')).toBe(false);
  expect(strictEquality('true', true)).toBe(false);
  expect(strictEquality(true, true)).toBe(true);
});

test('loose equality should compare values loosely, test for different types', () => {
  expect(looseEquality(1, '1')).toBe(true);
  expect(looseEquality('1', 2)).toBe(false);
  expect(looseEquality('true', true)).toBe(true);
  expect(looseEquality(true, true)).toBe(true);
});

test('specialPhrases1 should handle nullish and falsy values, demonstrate fallback', () => {
  expect(specialPhrases1(null)).toBe('default');
  expect(specialPhrases1(undefined)).toBe('default');
  expect(specialPhrases1('')).toBe('');
  expect(specialPhrases1(0)).toBe(0);
  expect(specialPhrases1('test')).toBe('test');
});

test('specialPhrases2 should convert values to boolean', () => {
    expect(specialPhrases2(1)).toBe(true);
    expect(specialPhrases2('')).toBe(false);
    expect(specialPhrases2(0)).toBe(false);
    expect(specialPhrases2('test')).toBe(true);
    });


test('specialPhrases3 should return a if truthy, b otherwise', () => {
    expect(specialPhrases3('a', 'b')).toBe('a');
    expect(specialPhrases3('', 'b')).toBe('b');
    expect(specialPhrases3(0, 'b')).toBe('b');
    expect(specialPhrases3('test', 'b')).toBe('test');
    });