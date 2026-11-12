import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

function TaskList({ tasks = [] }) {
  return (
    <div>
      <h2>Liste des tâches</h2>

      {tasks.length === 0 ? (
        <p>Aucune tâche disponible.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
}

export default TaskList;