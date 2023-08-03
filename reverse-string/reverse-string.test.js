const reverseStr = require("./reverse-string");

describe("reverseStr", () => {
  it("it should be a function", () => {
    expect(typeof reverseStr).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof reverseStr("hello")).toEqual("string");
  });
  it("should return the reversed string", () => {
    expect(reverseStr("hello")).toEqual("olleh");
    expect(reverseStr("apple")).toEqual("elppa");
    expect(reverseStr("wow")).toEqual("wow");
    expect(reverseStr("hello world")).toEqual("dlrow olleh")
  });
});
