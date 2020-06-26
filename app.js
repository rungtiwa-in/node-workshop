// console.log('Hello Nodejs')

// ------------------

// let a = 10
// let b = 20
// let c = a + b
// console.log(c)

// ------------------

const fs = require('fs');

const input = fs.readFileSync('codecamp.txt', 'utf-8');
console.log(input)