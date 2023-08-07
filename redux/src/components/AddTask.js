import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/action/taskAction'

const AddTask = () => {
    const [task, setTask]=useState("")
    const dispatch =useDispatch()
    
    const handleSubmit= () => {
        if (task) {
            dispatch(addTask(task))
            setTask("")
        }else {
            alert("Please add a task")
        }
    }


  return (
    <div className='ad '>
        <input className='todo-input' type="text"
        value={task}
        onChange={(e)=> setTask(e.target.value)}/>
        <button className='todo-button' onClick={handleSubmit}> Add Task</button>
    </div>
  )
}

export default AddTask