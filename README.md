# Sistem Pelayanan Mahasiswa 🎓
**Ujian Tengah Semester (UTS) - Struktur Data dan Algoritma (IF206)**

Program ini adalah sistem pelayanan mahasiswa berbasis _Command Line Interface_ (CLI) yang mensimulasikan antrian loket administrasi kampus. Program dibangun menggunakan **JavaScript (Node.js)** dengan menerapkan struktur data **Queue**, **Stack**, dan **Singly Linked List**.

---

## 👤 Identitas Mahasiswa

- **Nama** : Bintang Triadmaja
- **NIM** : 250401010075
- **Kelas** : IF206
- **Program Studi** : PJJ Informatika S1
- **Universitas** : Universitas Siber Asia

---

## 📋 Fitur Program

| Menu | Fitur | Struktur Data | Bobot |
|------|-------|---------------|-------|
| 1 | Tambah Antrian | Queue (FIFO) | 10% |
| 2 | Panggil Antrian | Queue (FIFO) + Stack | 15% |
| 3 | Tampilkan Antrian | Queue | 10% |
| 4 | Tambah Data Mahasiswa | Singly Linked List | 20% |
| 5 | Tampilkan Data Mahasiswa | Singly Linked List | 15% |
| 6 | Riwayat Pelayanan | Stack (LIFO) | 30% |
| 7 | Keluar | — | — |

---

## 🛠️ Cara Menjalankan Program

### Opsi 1 — Node.js di Device Pribadi (Direkomendasikan)

**Persyaratan:** Node.js versi 14 atau lebih baru.
Cek apakah Node.js sudah terinstall:

```bash
node --version
```

Jika belum terinstall, unduh di [https://nodejs.org](https://nodejs.org) (pilih versi **LTS**).

**Langkah menjalankan:**

```bash
node main.js
```

---

### Opsi 2 — Online: Replit

> 🔗 [https://replit.com](https://replit.com)

1. Buka Replit dan buat akun gratis (atau login dengan Google)
2. Klik **+ Create Repl**
3. Pilih template **Node.js**
4. Hapus isi file `index.js` yang ada, lalu paste seluruh kode program
5. Klik tombol **Run ▶**
6. Input diketik di panel **Console** di sebelah kanan

---

### Opsi 3 — Online: Programiz Online JavaScript Compiler

> 🔗 [https://www.programiz.com/javascript/online-compiler](https://www.programiz.com/javascript/online-compiler)

1. Buka link di atas
2. Hapus kode default yang ada
3. Paste seluruh kode program
4. Klik **Run**
5. Input diketik di panel output yang muncul di bawah

> ⚠️ **Catatan:** Beberapa online compiler membatasi fitur `readline` interaktif. Jika input tidak terbaca, gunakan **Replit** (Opsi 2) yang lebih handal untuk program berbasis input terminal.

---

### Opsi 4 — Online: GitHub Codespaces

> 🔗 [https://github.com/codespaces](https://github.com/codespaces)

1. Login ke GitHub, buka link di atas
2. Klik **New codespace** → pilih **Blank**
3. Upload file `main.js` ke file explorer di sebelah kiri
4. Buka terminal (`` Ctrl+` ``) lalu jalankan:

```bash
node main.js
```
---

## 🏗️ Struktur Data yang Digunakan

### Queue (Antrian) — FIFO
Mahasiswa yang datang lebih awal akan dilayani lebih awal. Operasi `enqueue` menambah ke belakang, `dequeue` mengambil dari depan.

```
Masuk → [ Andi | Budi | Citra ] → Keluar (dipanggil)
```

### Stack (Riwayat) — LIFO
Setiap mahasiswa yang selesai dilayani di-*push* ke stack. Saat ditampilkan, yang terakhir dilayani muncul paling atas.

```
Terakhir dilayani → [ Budi | Andi ]
```

### Singly Linked List (Data Mahasiswa)
Setiap mahasiswa disimpan sebagai node yang saling terhubung via pointer `next`.

```
[22001|Andi] → [22002|Budi] → [22003|Citra] → null
```

---

## 📁 Struktur File

```
├── main.js
└── README.md
```