# Unexpected Behavior in Addition Function with Null and Zero Values
This repository demonstrates a subtle bug in a JavaScript function that incorrectly handles null and zero values as parameters. The function `foo` is intended to add two numbers, but it mistakenly treats null and zero values as equivalent, resulting in unexpected output.

The `bug.js` file contains the buggy code, and `bugSolution.js` shows the corrected implementation.  This bug highlights the importance of careful consideration when dealing with null, undefined, and zero values to avoid unintended consequences.

## Bug Description
The `foo` function uses a loose comparison (`===`) to check for null values. While this works correctly for detecting null, it also incorrectly treats the value 0 as equivalent to null, leading to incorrect results when 0 is passed as an argument.

## Solution
The solution is to modify the conditional check to explicitly compare against both null and 0 to handle these values correctly. The corrected version in `bugSolution.js` uses strict equality to correctly differentiate between null, 0, and other values.