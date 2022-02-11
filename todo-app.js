const todos = [{
    text:'Make Bed',
    completed: false
}, 
{
    text:'Brush Teeth',
    completed: true
}, 
{
    text:'Wash Face',
    completed: true
}, 
{
    text:'Drink Water',
    completed: false
}, 
{
    text:'Work Out',
    completed: true
}]

    // 1.Setup a div contain for todos
    // 2. Setup filters (searchText) and write up a new filter input to change it 
    // 3. Create a renderTodos function to render and rerender the latest filtered data

//starts
const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters){
    let filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = todos.filter(function (todo){
        if(filters.hideCompleted){
            return !todo.completed
        } else
        {
            return true
        }
    })

    //recalculate visible todos and render latest data
    const left = filteredTodos.filter(function (todo){
        return !todo.completed 
    })

    document.querySelector('#todos').innerHTML = ''

    //You have 2 todos left (p element)
    const newP = document.createElement('h2')
    newP.textContent = `You have ${left.length} todos left`
    document.querySelector('#todos').appendChild(newP)

    // Add a p for each todo above (use text value)
    filteredTodos.forEach(function (todo){

      const newParagraph = document.createElement('p')
      newParagraph.textContent = todo.text
      document.querySelector('#todos').appendChild(newParagraph)
        
    })
}


renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value

    renderTodos(todos, filters)
})

// 1. Create a form with a single input for todo text
// 2. Setup and submit handler and cancel the default action 
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. render the application
// 5. Clear the input field value

document.querySelector('#todo-form').addEventListener('submit', function (e){
    e.preventDefault()
    let todo = {
        text: e.target.elements.newTodo.value,
        completed: false
    }
    todos.push(todo)

    renderTodos(todos, filters)
    
    e.target.elements.firstName.value = ''
})

//1. Create a checkbox and setup event listener -> "Hide completed"
//2. Create new hideCompleted filter (default false)
//3. Update hideCompleted and rerender list on checkbox change
//4. Setup render Todos to remove completed items

document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = true
    renderTodos(todos, filters)
})