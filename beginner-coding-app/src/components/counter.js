// This is the Counter component for the beginner coding app.
// It allows users to increment and decrement a count.
// The component is designed to help users learn about state management and event handling in JavaScript.

let count = 0; // Initialize the count variable to 0

// Function to update the displayed count
function updateDisplay() {
    // Get the display element by its ID
    const displayElement = document.getElementById('countDisplay');
    // Update the text content of the display element with the current count
    displayElement.textContent = count; 
}

// Function to increment the count
function increment() {
    count++; // Increase the count by 1
    updateDisplay(); // Update the display to show the new count
}

// Function to decrement the count
function decrement() {
    count--; // Decrease the count by 1
    updateDisplay(); // Update the display to show the new count
}

// Function to create the Counter component
function createCounter() {
    // Create a div element to hold the counter
    const counterDiv = document.createElement('div');
    
    // Create a button to increment the count
    const incrementButton = document.createElement('button');
    incrementButton.textContent = 'Increment'; // Set button text
    incrementButton.onclick = increment; // Set the click event to call increment function

    // Create a button to decrement the count
    const decrementButton = document.createElement('button');
    decrementButton.textContent = 'Decrement'; // Set button text
    decrementButton.onclick = decrement; // Set the click event to call decrement function

    // Create a span element to display the count
    const countDisplay = document.createElement('span');
    countDisplay.id = 'countDisplay'; // Set the ID for the display element
    countDisplay.textContent = count; // Initialize the display with the current count

    // Append the buttons and display to the counter div
    counterDiv.appendChild(incrementButton);
    counterDiv.appendChild(decrementButton);
    counterDiv.appendChild(countDisplay);

    // Return the counter div to be added to the DOM
    return counterDiv;
}

// Export the createCounter function so it can be used in other parts of the app
export { createCounter };