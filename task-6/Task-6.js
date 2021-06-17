// Task - 6 Himanshi Arora

//---------------Program 1 ------------------------
console.log("WAP in js to check if a given Year is a leap year");

let year = prompt("Enter the year");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  alert("Leap year");
} else {
  alert("Not a leap year");
}


//---------------Program 2 ------------------------
console.log(
  "WAP in js for performing arithmetic operation on 2 number according to input operator"
);
var op = prompt(
  "Enter any of the following operator ('+', '-', '', '/', '%', '*'): "
);
var a = 5;
var b = 2;
if (op == "+") {
  var c = a + b;
  alert(c);
} else if (op == "-") {
  var c = a - b;
  alert(c);
} else if (op == "*") {
  var c = a * b;
  alert(c);
} else if (op == "%") {
  var c = a % b;
  alert(c);
} else if (op == "**") {
  var c = a ** b;
  alert(c);
  oka;
} else {
  var c = a / b;
  alert(c);
}


//---------------Program 3 ------------------------
console.log("WAP in js to Pass a Function as Parameter");
function prog(value) {
  alert(`Hello ${value}`);
}
prog("Himanshi");


//---------------Program 4 ------------------------
console.log("WAP in js to merge two Arrays and remove Duplicate Items");
function merge(arr1, arr2) {
  let final_array = [];
  let arr = arr1.concat(arr2);
  let len = arr.length;
  let a = {};

  while (len--) {
    let ele = arr[len];

    if (!a[ele]) {
      final_array.unshift(ele);
      a[ele] = true;
    }
  }

  return final_array;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 2, 98, 21, 6, 3];
console.log(merge(arr1, arr2));