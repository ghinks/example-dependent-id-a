const tap = require("tap")
const example = require("./index");


tap.test( tap => {
  const testValue = "x"
  tap.equal(example({ text: testValue} ), testValue)
  tap.equal(example({ text: undefined}), "a")
  tap.end()
})
