const { compose } = require("../lib/compose");

const coolify = compose(
  (x) => x.toUpperCase() + " (last step)",
  (x) => `${x} + modified`,
  (x, y) => `${x} <=> ${y}`
);

console.log(coolify("param 1", "param 2")); // PARAM 1 <=> PARAM 2 + MODIFIED  (last step)
