import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import axios from 'axios';

const TaskForm = () => {
  const { fetchTasks } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required');
      return;
    }
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tasks`, {
        title,
        description,
        status,
      });
      fetchTasks();
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
