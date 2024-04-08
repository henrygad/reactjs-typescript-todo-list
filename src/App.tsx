import { useState } from 'react'
import './App.css'
import Todotacksform from './compontents/Todotacksform'
import Todoslist from './compontents/Todoslist'
import { Todos } from './model'


const App = () => {
    const [todo, setTodo] =  useState<string>('')
    const [todos, setTodos] = useState<Todos[]>([])


    const handleTodos = (e: React.FormEvent)=>{
      e.preventDefault()

      if(todo){
        setTodos([...todos, {id: Date.now(), todo, isDone: false}])

        setTodo('')
      }
     
    }



  return (
    <div className='App'>
      <h1>Tackcifly</h1>
      <Todotacksform todo={todo} setTodo={setTodo}  handleTodos={handleTodos}/>
      <Todoslist todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
