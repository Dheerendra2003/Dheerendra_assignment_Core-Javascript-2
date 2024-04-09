const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  calculate: function (operation, a, b) {
    if (operation === "add") {
      return this.add(a, b);
    } else if (operation === "subtract") {
      return this.subtract(a, b);
    } else if (operation === "multiply") {
      return this.multiply(a, b);
    }
  },
};

const additionResult = calculator.calculate.call(calculator, "add", 6, 7);
console.log("Addition Result : " + additionResult);

const multiplicationResult = calculator.calculate.apply(calculator, [
  "multiply",
  5,
  9,
]);
console.log("Multiply Result : " + multiplicationResult);

const discountCalculator = {
  discountPercentage: 10,
  applyDiscount: function (amount) {
    return amount - (amount * this.discountPercentage) / 100;
  },
};
const calculateDiscount =
  discountCalculator.applyDiscount.bind(discountCalculator);
const discountedAmount = calculateDiscount(100);
console.log("Discounted Amount : " + discountedAmount);

/**Addition Result : 13
Multiply Result : 45
Discounted Amount : 90 */
