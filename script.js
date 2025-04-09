// List of motivational quotes
const quotes = [
    "Push yourself, because no one else is going to do it for you!",
    "The only bad workout is the one that didn’t happen.",
    "Don’t stop when you’re tired, stop when you’re done.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Success starts with self-discipline."
];

// Function to generate random motivational quote
function getMotivation() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivation-text').textContent = randomQuote;
}

// Function to add workout tasks
function addWorkoutTask(taskName) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="task-checkbox"> ${taskName}`;
    taskList.appendChild(li);
}

// Set some default workout tasks
const workoutTasks = [
    "Cobra Stretch - 30 sec",
    "Tadasan - 30 sec",
    "Toe Touch - 30 sec",
    "Bar Hanging - 30 sec"
];

workoutTasks.forEach(task => addWorkoutTask(task));

// Function to set goal
document.getElementById('set-goal').addEventListener('click', () => {
    const goal = document.getElementById('goal-input').value;
    alert(`Your goal is set to: ${goal}`);
});

// Load a motivational quote on page load
window.onload = function() {
    getMotivation();
};