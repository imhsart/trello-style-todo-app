let todoSection = document.querySelector('.todo-input-section')
let progressSection = document.querySelector('.todo-progress-section')
let doneSection = document.querySelector('.todo-done-section')

let addTodoButton = document.querySelector('.add-todo-button')
let defaultValue = 'Add a task...'

addTodoButton.addEventListener('click', ()=> {
  let todoCard = document.createElement('div')
  todoCard.className = 'todo-inputs'
  todoCard.innerText = defaultValue
  todoCard.contentEditable = true
  todoSection.append(todoCard)



  





})

