
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector(".tasks");
    console.log(form)

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        e.stopPropagation();

        const task=input.value; 
    

        if(!task){
            alert("Kindly enter task");
            return;
        }

        // const tasks=document.createElement("div");
        // tasks.classList.add("tasks");
        // console.log(tasks)

        const checkMark=document.createElement("div");
        checkMark.style.width="20px";
        checkMark.style.height="20px";
        checkMark.style.background="red";
        checkMark.style.opacity="0"
        checkMark.style.margin="1rem";
        const task_el=document.createElement("div");
        task_el.classList.add("task");
        // tasks.appendChild(task_el);
        
       

        const task_content_el=document.createElement("input");
        task_content_el.type="text"
        task_content_el.value=task
        localStorage.setItem('tasks',task);
        let storedTaskValue=localStorage.getItem('task')
        
        // let taskArray=JSON.parse(localStorage.getItem('tasks')) || [];
        
        // let savingTask=()=>{
        //     let taskTitle=task_content_el.value;

        //     let task={
        //         task:taskTitle
        //     }
        //     taskArray.push(task)
        //     for(let i=0;i<ltaskArray.length;i++)
        //     localStorage.setItem('taskArray',JSON.stringify(taskArray));
        // }
        // savingTask ();
        
        task_content_el.setAttribute('readonly','readonly');
        task_content_el.classList.add("task-content")
        task_el.appendChild(task_content_el);
        task_el.appendChild(checkMark)

        const task_actions_el=document.createElement("div");
        task_actions_el.classList.add("task-actions");
        task_el.appendChild(task_actions_el);

        const edit_btn=document.createElement("button");
        edit_btn.classList.add("edit-btn");
        edit_btn.innerHTML="edit";
        
        const delete_btn=document.createElement("button");
        delete_btn.classList.add("delete-btn");
        delete_btn.innerHTML="delete";

        task_actions_el.appendChild(edit_btn);
        task_actions_el.appendChild(delete_btn);

        list_el.appendChild(task_el);

        

        input.value=""

        edit_btn.addEventListener('click',()=>{
            if(edit_btn.innerHTML.toLowerCase()=='edit'){
                task_content_el.removeAttribute('readonly');
                task_content_el.focus();
                task_content_el.style.backgroundColor="pink"
                edit_btn.innerHTML="Save"
                edit_btn.style.color="blue"
            
                
                
            }
            else{
                task_content_el.setAttribute('readonly','readonly');
                task_content_el.style.backgroundColor="var(--gray)"
                edit_btn.innerHTML="edit"
                edit_btn.style.color="green"
                
            }
            
        })

        delete_btn.addEventListener('click',()=>{
            // list_el.removeChild(task_el)

            task_el.style.backgroundColor="red";
            task_content_el.style.textDecoration="line-through"
            delete_btn.innerHTML=""
            edit_btn.style.display="none"
        })   

        
    })
})