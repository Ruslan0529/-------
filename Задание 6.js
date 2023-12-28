let arr = [1, 1, 1];

let isAllSame = arr.every((val, i, arr) => val === arr[0]);

console.log(isAllSame);