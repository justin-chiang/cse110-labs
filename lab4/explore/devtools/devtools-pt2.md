# DevTools - Part 2

1. The bug was that the function calculateSum was taking in string inputs and adding them together, which results in a string concatenation of the two inputs.
2. I fixed it by using the parseInt() function on the two inputs to the function. This ensures that the string inputs are casted to ints so the calculateSum function will do integer arithmetic instead of string concatenation.
[Link to picture of fix](fix.png)