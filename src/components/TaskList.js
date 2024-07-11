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
    <div className="task-list">
      {tasks
        .filter((task) => statusFilter === 'All' || task.status === statusFilter)
        .map((task) => (
          <div key={task._id} className="task-item">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <select
                value={task.status}
                onChange={(e) => updateTaskStatus(task._id, e.target.value, task.title)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
