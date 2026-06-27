let inputTodo = document.querySelector("#inputTodo")
let addTodoBtn = document.querySelector("#addBtn")
let todos = document.querySelector("#todos")
let dateHolder = document.querySelector("#dateHolder")

console.dir(inputTodo)
let todoArray = []
//learn today pleasee mark
addTodoBtn.addEventListener('click',()=>{
    let todo = pickTodo()
    if(!todo) return
    saveTodo(todo)
    renderTodo()
})

window.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        let todo = pickTodo()
        if(!todo) return
        saveTodo(todo)
        renderTodo()
    }
})

function pickTodo(){
    if (inputTodo.value === '') return
    let text = inputTodo.value
    let todo = {
        id: Date.now(),
        text,
        completed: false
    }
    inputTodo.value = ''
  return todo

}
function saveTodo(todo){
    let todosInStorage = JSON.parse(localStorage.getItem('todo') || '[]')
    todosInStorage.push(todo)
    localStorage.setItem('todo', JSON.stringify(todosInStorage))
}

function renderTodo(){
   
let todosInStorage = JSON.parse(localStorage.getItem('todo') || '[]')
    
todos.innerHTML = ''
    todosInStorage.forEach(todo => {
        
        let li = document.createElement('li')
        let btn = document.createElement('button')
        let checkbox = document.createElement('input')
        let p = document.createElement('p')
        p.textContent = todo.text
        checkbox.type = 'checkbox'
        btn.textContent = 'x'
        btn.setAttribute('id','dltBtn')
        li.append(checkbox,p,btn)
        todos.append(li)



//         checkbox.addEventListener('click', (e)=>{
//             // console.log(e.target.checked)
//             let value = e.target.checked
//             if(value === true){
//                 todo.completed = true
//                 let element =e.target.parentElement
//                 // console.log(element)
//                 element.classList.add('completed')
//             }
//             if(todo.completed){
// e.target.parentElement.classList.add('completed')
//             }
            
//             else{e.target.parentElement.classList.remove('completed')}
//             localStorage.setItem('todo',JSON.stringify(todosInStorage) || [])



//         })

        btn.addEventListener('click',(e)=>{
            deleteTodo(todo)
            e.target.parentElement.remove()

        })
    });

}

function deleteTodo(todo){
    

    let todosInStorage = JSON.parse(localStorage.getItem('todo') || '[]')
    console.log(todo)
    todosInStorage.splice(todo, 1)
    localStorage.setItem('todo', JSON.stringify(todosInStorage))

//updates coming soon
}


//still learning


window.addEventListener('DOMContentLoaded', renderTodo)

//updates
