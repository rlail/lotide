const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
assertEqual("Lighthouse Labs", "Bootcamp"); // Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // Assertion Passed: 1 === 1