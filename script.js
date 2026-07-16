let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let total = document.getElementById("total");
let completed = document.getElementById("completed");

let deleteAll = document.getElementById("deleteAll");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        addTask();
    }
});

function addTask(){

    let text = taskInput.value.trim();

    if(text==""){
        alert("Please Enter Task");
        return;
    }

    let task = {
        title:text,
        done:false
    };

    tasks.push(task);

    saveData();

    renderTasks();

    taskInput.value="";
}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach(function(task,index){

        let li=document.createElement("li");

        let span=document.createElement("span");

        span.innerText=task.title;

        span.classList.add("task");

        if(task.done){
            span.classList.add("completed");
        }

        span.addEventListener("click",function(){

            tasks[index].done=!tasks[index].done;

            saveData();

            renderTasks();

        });

        let actions=document.createElement("div");

        actions.classList.add("actions");

        let editBtn=document.createElement("button");

        editBtn.innerText="Edit";

        editBtn.classList.add("edit");

        editBtn.addEventListener("click",function(){

            let newTask=prompt("Edit Task",task.title);

            if(newTask!=null && newTask.trim()!=""){

                tasks[index].title=newTask;

                saveData();

                renderTasks();

            }

        });

        let deleteBtn=document.createElement("button");

        deleteBtn.innerText="Delete";

        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click",function(){

            tasks.splice(index,1);

            saveData();

            renderTasks();

        });

        actions.appendChild(editBtn);

        actions.appendChild(deleteBtn);

        li.appendChild(span);

        li.appendChild(actions);

        taskList.appendChild(li);

    });

    total.innerText=tasks.length;

    let count=tasks.filter(task=>task.done).length;

    completed.innerText=count;

}

deleteAll.addEventListener("click",function(){

    let check=confirm("Delete All Tasks?");

    if(check){

        tasks=[];

        saveData();

        renderTasks();

    }

});

function saveData(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}