function add()
{
    

    let task = document.getElementById("new-task");
    let List = document.getElementById("incomplete-tasks");
    if(task.value.trim() != "")
    {
        let li = document.createElement("li");

        // add the task text to the list item
        var edit = document.createElement("Button");
        edit.innerText = 'edit';
        var del = document.createElement("Button");
        del.innerText = 'delete';
        var text = document.createElement("input");

       del.addEventListener("click",remove);
       edit.addEventListener("click",update)
        li.appendChild(document.createTextNode(task.value));
        li.appendChild(text);
        li.appendChild(edit);
        li.appendChild(del);

        
        // display the list item to the task list
        List.appendChild(li);

        // clear the input field
        task.value = "";
        
        
    }

    
}
function remove()
{
    let list = document.activeElement.parentElement.parentElement;
    
    list.removeChild(document.activeElement.parentElement);

}
function update()
{
    
    let task = document.activeElement.parentElement;
    console.log(task.childNodes[1].value);
    task.childNodes[0].innerText= task.childNodes[1].value;
}