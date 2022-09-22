const { map } = require("../lib/map");

const doubler = map((value) => value * 2);

console.log(doubler([1, 2, 3])); // [ 2, 4, 6 ]
console.log(doubler({ a: 5, b: 10, c: 15 })); // { a: 10, b: 20, c: 30 }
