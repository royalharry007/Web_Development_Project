import { useState } from 'react'
import './App.css'
import { TodoProvider } from './assets/context/TodoContext'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todomsg) =>{

   setTodos((prevTodo) => [{id: Date.now(), ...todomsg},...prevTodo] )

  }

  const updateTodo = (id,todo) =>{

    setTodos((prev) => prev.map((prevTodo) =>{ prevTodo.id == id ? todo : prevTodo }))

  }
  
  const deleleteTodo = (id) =>{
    setTodos((prev) =>  prev.filter())
  }

  const toggleComplete = (id) =>{}




  return (

    <TodoProvider value={{todos , addTodo, updateTodo, deleleteTodo , toggleComplete}}>
      <div className=' w-full h-screen bg-slate-800 fixed'>
        <div className='mt-10 text-center'>
          <h1 className=' text-white text-2xl'> Manages your todos here...</h1>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
