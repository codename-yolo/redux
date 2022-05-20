import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    name: 'Learn Yoga',
    completed: false,
    priority: 'Medium',
  },
  {
    id: 2,
    name: 'Learn Redux',
    completed: true,
    priority: 'Low',
  },
  {
    id: 3,
    name: 'Learn React',
    completed: false,
    priority: 'High',
  },
]

const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      state.map((todo) => {
        return todo.id === action.payload
          ? (todo.completed = !todo.completed)
          : todo
      })
    },
  },
})

export default todoSlice
