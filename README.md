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

* assertArraysEqual : Compares arrays, actual and the expected. 
* assertEqual : Compares values, actual and the expected. 
* assertObjectsEqual : Compares two objects, actual and the expected
* countLetters : Counts each letter in a sentence
* countOnly : Counts all the items 
* eqArrays : Compares two Arrays
*  eqObjects : Compares two objects 
* findKey : Searches for a key  that will be true for the object
* findKeyByValue : Looks for a key that matches a value
* flatten : Flattens nested arrays
* head : Returns the first element of an array
* letterPositions : Takes a string and returns each letter position
* map : Callback for each input in an array
*  middle : Returns the middle of an array
* tail : Returns all elements but the first
* takeUntil : Returns truthy elements of an array
* without : Removes items from the original array 
