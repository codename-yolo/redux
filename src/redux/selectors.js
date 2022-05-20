// export const todoListSelector = (state) => {
//      const todoRemaining = state.todoList.filter((todo) => {
//           const todoName = todo.name.toLowerCase();
//           const searchText = state.filters.search.toLowerCase();
//           return todoName.includes(searchText);
//      });
//      return todoRemaining;
// };

// export const searchTextSelector = (state) => state.filters.search;
import { createSelector } from '@reduxjs/toolkit'

export const searchTextSelector = (state) => {
  return state.filters.search
}
export const todoListSelector = (state) => state.todoList
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    console.log('todosRemainingSelector run')
    return todoList.filter((todo) => {
      const todoName = todo.name.toLowerCase()
      const searchInput = searchText.toLowerCase()
      if (status === 'All') {
        return priorities.length
          ? todoName.includes(searchInput) && priorities.includes(todo.priority)
          : todoName.includes(searchInput)
      }
      return (
        todoName.includes(searchInput) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  },
)
