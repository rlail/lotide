const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: When the array has one element
arr = [1];
result = tail(arr);
assertEqual(result.length, 0); // Expected output: Assertion Passed

// Test Case 3: When the array is empty
arr = [];
result = tail(arr);
assertEqual(result.length, 0); // Expected output: Assertion Passed
