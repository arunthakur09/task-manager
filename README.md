# Task Management Application

## Description
This is a simple task management application that allows users to create, update, and delete tasks. Tasks can be filtered by status.

## Features
- Create a new task with title, description, and status.
- View a list of tasks with options to update status or delete a task.
- Filter tasks by status (All, To Do, In Progress, Done).

## Technologies Used
- Front-End: React, Tailwind CSS, Axios
- Back-End: Node.js, Express, MongoDB, Mongoose, Joi
- Testing: Jest, React Testing Library, Supertest

## Setup Instructions

### Front-End
1. Navigate to the `task-manager` directory:
    ```sh
    cd task-manager
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

### Back-End
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

## API Endpoints
- `GET /api/tasks`: Fetch all tasks.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update a task.
- `DELETE /api/tasks/:id`: Delete a task.

## Assumptions
- Tasks must have a title.
- Status must be one of "To Do", "In Progress", or "Done".
