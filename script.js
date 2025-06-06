const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers);


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);

console.log(sum);
 

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

const numbers = [3, 7, 10, 15];

const found = numbers.find(function(num) {
  return num > 8;
});

console.log(found);

const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(function(num) {
  return num % 2 === 0;
});

console.log(hasEven);

const numbers = [2, 4, 6, 8];

const allEven = numbers.every(function(num) {
  return num % 2 === 0;
});

console.log(allEven);
