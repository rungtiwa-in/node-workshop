// console.log('Hello Nodejs')

// ------------------------------------

// let a = 10
// let b = 20
// let c = a + b
// console.log(c)

// ------------------------------------
// --- Asynchronous ---

// const fs = require('fs');

// const input = fs.readFileSync('codecamp1.txt', 'utf-8')
// console.log(input)

// ------------------------------------
// --- Synchronous ---

// const fs = require('fs');

// const input = fs.readFile('codecamp1.txt', 'utf-8', (err, data) => {
//   console.log(data)
// });

// console.log("Reading file...")

// ------------------------------------
// --- Synchronous ---

// const fs = require('fs');

// for (let i = 0; i < 10; i++) {
//     const input1 = fs.readFile('codecamp1.txt', 'utf-8', (err, data) => {
//         console.log(data)
//     })

//     const input2 = fs.readFile('codecamp2.txt', 'utf-8', (err, data) => {
//         console.log(data)
//     })
// }

// ------------------------------------
// --- Promise ---

// function printLog(input, millisec) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log(input) 

//             if (input === 'c') {
//                 reject()
//             }
//             resolve()
//         }, millisec)
//     })
//         .then(() => {
//             console.log('.then 1')
//         })
//         .then(() => {
//             console.log('.then 2')
//         })
//         .catch(()=>{
//             console.log('error')
//         });

// }

// (async () => {
//     await printLog('a', 1000)
//     await printLog('b', 1000)
//     await printLog('c', 1000)
// })();

// ------------------------------------

const fetch = require('node-fetch')
async function getUser() {
    try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(response.status)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

getUser()