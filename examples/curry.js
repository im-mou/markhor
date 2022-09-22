const { curry } = require("../lib/curry");

const add = curry((a, b, c) => a + b + c);

console.log(add(1, 1, 1)); // 3
console.log(add(1, 1)(1)); // 3
console.log(add(1)(1, 1)); // 3
console.log(add(1)(1)(1)); // 3
