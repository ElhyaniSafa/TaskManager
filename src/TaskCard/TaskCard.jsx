import React from 'react';

function TaskCard({ task }) {
  const getStatutClass = (statut) => {
    if (statut === "Terminée") return "statut-termine";
    if (statut === "En cours") return "statut-en-cours";
    return "statut-attente";
  };

  return (
    <div className="task-card">
      <h3>{task.titre}</h3>
      <p>{task.description}</p>
      <div className="task-info">
        <span className={`statut ${getStatutClass(task.statut)}`}>
          {task.statut}
        </span>
        <span className="date">{task.dateLimite}</span>
      </div>
    </div>
  );
}

export default TaskCard;