const express = require("express");
const router = express.Router();
const controller = require("../controllers/mahasiswaController");

router.get("/", controller.tampilSemua);
router.get("/:id", controller.tampilDetail);
router.post("/", controller.tambah);
router.put("/:id", controller.ubah);
router.delete("/:id", controller.hapus);

module.exports = router;