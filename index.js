const alpha = require("@gvhinks/example-dependency-id-a");

const example = (value) => {
  const result = alpha(value);
  return result;
}

module.exports = example;
