import { getTasks, addTask, toggleTask } from "./store.js";

export function renderHome(container) {
    container.innerHTML = `<h2>🏠 Home</h2><p>Welcome to Mini SPA</p>`;
}

export function renderAbout(container) {
    container.innerHTML = `<h2>ℹ️ About</h2><p>Demo SPA router bằng hash</p>`;
}

export function renderNotFound(container) {
    container.innerHTML = `<h2>404</h2><p>Trang không tồn tại</p>`;
}

export function renderTasks(container) {
    container.innerHTML = `
    <h2>📝 Tasks</h2>
    <input id="taskInput" placeholder="New task"/>
    <button id="addBtn">Add</button>
    <ul id="taskList"></ul>
  `;

    const taskList = container.querySelector("#taskList");
    const input = container.querySelector("#taskInput");

    function render() {
        taskList.innerHTML = "";
        getTasks().forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
        <input type="checkbox" ${task.done ? "checked" : ""}/>
        ${task.text}
      `;
            li.querySelector("input").onchange = () => {
                toggleTask(task.id);
                render();
            };
            taskList.appendChild(li);
        });
    }

    container.querySelector("#addBtn").onclick = () => {
        if (input.value.trim()) {
            addTask(input.value);
            input.value = "";
            render();
        }
    };

    render();
}