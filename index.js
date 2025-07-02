const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let projects = [
  { id: 1, title: "Proyek A", description: "Deskripsi Proyek A" },
  { id: 2, title: "Proyek B", description: "Deskripsi Proyek B" },
];

// Endpoint GET
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Endpoint POST
app.post("/api/projects", (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    const newProject = {
      id: projects.length + 1,
      title,
      description,
    };
    projects.push(newProject);
    res
      .status(201)
      .json({ message: "Proyek ditambahkan", project: newProject });
  } else {
    res.status(400).json({ error: "Judul dan deskripsi harus diisi" });
  }
});

// Endpoint root (opsional agar tidak error saat akses '/')
app.get("/", (req, res) => {
  res.send("API Portfolio is running");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
