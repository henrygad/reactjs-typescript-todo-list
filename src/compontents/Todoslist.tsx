import Singletodolist from './Singletodolist'
import {Todos} from '../model'

interface Props{
    todos: Todos[],
    setTodos:  React.Dispatch<React.SetStateAction<Todos[]>>,

}

const Todoslist = ({todos, setTodos}: Props) => {
  return <div className="todos_list_container">
    {todos.map(todo =>(  
       <Singletodolist  
        todo={todo}
        todos={todos} 
        setTodos={setTodos}
        key={todo.id}/>
    ))}
  </div>
}

export default Todoslist
