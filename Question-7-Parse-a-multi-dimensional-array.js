var seven = totalAmountOfIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalAmountOfIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += totalAmountOfIntegers(array[i]);
    } else if (typeof array[i] === "number") {
      total++;
    }
  }
  return total;
}

console.log(seven);
