import React from 'react'
import "./TodoList.css"
import {Todo} from "./model"
import SingleToDo from './SingleToDo'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
  completed: Todo[]
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos, completed, setCompleted}) => {
  // console.log(todos)

  // className='main-container'

  return (
    <div className='main-container'>
      <Droppable droppableId='todolist'>
        {(provided, snapshot) => (
          <div className={`part-one ${snapshot.isDraggingOver ? "drag-active" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
            <h1>Active tasks</h1>
              <div className='to-do-list-contianer'>                  
                {todos && todos.map((item, index) => (
                  <SingleToDo 
                    index={index}
                    item={item}
                    key={item.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                ) )}
              </div>
              {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='todoremove'>
        {(provided, snapshot) => (
           <div className={`part-two ${snapshot.isDraggingOver ? "drag-complete" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
           <h1>Complete tasks</h1>
              <div className='completed-list-container'>
              {completed && completed.map((item, index) => (
                  <SingleToDo
                    index={index} 
                    item={item}
                    key={item.id}
                    todos={completed} 
                    setTodos={setCompleted}
                  />
                ) )}
           </div>
           {provided.placeholder}
          </div>
        )}
      </Droppable>
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