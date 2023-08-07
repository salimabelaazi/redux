import { SET_FILTER } from "../action/actionTypes"

const initialState={
    visibilityFilter: "all"
}
 const filterReducer=(state = initialState, {type,payload }) => {
    switch (type){
        case SET_FILTER:
            return{
                ...state,
                visibilityFiletr: payload
            }
            default:
                return state
    }
 }
 export default filterReducer