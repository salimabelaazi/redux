export const getTasksByVisibilityFilter =(tasks, visibilityFilter) => {
    switch(visibilityFilter){
        case "Done":
            return tasks.filter(task => task.isDone === true)
            case "NotDone":
                return tasks.filter(task =>task.isDone === false)
        default:
            return tasks
    }
}