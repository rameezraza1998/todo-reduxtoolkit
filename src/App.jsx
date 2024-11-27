import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./config/redux/reducer/todoSlice";

function App() {
  const todoData = useRef();
  const selector = useSelector((state) => state.Todos.todos);
  const dispatch = useDispatch();

  const addData = (event) => {
    event.preventDefault();
    if (todoData.current.value.trim() !== "") {
      dispatch(
        addTodo({
          title: todoData.current.value,
        })
      );
      todoData.current.value = "";
    }
  };

  const deletelist = (index) => {
    dispatch(
      deleteTodo({
        index,
      })
    );
  };

  const editlist = (index) => {
    const newTitle = prompt("Enter the new title:");
    if (newTitle) {
      dispatch(
        editTodo({
          index,
          newTitle,
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Redux Toolkit Todo App
      </h1>
      <form
        onSubmit={addData}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Enter todo"
          ref={todoData}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
      <div className="bg-white shadow rounded-lg p-6 w-3/4 mx-auto">
        {selector.length > 0 ? (
          <ol className="list-decimal list-inside space-y-4">
            {selector.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:shadow-md"
              >
                <span className="text-gray-800 font-medium">{item.title}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => deletelist(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editlist(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <h2 className="text-center text-gray-500">No items found.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
