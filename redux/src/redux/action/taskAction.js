import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, SET_FILTER } from "./actionTypes"

export const addTask = (task) => {
    return{
        type: ADD_TASK,
        payload: task
    }

}
export const completetask = (task) => {
    return {
        type:COMPLETE_TASK,
        payload: task
    }
}

export const editTask = (task) => {
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}
