const initState = [
     {
          id: 1,
          name: "Learn Yoga",
          completed: false,
          priority: "Medium",
     },
     {
          id: 2,
          name: "Learn Redux",
          completed: true,
          priority: "Low",
     },
     {
          id: 3,
          name: "Learn React",
          completed: false,
          priority: "High",
     },
];

const todoListReducer = (state = initState, action) => {
     console.log("reducer todo lít run");
     console.log(state);

     switch (action.type) {
          case "todoList/addTodo":
               return [...state, action.payload];
          case "todoList/toggleToddoStatus":
               return state.map((todo) => {
                    return todo.id === action.payload
                         ? { ...todo, completed: !todo.completed }
                         : todo;
               });
          default:
               return state;
     }
};

export default todoListReducer;
