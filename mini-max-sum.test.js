let miniMaxSum = require("./mini-max-sum");

describe("testing miniMaxSum", () => {
  it("should find minimum and maximum sum of the array", () => {
    const array = [1, 3, 5, 7, 9];
    expect(miniMaxSum(array)).toEqual(console.log(16, 24));
  });
});

// [1, 2, 3, 4, 5]
// console.log(10, 24)

// toEqual
// toBe
