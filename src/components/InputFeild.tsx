import React from 'react'
import "./InputFeild.css"

interface Props {
    toDo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>,
    addItem: (event: React.FormEvent)=>void,
}

const InputFeild: React.FC<Props> = ({toDo, setToDo, addItem}) => {
  return (
    <div className='form-container'>
    <form className='form' onSubmit={addItem}>
      <input 
      value={toDo}
      name="toDo"
      onChange={(event) => setToDo(event.target.value)}
      className='todo-input' 
      type="text" 
      placeholder='Enter a Task' />
      <button className='input-btn'>GO</button>
    </form>
  </div>
  )
}

export default InputFeild