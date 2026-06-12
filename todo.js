let inputTodo = document.querySelector("#inputTodo")
let addTodoBtn = document.querySelector("#addBtn")
let todos = document.querySelector("#todos")
let dateHolder = document.querySelector("#dateHolder")

console.dir(inputTodo)
let arr = []

addTodoBtn.addEventListener('click',()=>{
    addTodo(inputTodo.value)
    inputTodo.value = ''
})


function addTodo(text){
   if(text.trim() === '') return
   const todo = {
    id: Date.now(),
    text,
    completed: false
   }
   arr.push(todo)
   console.log(arr)
   saveTodos()
   getTodos()

}


function saveTodos(){
    localStorage.setItem('todo',JSON.stringify(arr))
}


function getTodos(){
    arr.forEach((a)=>{
        console.log(a)
    })

}
