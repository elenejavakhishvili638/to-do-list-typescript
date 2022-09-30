import React, { useEffect, useRef, useState } from 'react'
import "./SingleToDo.css"
import {Todo} from "./model"
import {RiDeleteBin7Fill} from "react-icons/ri"
import {AiFillEdit} from "react-icons/ai"
import {TiTick} from "react-icons/ti"
import { Draggable } from 'react-beautiful-dnd'

interface Props {
    todos: Todo[]
    item: Todo
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    index: number
}

const SingleToDo: React.FC<Props> = ({item, todos, setTodos, index}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editText, setEditText] = useState<string>(item.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const deleteItem = (itemId: number) => {
        const list = todos.filter((item) => item.id !== itemId)
        setTodos(list)
    }

    const editItem = (id: number) => {
        if(!edit && !item.isDone) {
            setEdit(true)
            
        }
        
    }

    const handleClick = (id: number) => {
        console.log(id)
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
        // setCompleted(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleSubmit = (event: React.FormEvent, id: number) => {
        event.preventDefault()
        const newList = todos.map((item) => item.id === id ? {...item, todo: editText} : item)
        setTodos(newList)
        setEdit(false)
    }

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
        {(provided) => (
    <form className='task-container' onSubmit={(event) => handleSubmit(event, item.id)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
        {edit ? (
            <input ref={inputRef} className='task-input' value={editText} onChange={(event) => {setEditText(event.target.value)}} />
        ) : (
            <span className={item.isDone ? "task" : ""}>{item.todo}</span>

        )}
        <div className='icon-container'>
            <span className='icon'><RiDeleteBin7Fill onClick={() => deleteItem(item.id)} /></span>
            <span className='icon'><AiFillEdit onClick={() => editItem(item.id)} /></span>
            <span className='icon'><TiTick onClick={() => handleClick(item.id)} /></span>
        </div>
    </form>
        )}
    </Draggable>
  )
}

export default SingleToDo