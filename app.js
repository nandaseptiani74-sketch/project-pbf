const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/mahasiswa", mahasiswaRoutes);

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});