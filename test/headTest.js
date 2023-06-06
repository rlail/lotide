const assertEqual = require('../assertEqual')
const head = require('../head')

// Test cases
assertEqual(head([5, 6, 7]), 5); // Assertion Passed: 5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Assertion Passed: Hello === Hello