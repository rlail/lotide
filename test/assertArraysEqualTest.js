const assertArraysEqual = require('../assertArraysEqual')

// Test cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Assertion Passed
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Assertion Failed