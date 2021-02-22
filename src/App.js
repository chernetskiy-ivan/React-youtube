import React,{useEffect} from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from "./todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
        })
    }, [])

    function toggleTodo(id){
        setTodos(todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id
        ))
    }

    function addTodo(title){
        setTodos(todos.concat([{
            title: title,//можно просто записать title,
            id: Date.now(),
            completed: false
        }]))
    }

  return (
      <Context.Provider value={{removeTodo: removeTodo}}>
          <div className='wrapper'>
              <h1>React tutorial</h1>
              <AddTodo onCreate={addTodo}/>
              {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>No todos</p>}

          </div>
      </Context.Provider>
  )
}

export default App;
