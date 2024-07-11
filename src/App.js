import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Management Application</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
