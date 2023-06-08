# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rlail/lotide`

**Require it:**

`const _ = require('@rlail/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`



## Documentation

The following functions are currently implemented:

* const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
}; 
: Compares arrays, actual and the expected. 
* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}; 
: Compares values, actual and the expected. 
* const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}; 
: Compares two objects, actual and the expected
* const countLetters = function(sentence) {
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
: Counts each letter in a sentence
* const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}
: Counts all the items 
* const eqArrays = function(array1, array2) {
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
: Compares two Arrays
* const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
: Compares two objects 
* function findKey(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
}
: Searches for a key  that will be true for the object
* function findKeyByValue(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}
: Looks for a key that matches a value
* const flatten = function(array) {
  const flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};
: Flattens nested arrays
* const head = function(array) {
  return array[0];
};
: Returns the first element of an array
* const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
: Takes a string and returns each letter position
* const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
: Callback for each input in an array
* const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};
: Returns the middle of an array
* function tail(arr) {
  return arr.slice(1);
}
: Returns all elements but the first
* const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};
: Returns truthy elements of an array
* const without = function(source, itemsToRemove) {
  const filteredArray = source.filter(item => !itemsToRemove.includes(item));
  return filteredArray;
};
: Removes items from the original array 