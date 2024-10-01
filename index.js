// Function that takes a callback and calls it
function receivesAFunction(callback) {
  callback(); // Call the provided callback function
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
      console.log("I am a named function!");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
      console.log("I am an anonymous function!");
  };
}

// Exporting the functions so they can be tested
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
