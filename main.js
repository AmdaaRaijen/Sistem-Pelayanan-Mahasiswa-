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

class StudentLinkedList {
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

const queue = new Queue();
const history = new Stack();
const students = new StudentLinkedList();


function showMenu() {
    console.log("===== SISTEM PELAYANAN MAHASISWA =====");
    console.log("1. Tambah Antrian");
    console.log("2. Panggil Antrian");
    console.log("3. Tampilkan Antrian");
    console.log("4. Tambah Data Mahasiswa");
    console.log("5. Tampilkan Data Mahasiswa");
    console.log("6. Riwayat Pelayanan");
    console.log("7. Keluar")
}

async function addQueue() {
  const name = (await ask("Masukkan nama mahasiswa: ")).trim();
  if (!name) {
    console.log("Nama tidak boleh kosong.\n");
    return;
  }
  queue.enqueue(name);
  console.log(`${name} masuk ke antrian.\n`);
}

function callQueue() {
  if (queue.isEmpty()) {
    console.log("Antrian kosong, tidak ada yang dipanggil.\n");
    return;
  }
  const name = queue.dequeue();
  history.push(name);
  console.log(`Memanggil : ${name}\n`);
}

async function main() {
  let running = true;
  while (running) {
    showMenu();
    const choice = (await ask("Pilih menu [1-7]: ")).trim();
    switch (choice) {
      case "1":
        await addQueue();
        break
      case "2":
        await callQueue()
        break
      case "3":
        // show queue
      case "4":
        // add mahasiswa data (linked list)
      case "5":
        // show mahasiswa data
      case "6":
        // show Riwaya pelayanan (stack - :LIFO)
      case "7":
        running = false;
        console.log("Terima kasih. Program selesai.");
        break;
      default:
        console.log("Pilihan tidak valid, silakan coba lagi.\n");
    }
  }
  rl.close();
}

main()
