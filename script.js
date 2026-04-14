let todoSection = document.querySelector('.todo-input-section')
let progressSection = document.querySelector('.todo-progress-section')
let doneSection = document.querySelector('.todo-done-section')

let addTodoButton = document.querySelector('.add-todo-button')
let defaultValue = 'Add a task...'
let draggedCard = null
addTodoButton.addEventListener('click', ()=> {
  let todoCard = document.createElement('div')
  todoCard.className = 'todo-inputs'
  todoCard.innerText = defaultValue
  todoCard.contentEditable = true
  todoCard.draggable = true
  todoSection.append(todoCard)



  todoCard.addEventListener('click', ()=> {
    if(todoCard.innerText === defaultValue){
      todoCard.innerText = ''
    }
  })
  todoCard.addEventListener('click', () => {
    let id = todoCard.getAttribute('data-set-id')
    if(id && todoCard.innerText === ''){
      clearTimeout(id)
    }
  })

  todoCard.addEventListener('blur', () => {
    if(todoCard.innerText.trim() === ''){
      let id = setTimeout(() => {
      todoCard.remove()
    }, 3000)
    todoCard.setAttribute('data-set-id', id)
    }
  })
    
  todoCard.addEventListener('dragstart', (e) => {
    draggedCard = todoCard
    todoCard.style.opacity = 0.5
  })
  todoCard.addEventListener('dragend', (e) => {
    draggedCard = null
    todoCard.style.opacity = 1
  })
  
  let columns = document.querySelectorAll('.task-section')

  for(let col of columns){
    col.addEventListener('dragover', (e) =>{
      e.preventDefault()
    })
    col.addEventListener('drop', (e) => {
      e.preventDefault()
     col.append(draggedCard)
    })
  }
})

