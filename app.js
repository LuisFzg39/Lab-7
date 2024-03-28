let task1 = {name: "Hacer la compra", completed: false}
let task2 = {name: "Llamar al médico", completed: false}
let task3 = {name: "Estudiar para el examen", completed: false}
let task4 = {name: "Ir al gimnasio", completed: false}
let task5 = {name: "Limpiar la casa", completed: false}
let task6 = {name: "Enviar correo electrónico", completed: false}
let task7 = {name: "Hacer la comida", completed: false}
let task8 = {name: "Leer un libro", completed: false}
let task9 = {name: "Resolver crucigrama", completed: false}
let task10 = {name: "Pasear al perro", completed: false}

init();

function init() {
    
    crearTarea(task1)
    crearTarea(task2)
    crearTarea(task3)
    crearTarea(task4)
    crearTarea(task5)
    crearTarea(task6)
    crearTarea(task7)
    crearTarea(task8)
    crearTarea(task9)
    crearTarea(task10)

    actualizarContadores();
}

function crearTarea(task) {

    const taskList = document.getElementById("task-list")
    const taskElement = document.createElement("div")
    taskElement.classList.add("task")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    checkbox.addEventListener("change", function() {

        task.completed = this.checked
        actualizarContadores()

        if (task.completed) {
            taskElement.classList.add("completed")
        } else {
            taskElement.classList.remove("completed")
        }
        
    });

    const taskName = document.createElement("span")
    taskName.textContent = task.name

    taskElement.appendChild(checkbox)
    taskElement.appendChild(taskName)
    taskList.appendChild(taskElement)
}

function actualizarContadores() {

    const completedTasksCounter = document.getElementById("completed-tasks")
    const pendingTasksCounter = document.getElementById("pending-tasks")

    let completedTasks = 0
    let pendingTasks = 0

    if (task1.completed) completedTasks++
    else pendingTasks++

    if (task2.completed) completedTasks++
    else pendingTasks++

    if (task3.completed) completedTasks++
    else pendingTasks++

    if (task4.completed) completedTasks++
    else pendingTasks++

    if (task5.completed) completedTasks++
    else pendingTasks++

    if (task6.completed) completedTasks++
    else pendingTasks++

    if (task7.completed) completedTasks++
    else pendingTasks++

    if (task8.completed) completedTasks++
    else pendingTasks++

    if (task9.completed) completedTasks++
    else pendingTasks++

    if (task10.completed) completedTasks++
    else pendingTasks++


    completedTasksCounter.textContent = completedTasks
    pendingTasksCounter.textContent = pendingTasks
}



