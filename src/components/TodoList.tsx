import React from 'react'
import "./TodoList.css"
import {Todo} from "./model"

interface Props {
    todos: Todo[]
}

const TodoList: React.FC<Props> = ({todos}) => {
    console.log(todos)
  return (
    <div>
        <div>
            {todos && todos.map((item) =>
               { return <div><ul><li>{item.todo}</li></ul></div>}
            )}
        </div>
    </div>
  )
}

export default TodoList