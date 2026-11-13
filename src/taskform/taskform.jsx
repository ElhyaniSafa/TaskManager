import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [dateLimite, setDateLimite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre.trim()) {
      alert('3mer Titre 3afak !');
      return;
    }

    const nouvelleTache = {
      id: Date.now(),
      titre: titre,
      description: description,
      dateLimite: dateLimite,
      completed: false
    };

    onAddTask(nouvelleTache);

    setTitre('');
    setDescription('');
    setDateLimite('');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.title}>Ajouter une tâche</h2>

      <input
        style={styles.input}
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <textarea
        style={styles.input}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        style={styles.input}
        type="date"
        value={dateLimite}
        onChange={(e) => setDateLimite(e.target.value)}
      />

      <button style={styles.button} type="submit">Ajouter</button>
    </form>
  );
}

// CSS hna, f nafs script
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  title: {
    margin: '0',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '15px',
  },
  button: {
    background: '#007bff',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};
export default TaskForm;