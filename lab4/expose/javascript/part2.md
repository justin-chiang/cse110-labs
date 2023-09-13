# JavaScript Intro - Part 2

1. "3" is printed. i is incremented while iterating through the prices array, and takes value of 3 at the end of the loop. i is also declared using var, which has function scope.
2. "150" is printed. On the last iteration of the for loop, discountedPrice is set to the last element in prices multiplied by the discount rate, which is 300 * 0.5 = 150. discountedPrice is also declared using var, which has function scope.
3. "150" is printed. On the last iteration of the for loop, finalPrice is set to the rounded number of discountedPrice multiplied 100, then divided by 100, which is 150 * 100 / 100 = 150. finalPrice is also declared using var, which has function scope.
4. The function returns an array containing [50, 100, 150]. For each value in the original prices array, the calculation for finalPrice is done and its value is pushed into the returned array.
5. The code causes an error because i is defined using let, which has scope within the loop but not outside of it.
6. The code causes an error because discountedPrice is defined using let within the for loop, which has scope within the loop but not outside of it.
7. "150" is printed. finalPrice is calculated to be 150 on the last iteration of the for loop, and is defined using let on the same scope as it is referenced in, so it is successfully printed.
8. The function returns an array containing [50, 100, 150]. The function keeps the same functionality, and the returned array discounted is defined using let on the same scope it is returned in, so it is successfully returned.
9. The code causes an error because i is defined using let, which cannot be referenced outside of its scope in the loop.
10. "3" is printed. length is defined using const and initialized to the length of prices, so it is successfully printed.
11. The function returns an array containing [50, 100, 150]. The function maintains its original functionality, and the returned array discounted is defined with const which has block scope, so it is successfully returned.
12. A. student.name

    B. student['Grad Year']

    C. student.greeting()

    D. student['Favorite Teacher'].name

    E. student.courseLoad[0]

13. A. 32. 2 is casted to a string, and concatenated to '3'.

    B. 1. '3' is casted to a number, and 2 is subtracted from it.

    C. 3. null has a numeric conversion to 0, and is added to 3.

    D. 3null. null is casted to a string, which is the string 'null', and concatenated to '3'.

    E. 4. true has a numeric conversion to 1, and is added to 3.

    F. 0. Both false and null have numeric conversions to 0, and are added together.

    G. 3undefined. undefined is casted to a string, which is the string 'undefined', and concatenated to '3'.

    H. NaN. undefined cannot be casted to a number and thus is NaN, which when used in arithmetic operations results in NaN.

14. A. true. '2' is converted to a number and compared to be greater than 1.

    B. false. The strings are compared lexicographically, so '12' is greater than '2'.

    C. true. '2' is converted to a number and compared for equality with 2.

    D. false. The === operator checks for equality without automatic type casting, and 2 and '2' are of different types.

    E. false. true is converted to 1 and compared for equality with 2.

    F. true. 2 is type casted to a boolean, and is casted to true as it is a non-zero number. It is then compared using the === operator to true.

15. The == operator checks for equality with automatic type conversion between different types. The === operator checks for strict equality without type conversion.
16. [Link to JavaScript file](part2-question16.js)
17. The function returns an array containing [2, 4, 6]. modifyArray takes in an array and a callback function, and returns an array which contains the values of applying the callback function to every element in the original array. doSomething is a function that multiplies its input by 2. Passing in [1, 2, 3] and doSomething to modifyArray applies doSomething to each element in the array, resulting in [2, 4, 6].
18. [Link to JavaScript file](part2-question18.js)
19. "1, 4, 3, 2" is printed.