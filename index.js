// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let projects = [];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/projects", (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    projects.push({ title, description });
    res.status(201).json({ message: "Proyek ditambahkan" });
  } else {
    res.status(400).json({ error: "Judul dan deskripsi harus diisi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
