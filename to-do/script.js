document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="completeTask(this)">Complete</button>
            `;
            pendingTasksList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function completeTask(button) {
        const listItem = button.parentElement;
        const taskText = listItem.querySelector('span').innerText;
        listItem.remove();

        const completedItem = document.createElement('li');
        completedItem.innerHTML = `
            <span class="completed">${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        completedTasksList.appendChild(completedItem);
    }

    function removeTask(button) {
        const listItem = button.parentElement;
        listItem.remove();
    }

    window.addTask = addTask;
    window.completeTask = completeTask;
    window.removeTask = removeTask;
});
