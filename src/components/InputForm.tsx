import React, { useState } from 'react'

interface IInputForm {
  addTodo: AddFn
}

const InputForm:React.FC<IInputForm> = ({addTodo}) => {

  const [task, setTask] = useState("")

  const handleClick= () => {
    addTodo(task);
    setTask("")
  }
  
  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter a value "
        type="text"
        maxLength={40}
        value={task}
        onChange= {(e)=> setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task} //! boş todo göndermeyi engellemek için kullanılır
      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm