const { curry } = require("./curry");

const reduce = curry((fn, initialValues, data) => {
  switch (Object.prototype.toString.call(data)) {
    case "[object Object]":
      return Object.values(data).reduce(fn);
    default:
      return data.reduce(fn, initialValues);
  }
});

module.exports = {
  reduce,
};
