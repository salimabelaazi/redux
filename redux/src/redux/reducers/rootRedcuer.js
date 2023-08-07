import {combineReducers} from "redux";
import tasksReducer from "./TaskReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    tasksReducer,
    filterReducer
})

export default rootReducer
