const { identity } = require("./common");
const { reduce } = require("./reduce");

const _compose2 =
  (f, g) =>
  (...args) =>
    f(g(...args));

const compose = (...fns) => reduce(_compose2, identity, fns);

module.exports = {
  compose,
};
