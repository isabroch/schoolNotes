const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  exponent: (x, y) => x ** y,
}

const [x, y] = [8, 2];

/* Calls every function inside the object and pass (x, y) */
console.log(x, y);

Object.values(calculator).map(key => {
  if (typeof key === 'function') {
    console.log(key, key.call(null, x, y))
  }
})


/* Manually call every calc function and pass (x, y) */
console.log(x, y);

console.log(calculator.add, calculator.add(x, y));
console.log(calculator.subtract, calculator.subtract(x, y));
console.log(calculator.multiply, calculator.multiply(x, y));
console.log(calculator.divide, calculator.divide(x, y));
console.log(calculator.exponent, calculator.exponent(x, y));