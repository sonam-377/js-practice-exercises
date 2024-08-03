//1. Write an array to sum values of an array.

const arr = ["2", "3", "4", "5"];

const result = arr.reduce((sum, currentValue) => sum + Number(currentValue));

alert(`${result}`);
