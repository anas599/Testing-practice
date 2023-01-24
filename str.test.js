const {
  stringLength,
  reverseString,
  calculator,
  capitalize,
} = require("./index.js");

test("string length should be more than 1 and less than 10", () => {
  expect(stringLength("123456790")).toBe(true);
});

test("capitalize letter", () => {
  expect(capitalize("anas sufyan")).toBe('Anas Sufyan');
});

test("string is reversed", () => {
  expect(reverseString("anas")).toBe("sana");
});

describe('calclator',()=>{
    test('add function',()=>{
        expect(calculator.add(1,1)).toBe(2)
    })
    test('add function',()=>{
        expect(calculator.add(12,10)).toBe(22)
    })
    test('add function',()=>{
        expect(calculator.add(64,64)).toBe(128)
    })
})
describe('calclator',()=>{

    test('subtract function',()=>{
        expect(calculator.subtract(3,2)).toBe(1)
    })
    test('subtract function',()=>{
        expect(calculator.subtract(0,0)).toBe(0)
    })
    test('subtract function',()=>{
        expect(calculator.subtract(3,4)).toBe(-1)
    })
})
describe('calclator',()=>{

    test('divide function',()=>{
        expect(calculator.divide(2,2)).toBe(1)
    })
    test('divide function',()=>{
        expect(calculator.divide(100,5)).toBe(20)
    })
    test('divide function',()=>{
        expect(calculator.divide(10,2)).toBe(5)
    })
})
// final task
describe("calclator", () => {
  test("multiply function", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test("multiply function", () => {
    expect(calculator.multiply(100, 5)).toBe(500);
  });
  test("multiply function", () => {
    expect(calculator.multiply(1000, 1)).toBe(1000);
  });
});