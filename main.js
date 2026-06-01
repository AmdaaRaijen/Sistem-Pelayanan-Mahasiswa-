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

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(name) {
        this.items.push(name)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    getAll() {
        return this.items
    }
}

class Stack{
    constructor() {
        this.items = []
    }

    push(name) {
        this.items.push(name)
    }

    isEmpty() {
        return this.items.length === 0
    }

    getAll() {
        return [...this.items].reverse();
    }
}

class StudentNode {
    constructor(nim, name) {
        this.nim = nim
        this.name = name
        this.next = null
    }
}

class StudentLinkedLst {
    constructor() {
        this.head = null
    }

    add(nim, name) {
        const node = new StudentNode(nim, name)
        if (!this.head) {
            this.head = node
            return
        }
        let current = this.head
        while (node.next) current = node.next
        current.next = node
    }

    isEmpty() {
        return this.head === null
    }

    getAll() {
        const result = []
        let current = this.head
        while (current) {
            result.push(current)
            current = current.next
        }
        return result
    }
}