const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterCount = {};
  let letters = sentence.replace(/ /g,'');
  for (let letter of letters) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  }
  return letterCount;
};

const words = ["LHL", "Hello, World!"]

let obj1 = countLetters("lighthouse in the house")
console.log(Object. keys(obj1). length)
console.log(obj1)
let obj = countLetters("LHL");
assertEqual(Object.values(obj)[0], 2); //Only for L's in LHL
assertEqual(Object.values(obj)[1], 1); //Only for H's in LHL
assertEqual(Object. keys(obj1). length, 10) //For entire lighthouse in the house

module.exports = countLetters