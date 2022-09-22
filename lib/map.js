const { curry } = require("./curry");
const { reduce } = require("./reduce");

const map = curry((fn, functor) => {
  switch (Object.prototype.toString.call(functor)) {
    // TODO: add transducer case
    case "[object Object]":
      return reduce(
        (acc, key) => {
          acc[key] = fn(functor[key], key);
          return acc;
        },
        {},
        Object.keys(functor)
      );
    default:
      return functor.map(fn);
  }
});

module.exports = {
  map,
};
