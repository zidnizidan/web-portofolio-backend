const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Wajib pakai process.env.PORT

app.use(cors());
app.use(express.json());

// Contoh endpoint
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, title: "Proyek A", description: "Deskripsi Proyek A" },
    { id: 2, title: "Proyek B", description: "Deskripsi Proyek B" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
