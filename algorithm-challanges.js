// PROBLEM 1 Basic Algorithm Scripting: Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = ((9/5) * celsius + 32);
  return fahrenheit;';'
}

convertToF(30);



// PROBLEM 2 Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
  var splitString = str.split('');
  var reversed = splitString.reverse();
  var new_string = reversed.join("");
  return new_string;
}

reverseString("hello");



// PROBLEM 3 Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);
  }

factorialize(10);

// Alternate Solution

function factorialize(num) {
  var cloud = 1;

  for (var i=2; i<=num; i++) {
    cloud *= i;
  }
  return cloud;
}

factorialize(1);


    //****************************************
// PROBLEM 4 Basic Algorithm Scripting: Slice and Splice

function frankenSplice(arr1, arr2, n) {
    var arr2Copy = arr2.slice();

    for (var i = 0; i < arr1.length; i++) {
        arr2Copy.splice(n+i, 0, arr1[i]);
    }
    return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



// PROBLEM 5 Basic Algorithm Scripting: Repeat a String Repeat a String

// First solution i came up with, but using built in repeat() method

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  return (str.repeat(num));
}

// soultion not using repeat() method

function repeatStringNumTimes(str, num) {
  var repeatedStr = "";
  while (num > 0) {
   repeatedStr+=str;
   num-=1;
  }
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);


// Basic Algorithm Scripting: BooWho

function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;
}

booWho(null);




// Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);



// Basic Algorithm Scripting: Finders Keepers

function findElement(arr, func) {
  let num = 0;

  for (var i=0; i<arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}




findElement([1, 2, 3, 4], num => num % 2 === 0);

