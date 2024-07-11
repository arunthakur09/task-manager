import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilter = () => {
  const { statusFilter, setStatusFilter } = useTasks();

  return (
    <div className="filter">
      <label>Filter by Status</label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
