#! /usr/bin/env node
import inquirer from "inquirer";

let todos : string[] = [];
let condition = true;

while(condition){

let ans = await inquirer.prompt([
    
        {
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["Add","update","view","Delete","Exit"]
        }
        
    
        
            
        
    
]);
if(ans.select==="Add"){
    let addTodo = await inquirer.prompt({
name:"todo",
type: "input",
message: "Add items in the list",
validate: function(input){
    if(input.trim() == ""){
        return "please enter a non-empty item."
    }
    return true;
}

    })
    if(addTodo.todo.trim() !== ""){
    todos.push(addTodo.todo);
    console.log(todos);
    }
}
if(ans.select==="update"){
   let updateTodo = await inquirer.prompt({
        name: "todo",
        type: "list",

        message: "update items in the list",
       choices: todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "Add items in the list",
})
    let newTodo = todos.filter(val => val !== updateTodo.todo);
    todos = [...newTodo,addTodo.todo];
    console.log(todos);
}
if(ans.select==="view"){
    console.log("***** TO-DO-LIST *****");
    console.log(todos);
}
if(ans.select==="Delete"){
    
   let DeleteTodo = await inquirer.prompt({
    name: "todo",
    type: "list",

    message: "select item to Delete",
   choices: todos.map(item => item)
})
let newTodo = todos.filter(val => val !== DeleteTodo.todo);
todos = [...newTodo];



console.log(todos);



}
if(ans.select==="Exit"){
    console.log("Exiting To-Do-List...");
    condition = false
}
}
