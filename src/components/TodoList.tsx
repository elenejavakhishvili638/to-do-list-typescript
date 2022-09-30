import React from 'react'
import "./TodoList.css"
import {Todo} from "./model"
import SingleToDo from './SingleToDo'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  // console.log(todos)

  // className='main-container'

  return (
    <div className='main-container'>
 <div className='part-one'>
  <h1>Active tasks</h1>
    <div className='to-do-list-contianer'>
      
      {todos && todos.map((item) => (
        <SingleToDo 
          item={item}
          key={item.id}
          todos={todos}
          setTodos={setTodos}
        />
      ) )}
    </div>
 </div>
 <div className='part-two'>
 <h1>Complete tasks</h1>
    <div className='completed-list-container'>
    {todos && todos.map((item) => (
        <SingleToDo 
          item={item}
          key={item.id}
          todos={todos}
          setTodos={setTodos}
        />
      ) )}
 </div>
   
    </div>
    </div>
    
  )
  }

  export default TodoList


  // { return <div className='task-container'>
  //       <ul className='task-list'>
  //         <li className='task'>{item.todo}</li>
  //         <div className='icon-container'>
  //           <RiDeleteBin7Fill className='icon' onClick={() => deleteItem(item.id)} />
  //           <AiFillEdit className='icon' onClick={() => editItem(item.id, item.todo)} />
  //           <TiTick className='icon' />
  //         </div>
  //       </ul>
  //     </div>}