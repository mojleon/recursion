function all(arr, fun) {
  return arr.every(fun);
}

let allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven);
