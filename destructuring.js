const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}
//if right side is an object, left side of destructing will be object as well 
// use property name as variable that contains the property value
// const {phone}= actor;
// const {phone, age}= actor;
const { phone, age: boyos } = actor;

// without destructuring
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
// console.log(age);
// console.log(age);
// console.log(age);
console.log(boyos);


// array destructuring.
const numbers = [45, 99];
const [first, second] = numbers;
console.log(first, second);
const [x, y] = [12, 66];
console.log([x]);
console.log([y]);
console.log([x, y]);

// advanced
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [] = doubleThem(6, 9);
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
