//user interaction doesn't provide desired results
//solution: add interactivity so user can manage daily todos
var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list of incomplete tasks
var completedTasksHolder = document.getElementById("complete-tasks"); //completed tasks

//Add a new task
var addTask = function() {
  //When button is pressed
  //Create a new list item with text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of above elements needs to be modified and appended
}

//Edit an existing task
var editTask = function() {
  //When edit button is pressed
    //If class of the parent, which is the list item, is .editMode
      //switch from .editMode
      //also make label text become inputs value
    //Else
      //switch to .editMode
      //input value becomes label's text

    //Toggle .editmode on parent 
}


//Delete an existing task
var deleteTask = function() {
  //When delete button is pressed
    //this removes parent list item from ul
}

//Mark a task as complete
var taskComplete = function() {
  //When checkbox is checked
    //Append task list item to #completed-tasks
}


//Mark a task as incomplete
var taskIncomplete = function() {
  //When checkbox is not checked
    //Append task list item to #incomplete-tasks
}
var bindTaskEvents = function(TaskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select its children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
  editButton.onclick = editTask;
    //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}
addButton.onclick = addTask;

for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}