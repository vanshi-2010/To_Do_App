const taskform = document.getElementById('taskform');
const taskinput = document.getElementById('taskinput');
const tasklist = document.getElementById('tasklist');

let taskId= 1;
function addTask(event){
    event.preventDefault()
    const tasktext = taskinput.value.trim();

    if(tasktext !== ""){
        const taskitem = document.createElement('li');

        taskitem.innerHTML = `
        <span>${tasktext}</span>
        <button class='delete-btn'>Delete</button>
        `;
        tasklist.append(taskitem);
        taskinput.value = "";
        taskId++;

        const deletebtn = taskitem.querySelector('.delete-btn');
        deletebtn.addEventListener('click',deletetask);
    }
}
function deletetask(){
    const taskitem= event.target.parentElement;
    tasklist.removeChild(taskitem);
}

taskform.addEventListener('submit',addTask);