let taskInput = document.querySelector("#task")
let addBtn = document.querySelector("#add")
let taskList = document.querySelector("#list")
let successMsg = document.querySelector("#Sucess-msg")
let counter = document.querySelector("#counter")
let themeToggle = document.querySelector("#theme")
let clearAllBtn = document.querySelector("#clear")
let filterAll = document.querySelector("#filter")
let filterPending = document.querySelector("#pending")
let filterCompleted = document.querySelector("#completed")

let tasks = []
let currentFilter = "all"

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Switch to Light Mode"
    } else {
        themeToggle.textContent = "Switch to Dark Mode"
    }
})

filterAll.addEventListener("click", () => {
    currentFilter = "all"
    filterAll.classList.add("active")
    filterPending.classList.remove("active")
    filterCompleted.classList.remove("active")
    renderTasks()
})

filterPending.addEventListener("click", () => {
    currentFilter = "pending"
    filterPending.classList.add("active")
    filterAll.classList.remove("active")
    filterCompleted.classList.remove("active")
    renderTasks()
})

filterCompleted.addEventListener("click", () => {
    currentFilter = "completed"
    filterCompleted.classList.add("active")
    filterAll.classList.remove("active")
    filterPending.classList.remove("active")
    renderTasks()
})

clearAllBtn.addEventListener("click", () => {
    if (tasks.length === 0) {
        alert("No tasks to clear!")
        return
    }
    if (confirm("Are you sure you want to clear all tasks?")) {
        tasks = []
        renderTasks()
    }
})

addBtn.addEventListener("click", () => {
    addTask()
})

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})

function addTask() {
    let taskValue = taskInput.value

    if (taskValue.trim() === "") {
        alert("Please enter a task!")
        return
    }

    let task = {
        id: Date.now(),
        text: taskValue,
        completed: false,
        date: new Date().toLocaleDateString()
    }

    tasks.push(task)
    renderTasks()
    showSuccess()
    taskInput.value = ""
}

function renderTasks() {
    taskList.innerHTML = ""

    let filteredTasks = tasks
    if (currentFilter === "pending") {
        filteredTasks = tasks.filter((t) => t.completed === false)
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter((t) => t.completed === true)
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<p class="empty-msg">No tasks to show!</p>`
        updateCounter()
        return
    }

    filteredTasks.forEach((task) => {
        let li = document.createElement("li")
        li.style.fontSize = "1rem"
        li.setAttribute("class", "active")

        if (task.completed) {
            li.classList.add("completed")
        }

        let taskText = document.createElement("span")
        taskText.innerText = task.text
        taskText.style.color = "inherit"
        taskText.setAttribute("class", "task-text")

        let taskDate = document.createElement("small")
        taskDate.innerText = ` (${task.date})`
        taskDate.style.color = "#a0aec0"
        taskDate.style.fontSize = "0.75rem"
        taskText.appendChild(taskDate)

        let actionDiv = document.createElement("div")
        actionDiv.setAttribute("class", "action-buttons")

        let completeBtn = document.createElement("button")
        completeBtn.innerText = task.completed ? "Undo" : "Done"
        completeBtn.setAttribute("class", "complete-btn")

        completeBtn.addEventListener("click", () => {
            completeTask(task.id)
        })

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "🗑 Delete"
        deleteBtn.setAttribute("class", "delete-btn")

        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id)
        })

        actionDiv.append(completeBtn)
        actionDiv.append(deleteBtn)

        li.append(taskText)
        li.append(actionDiv)

        taskList.append(li)
    })
    updateCounter()
}
function completeTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed }
        }
        return task
    })
    renderTasks()
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id)
    renderTasks()
}
function updateCounter() {
    let total = tasks.length
    let pending = tasks.filter((t) => t.completed === false).length
    let completed = tasks.filter((t) => t.completed === true).length
    counter.innerText = `Total: ${total} | Pending: ${pending} | Completed: ${completed}`
}
function showSuccess() {
    successMsg.innerText = "Task added successfully!"
    successMsg.style.display = "block"
    setTimeout(() => {
        successMsg.style.display = "none"
    }, 2000)
}
renderTasks()