import React from 'react';
import { useTasks } from '../context/TaskContext';
import axios from 'axios';

const TaskList = () => {
  const { tasks, fetchTasks, statusFilter } = useTasks();

  const updateTaskStatus = async (id, status, title) => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/tasks/${id}`, { status, title }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="space-y-4">
      {tasks
        .filter((task) => statusFilter === 'All' || task.status === statusFilter)
        .map((task) => (
          <div key={task._id} className="p-4 border rounded-md shadow-sm">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.description}</p>
            <div className="mt-2">
              <select
                value={task.status}
                onChange={(e) => updateTaskStatus(task._id, e.target.value, task.title)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <button
                onClick={() => deleteTask(task._id)}
                className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
