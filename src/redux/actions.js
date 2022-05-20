// const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload:  {
//         id:4,
//         name:'Learn Love',
//         completed: false,
//         priority:'High'
//     }

// }

export const addTodo = (data) => {
     return {
          type: "todoList/addTodo",
          payload: data, 
     };
};

export const toggleTodoStatus = (todoId) => {
     return {
          type: "todoList/toggleToddoStatus",
          payload: todoId,
     };
};

export const searchFilterChange = (text) => {
     return {
          type: "filters/searchFilterChange",
          payload: text,
     };
};

export const statusFilterChange = (status) => {
     return {
          type: "filters/statusFilterChange",
          payload: status,
     };
};

export const prioritiesFilterChange = (priorities) => {
     return {
          type: "filters/prioritiesFilterChange",
          payload: priorities,
     };
};
