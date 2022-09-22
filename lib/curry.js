const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...newArgs) => curried(...args, ...newArgs);
  };

  return curried;
};

module.exports = {
  curry,
};
