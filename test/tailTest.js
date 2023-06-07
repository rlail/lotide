const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns 'tail' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns 'tail' for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns 'tail' for []", () => {
    assert.deepEqual(tail([]), []);
  });
});