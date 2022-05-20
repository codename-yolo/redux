import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";


const rootReducer = (state = {}, action) => {
     console.log('rootReducer run',state,action);
     let objNew = {
          filters: filtersReducer(state.filters, action),
          todoList: todoListReducer(state.todoList, action),
     };
     console.log(objNew);
     return objNew
};


// const rootReducer = combineReducers({
//      filters: filtersReducer,
//      todoList: todoListReducer,
// });
export default rootReducer;
