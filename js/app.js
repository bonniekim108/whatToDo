var taskInput = document.getElementById("new-task"); //new task
var addButton; //first button
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