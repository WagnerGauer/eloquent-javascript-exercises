// First
for (let string = ""; string.length <= 7; string += "#") {
  console.log(string);
}

// Second
for (let count = 1; count <= 100; count++) {
  if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}

// Third

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
