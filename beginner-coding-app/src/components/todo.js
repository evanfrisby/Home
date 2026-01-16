// This is the Todo component for the beginner coding app.
// It allows users to add and remove tasks from a to-do list.
// The component manages the list of tasks and updates the display accordingly.

import React, { useState } from 'react';

// The Todo component function
const Todo = () => {
    // useState hook to manage the list of tasks
    const [tasks, setTasks] = useState([]);
    // useState hook to manage the current input value
    const [inputValue, setInputValue] = useState('');

    // Function to handle adding a new task
    const addTask = () => {
        // Check if the input value is not empty
        if (inputValue.trim() !== '') {
            // Update the tasks state by adding the new task
            setTasks([...tasks, inputValue]);
            // Clear the input field after adding the task
            setInputValue('');
        }
    };

    // Function to handle removing a task by its index
    const removeTask = (index) => {
        // Create a new array of tasks without the removed task
        const newTasks = tasks.filter((_, i) => i !== index);
        // Update the tasks state with the new array
        setTasks(newTasks);
    };

    return (
        <div>
            <h2>My To-Do List</h2>
            {/* Input field for new tasks */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update inputValue on change
                placeholder="Add a new task"
            />
            {/* Button to add the task */}
            <button onClick={addTask}>Add Task</button>
            {/* Display the list of tasks */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} {/* Display the task */}
                        {/* Button to remove the task */}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the Todo component so it can be used in other parts of the app
export default Todo;