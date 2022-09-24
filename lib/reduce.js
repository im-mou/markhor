const { curry } = require("./curry");

const reduce = curry((fn, initialValues, data) => {
  switch (Object.prototype.toString.call(data)) {
    case "[object Object]":
      return Object.entries(data).reduce(
        (acc, [v, k]) => fn(acc, v, k),
        initialValues
      );
    default:
      return data.reduce(fn, initialValues);
  }
});

module.exports = {
  reduce,
};
