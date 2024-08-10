const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

function newTask() {

    const taskCard = document.createElement('div');

    taskCard.innerHTML = `<div class="bg-white float-left rounded-2xl w-64 h-80 p-8 m-4 hover:bg-gray-100 cursor-pointer">
            <p class="font-bold text-center text-gray-800 text-xl mb-4">Sample Title</p>
            <p class="text-gray-800 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="text-gray-800 font-bold text-center">Due By:</p>
            <p class="text-gray-800 text-center">8/8/24 | 4:00 PM</p>
        </div>`;

    taskContainer.appendChild(taskCard);
};

addTask.addEventListener("click", newTask);