const readline = require("readline");

/** 
 * NOTE
 * Program ini dibuat dengan javascript yang dijalankan oleh NodeJS
 * 
 * NodeJS sendiri berjalan diatas event loop yaitu sati trheat yang tidak bisa mengunggu.
 * Jika program ini dipaksaa untuk menunggu input, event loop akan mati dan program tidak bisa lanjut
 * 
 * Oleh karena itu untuk membaca input dan memberikan output (I/O) pada NodeJS ini dibuat async
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ask = (question) => new Promise((resolve) => rl.question(question, resolve))