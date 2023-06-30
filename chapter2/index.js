// First
// Mine
for (let string = ""; string.length <= 7; string += "#") {
  console.log(string);
}
// Solution
for (let line = "#"; line.length < 8; line += "#") console.log(line);

// Second ==============================================
// Mine
for (let count = 1; count <= 100; count++) {
  if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}

// Solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// Third =============================================
// Mine
const generateGrid = (size) => {
  let grid = "";

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      let row = "";
      for (let rowIteraton = 1; rowIteraton <= size; rowIteraton++) {
        if (rowIteraton % 2 === 0) {
          row += "#";
        } else {
          row += " ";
        }
        if (rowIteraton === size) {
          grid += row += "\n";
        }
      }
    } else {
      let row = "";
      for (let rowIteraton = 1; rowIteraton <= size; rowIteraton++) {
        if (rowIteraton % 2 === 0) {
          row += " ";
        } else {
          row += "#";
        }
        if (rowIteraton === size) {
          grid += row += "\n";
        }
      }
    }
  }

  console.log(grid);
};

generateGrid(8);

// Solution:
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
