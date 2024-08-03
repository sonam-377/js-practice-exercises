//3.Write a program to find the maximum and minimum value of an array
// const arr = ["1", "2", "81", "100000", "3400000"];
// arr.sort((a, b) => a - b); // Sort the array in ascending order

// const minVal = arr[0];
// const maxVal = arr[arr.length - 1];

// console.log(`Min: ${minVal}, Max: ${maxVal}`);

const arr = ["5600", "45000", "1", "2", "2000000"];
arr.sort((a, b) => a - b);
const minValue = arr[0];
const maxValue = arr[arr.length - 1];
alert(`min: ${minValue} max:${maxValue}`);
