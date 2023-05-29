const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

// Test case 1: Return the length of each word
const results1 = map(words, word => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

// Test case 2: Convert each word to uppercase
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test case 3: Return the first letter of each word
const results3 = map(words, word => word[0]);
assertArraysEqual(results3, ["g", "c", "t", "m", "t"]);

// Test case 4: Double each number in the array
const numbers = [1, 2, 3, 4, 5];
const results4 = map(numbers, num => num * 2);
assertArraysEqual(results4, [2, 4, 6, 8, 10]);

// Test case 5: Check if each word contains the letter "o"
const results5 = map(words, word => word.includes("o"));
assertArraysEqual(results5, [true, true, true, false, true]);