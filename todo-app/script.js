const containerSection = document.getElementById("task-container");
const containerCard = document.querySelector(".task-container-card");
const taskTitle = document.getElementById("task-title");
const taskDate = document.getElementById("task-date");
const taskNote = document.getElementById("task-note");
const form = document.getElementById("todo-form");
const taskBtn = document.getElementById("task-btn");
const formSection = document.getElementById("form-section");
const deleteBtn = document.querySelector(".delete-btn");
const closeBtn = document.getElementById("close-btn")
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const toggleBtn = document.querySelector(".night-mode-btn");
const icon = toggleBtn.querySelector("i")

let currentEditTask = null;

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask() {
    containerCard.innerHTML = "";

    tasks.forEach((task) => {
        containerCard.innerHTML += `
        <div class="task-container-card">
                <div class="task-card-header hover" data-id="${task.id}">
                    <div class="check">
                        <label class="done hoverable">
                            <input 
                            class="checkbox" 
                            type="checkbox"
                            ${task.completed ? "checked" : ""}
                            >
                            <span class="checkmark"></span>
                        </label>
                    </div>
 
                    <div class="title">
                        <span class="task-title ${task.completed ? "completed" : ""}">${task.title}</span>
                    </div>

                    
                    <div class="date">
                        <span class="task-date gray">${task.date}</span>
                    </div>

                    <div class="status">
                        <span class="task-status ${task.completed ? "green" : "blue"}">${task.completed ? "Selesai" : "Belum Selesai"}</span>
                    </div>

                    <div class="edit ">
                        <button class="edit-btn hoverable">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>

                    <div class="delete ">
                        <button class="delete-btn hoverable">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>

                    <div class="note hidden">
                        <span class="task-note">${task.note}</span>
                    </div>
                </div>
              </div>`
    })
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    

    

    if (currentEditTask) {
        const id = Number(currentEditTask.dataset.id)

        const task = tasks.find(task => task.id === id)

        task.title = taskTitle.value;
        task.date = taskDate.value;
        task.note = taskNote.value;

        currentEditTask = null;

    } else {
        const data = {
        id: Date.now(),
        title: taskTitle.value,
        date: taskDate.value,
        note: taskNote.value,
        completed: false
       }

        tasks.push(data);
    }

    saveToLocalStorage();

    renderTask();

    form.reset()

    containerSection.classList.remove("hidden");
    formSection.classList.add("hidden");
})

taskBtn.addEventListener("click", (event) => {
    event.preventDefault();

    currentEditTask = null;
    form.reset()
    containerSection.classList.add("hidden");
    formSection.classList.remove("hidden")
})



containerSection.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".checkbox") || target.closest(".checkmark")) {
        return; 
    }

    const deleteBtn = target.closest(".delete-btn")
    const editBtn = target.closest(".edit-btn");
    const checkbox = target.closest(".checkbox");
    const card = target.closest(".hover")

    if (deleteBtn) {
        const taskCard = deleteBtn.closest(".task-card-header");

        const id = Number(taskCard.dataset.id)

        tasks = tasks.filter((task) => task.id !== id)

        saveToLocalStorage()
        renderTask()
        return;
    }

    if ((editBtn || card) && !checkbox) {
        const taskCard = editBtn ? editBtn.closest(".task-card-header") : card;
        currentEditTask = taskCard

        const id = Number(taskCard.dataset.id)

        const task = tasks.find((task) => task.id === id)

        
        taskTitle.value = task.title
        taskDate.value = task.date
        taskNote.value = task.note

        containerSection.classList.add("hidden");
        formSection.classList.remove("hidden");
        return
    }
})

containerSection.addEventListener("change", (event) => {
    const checkbox = event.target.closest(".checkbox");

    if (!checkbox) return;

    const taskCard = checkbox.closest(".task-card-header");

    const id = Number(taskCard.dataset.id)

    const task = tasks.find((task) => task.id === id)

    task.completed = checkbox.checked;

    saveToLocalStorage()

    renderTask()
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault()

    containerSection.classList.remove("hidden");
    formSection.classList.add("hidden");
})

toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    
})



renderTask();