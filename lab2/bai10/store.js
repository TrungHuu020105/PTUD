const KEY = "tasks";

export function getTasks() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function addTask(text) {
    const tasks = getTasks();
    tasks.push({
        id: Date.now(),
        text,
        done: false
    });
    localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function toggleTask(id) {
    const tasks = getTasks().map(t =>
        t.id === id ? {...t, done: !t.done } : t
    );
    localStorage.setItem(KEY, JSON.stringify(tasks));
}