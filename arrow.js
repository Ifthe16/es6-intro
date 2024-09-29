// function declaration
// function add(a, b) {
//     const result = a + b;
//     return result;
// }
function add(a, b) {
    const result = a + b;
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}
const sum = add2(2, 3);
console.log(sum);

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

const sum2 = add3(5, 93);
const sum3 = add4(4, 5, 6, 7);
console.log(sum2);
console.log(sum3);
const mult = multiply(3, 12);
console.log(mult);