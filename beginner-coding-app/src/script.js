// This is the main JavaScript file for the beginner coding app.
// It controls the behavior of the web application and handles user interactions.

// Function to initialize the app
function init() {
    // Call the function to set up the counter
    setupCounter();
    // Call the function to set up the todo list
    setupTodo();
}

// Function to set up the counter component
function setupCounter() {
    // Get the counter display element from the HTML
    const counterDisplay = document.getElementById('counter-display');
    // Initialize the count variable
    let count = 0;

    // Function to update the displayed count
    function updateDisplay() {
        counterDisplay.textContent = count; // Update the text content of the display
    }

    // Get the increment and decrement buttons
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');

    // Add event listener for increment button
    incrementButton.addEventListener('click', () => {
        count++; // Increase the count by 1
        updateDisplay(); // Update the display with the new count
    });

    // Add event listener for decrement button
    decrementButton.addEventListener('click', () => {
        count--; // Decrease the count by 1
        updateDisplay(); // Update the display with the new count
    });

    // Initial display update
    updateDisplay();
}

// Function to set up the todo list component
function setupTodo() {
    // Get the todo list element from the HTML
    const todoList = document.getElementById('todo-list');
    // Initialize an empty array to hold the tasks
    let tasks = [];

    // Function to render the todo list
    function renderList() {
        todoList.innerHTML = ''; // Clear the current list
        tasks.forEach((task, index) => {
            // Create a list item for each task
            const listItem = document.createElement('li');
            listItem.textContent = task; // Set the text of the list item
            // Create a button to remove the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                tasks.splice(index, 1); // Remove the task from the array
                renderList(); // Re-render the list
            });
            listItem.appendChild(removeButton); // Add the remove button to the list item
            todoList.appendChild(listItem); // Add the list item to the todo list
        });
    }

    // Get the input field and add button for new tasks
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');

    // Add event listener for the add button
    addButton.addEventListener('click', () => {
        const task = taskInput.value; // Get the value from the input field
        if (task) { // Check if the input is not empty
            tasks.push(task); // Add the new task to the array
            taskInput.value = ''; // Clear the input field
            renderList(); // Re-render the list
        }
    });

    // Initial render of the todo list
    renderList();
}

// Call the init function when the window loads
window.onload = init;