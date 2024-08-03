//5.Write a program to find the second largest element in an array
const arr = ["23", "43", "45", "63"];
arr.sort((a, b) => a - b);
const secondLargest = arr[arr.length - 2];
alert(`secondLargest value of this array is ${secondLargest}`);
