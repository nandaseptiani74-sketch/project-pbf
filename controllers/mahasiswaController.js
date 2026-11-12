const model = require("../models/mahasiswaModel");

const tampilSemua = (req, res) => {
    res.json({
        success: true,
        message: "Data berhasil ditampilkan",
        data: model.getAll(),
    });
};

const tampilDetail = (req, res) => {
    const data = model.getById(parseInt(req.params.id));
    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan",
        });
    }
    res.json({ success: true, message: "Detail data berhasil ditampilkan", data });
};

const tambah = (req, res) => {
    const { nim, nama, prodi } = req.body;
    if (!nim || !nama || !prodi) {
        return res.status(400).json({
            success: false,
            message: "nim, nama, dan prodi wajib diisi",
        });
    }
    const data = model.tambah({ nim, nama, prodi });
    res.status(201).json({
        success: true,
        message: "Data berhasil ditambahkan",
        data,
    });
};

const ubah = (req, res) => {
    const data = model.ubah(parseInt(req.params.id), req.body);
    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan",
        });
    }
    res.json({ success: true, message: "Data berhasil diubah", data });
};

const hapus = (req, res) => {
    const data = model.hapus(parseInt(req.params.id));
    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan",
        });
    }
    res.json({ success: true, message: "Data berhasil dihapus", data });
};

module.exports = { tampilSemua, tampilDetail, tambah, ubah, hapus };