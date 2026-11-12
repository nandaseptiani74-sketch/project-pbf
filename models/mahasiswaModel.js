let mahasiswa = [
    { id: 1, nim: "2026001", nama: "Andi Saputra", prodi: "Teknik Informatika" },
    { id: 2, nim: "2026002", nama: "Budi Santoso", prodi: "Sistem Informasi" },
];
let idBerikutnya = 3;

const getAll = () => mahasiswa;

const getById = (id) => mahasiswa.find((m) => m.id === id);

const tambah = (data) => {
    const baru = {
        id: idBerikutnya++,
        nim: data.nim,
        nama: data.nama,
        prodi: data.prodi,
    };
    mahasiswa.push(baru);
    return baru;
};

const ubah = (id, data) => {
    const m = getById(id);
    if (!m) return null;
    m.nim = data.nim || m.nim;
    m.nama = data.nama || m.nama;
    m.prodi = data.prodi || m.prodi;
    return m;
};

const hapus = (id) => {
    const index = mahasiswa.findIndex((m) => m.id === id);
    if (index === -1) return null;
    return mahasiswa.splice(index, 1)[0];
};

module.exports = { getAll, getById, tambah, ubah, hapus };