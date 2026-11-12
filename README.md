# Project PBF – REST API Data Mahasiswa

REST API sederhana untuk mengelola data mahasiswa menggunakan **Node.js** dan **Express.js**. Data disimpan sementara di dalam array (tanpa database), sehingga data kembali ke kondisi awal setiap server di-restart.

## Struktur Project

```
project-pbf/
├── models/
│   └── mahasiswaModel.js
├── controllers/
│   └── mahasiswaController.js
├── routes/
│   └── mahasiswaRoutes.js
├── app.js
└── package.json
```

- **Model**: mengelola data mahasiswa dalam array.
- **Controller**: menangani request dan response, memanggil fungsi pada model.
- **Routes**: mendefinisikan endpoint dan menghubungkannya ke controller.

## Cara Menjalankan

```bash
npm install
node app.js
```

Server berjalan di `http://localhost:3000`.

## Daftar Endpoint

| Method | Endpoint             | Fungsi                       |
|--------|----------------------|------------------------------|
| GET    | `/api/mahasiswa`     | Menampilkan semua mahasiswa  |
| GET    | `/api/mahasiswa/:id` | Menampilkan detail mahasiswa |
| POST   | `/api/mahasiswa`     | Menambahkan mahasiswa        |
| PUT    | `/api/mahasiswa/:id` | Mengubah mahasiswa           |
| DELETE | `/api/mahasiswa/:id` | Menghapus mahasiswa          |

Format data mahasiswa:

| Field   | Tipe   | Keterangan         |
|---------|--------|--------------------|
| `id`    | number | Dibuat otomatis    |
| `nim`   | string | Nomor induk        |
| `nama`  | string | Nama mahasiswa     |
| `prodi` | string | Program studi      |

---

## 1. Menampilkan Semua Mahasiswa

**Request**

```
GET /api/mahasiswa
```

**Response 200 OK**

```json
{
  "success": true,
  "message": "Data berhasil ditampilkan",
  "data": [
    {
      "id": 1,
      "nim": "2026001",
      "nama": "Andi Saputra",
      "prodi": "Teknik Informatika"
    },
    {
      "id": 2,
      "nim": "2026002",
      "nama": "Budi Santoso",
      "prodi": "Sistem Informasi"
    }
  ]
}
```

## 2. Menampilkan Detail Mahasiswa

**Request**

```
GET /api/mahasiswa/1
```

**Response 200 OK**

```json
{
  "success": true,
  "message": "Detail data berhasil ditampilkan",
  "data": {
    "id": 1,
    "nim": "2026001",
    "nama": "Andi Saputra",
    "prodi": "Teknik Informatika"
  }
}
```

**Response 404 Not Found** (ID tidak ada, contoh `/api/mahasiswa/99`)

```json
{
  "success": false,
  "message": "Data mahasiswa tidak ditemukan"
}
```

## 3. Menambahkan Mahasiswa

**Request**

```
POST /api/mahasiswa
Content-Type: application/json
```

```json
{
  "nim": "2026003",
  "nama": "Citra",
  "prodi": "Teknik Informatika"
}
```

**Response 201 Created**

```json
{
  "success": true,
  "message": "Data berhasil ditambahkan",
  "data": {
    "id": 3,
    "nim": "2026003",
    "nama": "Citra",
    "prodi": "Teknik Informatika"
  }
}
```

## 4. Mengubah Mahasiswa

**Request**

```
PUT /api/mahasiswa/1
Content-Type: application/json
```

```json
{
  "nim": "2026001",
  "nama": "Andi Baru",
  "prodi": "Teknik Informatika"
}
```

**Response 200 OK**

```json
{
  "success": true,
  "message": "Data berhasil diubah",
  "data": {
    "id": 1,
    "nim": "2026001",
    "nama": "Andi Baru",
    "prodi": "Teknik Informatika"
  }
}
```

**Response 404 Not Found**

```json
{
  "success": false,
  "message": "Data mahasiswa tidak ditemukan"
}
```

## 5. Menghapus Mahasiswa

**Request**

```
DELETE /api/mahasiswa/2
```

**Response 200 OK** (data yang dikembalikan adalah data yang baru dihapus)

```json
{
  "success": true,
  "message": "Data berhasil dihapus",
  "data": {
    "id": 2,
    "nim": "2026002",
    "nama": "Budi Santoso",
    "prodi": "Sistem Informasi"
  }
}
```

**Response 404 Not Found**

```json
{
  "success": false,
  "message": "Data mahasiswa tidak ditemukan"
}
```

## Pengujian

Pengujian seluruh endpoint dilakukan menggunakan **REST Client** (ekstensi di Visual Studio Code), bukan Postman atau Thunder Client. Thunder Client tidak dapat digunakan karena mewajibkan login akun dan proses login tidak berhasil, sehingga pengujian dialihkan ke REST Client. REST Client mengirim request HTTP dan menampilkan response (status code, header, dan body JSON) sama seperti Postman, sehingga hasil pengujiannya tetap valid.

Request pengujian ditulis pada file `routes/tes.http`. Cara menjalankannya: buka file tersebut di VS Code, lalu klik **Send Request** di atas setiap request.

Skenario yang diuji:

| No | Pengujian                                | Request                          | Hasil                     |
|----|------------------------------------------|----------------------------------|---------------------------|
| 1  | Menampilkan semua data                   | `GET /api/mahasiswa`             | 200 OK                    |
| 2  | Menambahkan data                         | `POST /api/mahasiswa`            | 201 Created               |
| 3  | Menampilkan detail data berdasarkan ID   | `GET /api/mahasiswa/1`           | 200 OK                    |
| 4  | Memperbarui data                         | `PUT /api/mahasiswa/1`           | 200 OK                    |
| 5  | Menghapus data                           | `DELETE /api/mahasiswa/2`        | 200 OK                    |
| 6  | Pesan ketika data tidak ditemukan        | `GET /api/mahasiswa/99`          | 404 Not Found             |

Screenshot hasil pengujian dilampirkan pada pengumpulan tugas.
