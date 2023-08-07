import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completetask, editTask } from '../redux/action/taskAction'
import { EDIT_TASK } from '../redux/action/actionTypes'

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.description)
  const handleEdit = (e) => {
    const editedTask = {
      id: task.id,
      description: editValue,
      isDone: false
    }
    dispatch(editTask(editedTask))
    setIsEditing(false)
  }
  // console.log(isEditing);

  return (
    <div className={task.isDone ? "complete" : ""}>

      {isEditing ? (
        <form onSubmit={handleEdit}>
          < input className='todo-input' type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)} />
          <button className='todo-button'> save </button>
        </form>
      ) : (
        <div className='todo-row'>
          <p onClick={() => dispatch(completetask(task))}>{task.description}</p>
          <button className='todo-button' onClick={() => setIsEditing(true)}>Edit</button>
          </div>

          )
      }
        </div>


      )


      }

