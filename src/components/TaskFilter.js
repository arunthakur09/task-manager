import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilter = () => {
  const { statusFilter, setStatusFilter } = useTasks();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Filter by Status</label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
