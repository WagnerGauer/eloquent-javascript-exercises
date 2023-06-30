// Interesting content

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    console.log(count, result);
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(5);

const findSolution = (target) => {
  const find = (current, history) => {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  };
  return find(1, "1");
};

console.log(findSolution(48));

// Exercises ================================================================

// Exercise 1
// Mine
const minMine = (val1, val2) => {
  if (val1 < val2) {
    return val1;
  } else {
    return val2;
  }
};

//Solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(90, 45));

// Exercise 2 ============================================================
// Mine
const revertToPositive = (val) => {
  return (val = (val * -2) / 2);
};

const isEvenMine = (val) => {
  if (val < 0) {
    val = revertToPositive(val);
  }

  if (val === 1) {
    return false;
  } else if (val === 0) {
    return true;
  } else {
    return isEven(val - 2);
  }
};

// solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(-441));

// Exercise 3 =========================================
// Mine
const countBsMine = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }
  return count;
};
console.log(countBsMine("BBBBsdfsdfs"));

const countChars = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
};

// Solution
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countChars("sshdfsoo", "s"));
