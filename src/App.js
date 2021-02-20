import React from 'react'
import TodoList from './todo/TodoList'

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Купить хдеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'}
    ]

    function toggleTodo(id){
        console.log('todo id ', id)
    }

  return (
      <div className='wrapper'>
          <h1>React tutorial</h1>

          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
      </div>
  )
}

export default App;
