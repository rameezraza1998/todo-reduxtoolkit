import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todos: [
      // {
      //   title: "hello world",
      //   id: nanoid(),
      // },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    deleteTodo: (state, action) => {
      // here we destructring the action payload

      const { index } = action.payload;
      state.todos.splice(index, 1);
    },
    editTodo: (state, action) => {
      const { index, newTitle } = action.payload;
      state.todos[index].title = newTitle;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
