const palindrome = require("./palindrome");

describe("palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });
  it("should return true if it is a palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
  });
  it("should return false if it is not a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("developer")).toBeFalsy();
    expect(palindrome("today")).toBeFalsy();
  });
  it("should return false if includes spaces", () => {
    expect(palindrome("race car")).toBeFalsy();
    expect(palindrome(" wow")).toBeFalsy();
  });
});
