import './styles.css'
import {Todos} from '../model'
import { MdEdit, MdDelete, MdDone} from "react-icons/md";
import { useEffect, useRef, useState } from 'react';


type Props = {
    todo: Todos,
    todos: Todos[],
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
}


const Singletodolist = ({todo, todos, setTodos}: Props) => {
  const [editing, setEditing] = useState<boolean>(false)
  const [edited, setEdited] = useState<string>(todo.todo)
  const editinputRef = useRef<HTMLInputElement>(null)

  const handleDone = (id: number) => {
    setTodos(todos.map((todo )=>(
      todo.id === id? {...todo, isDone: !todo.isDone }: todo
    )))
  }

  const handleDelete = (id: number)=>{
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  const handleEdit = (editing: boolean)=>{
      setEditing(editing)
  }
  const handleUpdateEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault()
      setTodos(()=>todos.map(todo=> (
        todo.id === id?{...todo, todo: edited}: todo
      )))

      setEditing(false)
    
  }

  


  useEffect(()=>{
    editinputRef.current?.focus()
  }, [editing])





  return<form className='todo_list_form' onSubmit={(e)=>{
    handleUpdateEdit(e, todo.id)
  }}>
    {
      editing?(
        <span className='todo_list_text edit'>
          <input type='text' value={edited}  className='edit_input' ref={editinputRef} onChange={(e)=>{
              setEdited(e.target.value)
          }}/>
        </span>
      ):(
        todo.isDone?(
          <s className='todo_list_text'>{todo.todo}</s>
  
        ):(
          <span className='todo_list_text'>{todo.todo}</span>
        )
      )
    }

    <div className='todo_list_action_btn_container'>
      <span className='icon' >
        <MdEdit  size={'1.2em'} onClick={()=>{
           if(!editing && !todo.isDone){
            handleEdit(!editing)
          }
        }}/>
      </span>
      <span className='icon'  onClick={()=>handleDelete(todo.id)}>
         <MdDelete size={'1.2em'}/>
      </span>
      <span className='icon' onClick={()=> handleDone(todo.id)}>
        <MdDone size={'1.2em'}/>
      </span>
    </div>
  </form>
}

export default Singletodolist
