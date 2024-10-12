document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Add task when clicking the button
    addTaskBtn.addEventListener('click', addTask);

    // Add task when pressing Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            taskContent.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.appendChild(taskContent);
            listItem.appendChild(deleteBtn);

            taskList.appendChild(listItem);

            taskInput.value = ''; // Clear input field
        }
    }
});
