import React from 'react'
import { Task } from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/action/taskAction'
import { getTasksByVisibilityFilter } from '../redux/selector'
import { SET_FILTER } from '../redux/action/actionTypes'


   const   ListTask = () => {
    // const tasks =[
    //     {id: Math.random, description:"workshop", isDone:false},
    //     {id: Math.random, description:"lunch", isDone:true},

    // ]
    const tasks = useSelector(state => state.tasksReducer.tasks)
    const visibilityFilter=useSelector(state => state.filterReducer.visibilityFilter)
     console.log(visibilityFilter);
    const dispatch =useDispatch
    const filtredTasks = getTasksByVisibilityFilter(tasks, visibilityFilter)
    console.log(filtredTasks);

    
  return (
    <div>
      <div>
        <button className='todo-button' onClick={()=> dispatch(setFilter("all"))}>All</button> 
        <button className='todo-button' onClick={()=> dispatch(setFilter("Done"))}>Done</button>
        <button className='todo-button'onClick={()=> dispatch(setFilter("NotDone"))}>NotDone</button>
      </div>

        {filtredTasks.map(task =>{
            return <Task key={task.id} task={task} />

 } )}
    </div>
  )
}

export default ListTask