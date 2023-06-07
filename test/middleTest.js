const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
  it("returns 'middle' for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns 'middle' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 'middle' for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});