function foo(a, b) {
  if (a === null || a === 0 || b === null || b === 0) {
    // Handle null or zero appropriately, perhaps with default values or error handling
    if(a === null) a = 0;
    if(b === null) b = 0; 
    return a + b; 
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(0, 5)); // Output: 5
console.log(foo(5, null)); //Output: 5
console.log(foo(5, 0)); //Output: 5