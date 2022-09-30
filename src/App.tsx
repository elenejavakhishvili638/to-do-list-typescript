import React, {useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {Todo} from "./components/model"
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  // const [compelted, setCompleted] = useState

  const addItem = (event: React.FormEvent) => {
    event.preventDefault()
    if(toDo) {
      setTodos([...todos, {id: Date.now(), todo: toDo, isDone: false}])
      setToDo("")
    }
   
  }
  // console.log(todos)

return (
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
  />
</div>
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