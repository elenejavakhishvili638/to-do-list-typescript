import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {Todo} from "./components/model"
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from "react-beautiful-dnd"

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completed, setCompleted] = useState<Todo[]>([])

  const addItem = (event: React.FormEvent) => {
    event.preventDefault()
    if(toDo) {
      setTodos([...todos, {id: Date.now(), todo: toDo, isDone: false}])
      setToDo("")
    }
   
  }
  // console.log(todos)

  const onDragEnd = (result: DropResult) => {
    console.log(result)
    const {source, destination} = result
    if(!destination) {
      return
    } else if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    } 

    let add, 
      active = todos,
      complete = completed

      if(source.droppableId === 'todolist') {
        add=active[source.index]
        active.splice(source.index, 1)
      } else {
        add=complete[source.index]
        complete.splice(source.index, 1)
      }

      if(destination.droppableId === 'todolist') {
        active.splice(destination.index, 0, add)
      } else {
        complete.splice(destination.index, 0, add)
      }

      setCompleted(complete)
      setTodos(active)
  }

return (
  <DragDropContext onDragEnd={onDragEnd}>
<div className="App">
  <div className='heading'>
    <h1>Taskify</h1>
  </div>
  <InputFeild 
    toDo={toDo}
    setToDo={setToDo}
    addItem={addItem}
  />
  <TodoList
    todos={todos}
    setTodos={setTodos}
    completed={completed}
    setCompleted={setCompleted}
  />
</div>

  </DragDropContext>
);
}

export default App;



// let name: string
// //union
// let age: number | string
// let isStudent: boolean
// let hobbies: string[]
// let role: [number, string]

// //for object we create type - alias and interface; in interface it is easier to use extend type is harder
// type Person = {
// name: string,
// age?: number
// }

// interface Man {
// name: string,
// age?: number
// }

// interface Child extends Man {
// proffession: string
// }

// let person: Person = {
// name: "dd",
// }

//function

// let print = (name: string) => console.log("eloo")

// function printName(name:string) {
// console.log(name)
// }

// printName("elene")

//type unkown, never - does not return anything, void return undefiend