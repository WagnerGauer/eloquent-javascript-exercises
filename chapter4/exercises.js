// MINE THE SUM OF A RANGE
const range = (start, end, step = 1) => {
  const numArray = [];
  for (start; start <= end; start = start + step) {
    numArray.push(start);
  }
  return numArray;
};

const sum = (numArray) => {
  let count = 0;
  numArray.map((num) => {
    count = count + num;
  });
  return count;
};

console.log(range(5, 2, -1));
console.log(sum(range(1, 12, 2)));

// MINE REVERSING AN ARRAY

const reverseArray = (array) => {
  const newArray = [];
  array.map((element) => {
    newArray.unshift(element);
  });
  return newArray;
};

const reverseArrayInPlace = (array) => {
  console.log("called", array.length);
};

const nums = [1, 2, 3, 4, 5, 6];

console.log(reverseArray(range(1, 10)));

console.log(nums);

reverseArrayInPlace(nums);

console.log(nums);
