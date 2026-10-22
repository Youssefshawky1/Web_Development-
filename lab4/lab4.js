let tasks = [];

function addtask() {
    const input = document.getElementById("task");
    const value = input.value.trim();

    if (value === "") return;

    tasks.push(value);
    input.value = "";

    render();
}

function render() {
    const container = document.getElementById("tasks");
    container.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const p = document.createElement("p");
        p.textContent = tasks[i];
        container.appendChild(p);
    }
}