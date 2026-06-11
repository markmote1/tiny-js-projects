let inputTodo = document.querySelector("#inputTodo")
let addTodoBtn = document.querySelector("#addBtn")
let todos = document.querySelector("#todos")
let dateHolder = document.querySelector("#dateHolder")

console.dir(inputTodo)

addTodoBtn.addEventListener('click', ()=>{
let content = JSON.stringify(inputTodo.value)
localStorage.setItem('Todo', content)
console.log(content)
})


