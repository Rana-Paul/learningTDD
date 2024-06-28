const { expect, test } = require("@jest/globals");
const add = require("../functions/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number for a single number string", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws an exception for negative numbers", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});
