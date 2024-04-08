import { useRef } from 'react'
import './styles.css'

interface Todoformprops {
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>,
    handleTodos: (e: React.FormEvent) => void
}

const Todotacksform = ({todo, setTodo, handleTodos}: Todoformprops) => {

   const inputRef = useRef<HTMLInputElement>(null)
    

  return <form className='todo_form' onSubmit={(e)=>{
       handleTodos(e)
       inputRef.current?.blur()
      }}>
     <input type='text' className='input_form' placeholder='Add tack...' 
        ref={inputRef}
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}/>
     <input type='button' value='Add' className='form_btn' />
  </form>
}

export default Todotacksform
