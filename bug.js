function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause issues if a or b is actually 0
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: 0
console.log(foo(0, 5)); // Output: 0, which is wrong