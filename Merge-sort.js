function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 3, 5, 2, 4, 6]));

// Or I can just use sort() method and get the same thing done in a function with one line of code:
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([1, 3, 5, 2, 4, 6]));
