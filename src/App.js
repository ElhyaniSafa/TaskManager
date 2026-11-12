import React from 'react';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import TaskCard from './TaskCard/TaskCard';

function App() {
  return (
    <div>
      <Header />
      <TaskList />
      <TaskCard />
    </div>
  );
}

export default App;