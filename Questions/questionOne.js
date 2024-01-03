function sumRange(n) {
  if (n === 1) {
    return 1;
  } else {
    return sumRange(n - 1) + n;
  }
}

console.log(sumRange(7));
