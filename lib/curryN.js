const curryN = (n, fn) => {
  const curried = (...args) => {
    if (args.length >= n) {
      return fn(...args);
    }
    return (...newArgs) => curried(...args, ...newArgs);
  };

  return curried;
};

module.exports = {
  curryN,
};
