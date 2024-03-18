function add() {
    return "something";
  }
  function add(a, b) {
    return a + b;
  }
//Subtraction

function subtract() {
    return "something";
  }
  function subtract(a, b) {
    return a - b;
  }

//Multiplication

function multiply() {
    return "something";
  }
  function multiply(a, b) {
    return a * b;
  }

// Division

function divide() {
    return "something";
  }
  function divide(a, b) {
    return a / b;
  }

// Increment

function increment(n){
    return (n +1);
  }
  
  function decrement(n) {
    return (n -1);
  }
  function makeInt(n) {
    // Check if n is a number
    if (typeof n !== 'number') {
      // If n is not a number, return NaN
      return NaN;
    }
  
    // Convert n to an integer using the floor function
    const parsedInteger = Math.floor(n);
  
    // Return the parsed integer
    return parsedInteger;
  }

  function preserveDecimal(n) {
    // Check if n is a number
    if (typeof n !== 'number') {
      // If n is not a number, return NaN
      return NaN;
    }
  
    // Convert n to a floating point number using the parseFloat function
    const parsedFloat = parseFloat(n.toFixed(2));
  
    // Return the parsed floating point number
    return parsedFloat;
  }