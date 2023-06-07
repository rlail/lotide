const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

//Test cases for middle
assertArraysEqual(middle([1]), []); //Assertion Passed
assertArraysEqual(middle([1, 2]), []); //Assertion Passed
assertArraysEqual(middle([1, 2, 3]), [2]); //Assertion Passed