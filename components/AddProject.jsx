import React, { useState } from 'react';

const AddProject = ({ onProjectAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    })
      .then((res) => res.json())
      .then((data) => {
        onProjectAdded();
        setTitle('');
        setDescription('');
        alert("Project berhasil ditambahkan!");
      })
      .catch((err) => console.error("Gagal tambah proyek:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Proyek Baru</h2>
      <div>
        <input
          type="text"
          placeholder="Judul proyek"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Deskripsi proyek"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
};

export default AddProject;
