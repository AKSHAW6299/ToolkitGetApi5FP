import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/slices/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.todo);
  console.log(data);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto px-5 py-4">
      <h1 className="text-center text-xl font-semibold">Todo List</h1>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center">Error loading data</p>}

      {data && (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border">ID</th>
              <th className="border">Title</th>
              <th className="border">User ID</th>
              <th className="border">Done</th>
            </tr>
          </thead>

          <tbody>
            {data.map((todo) => (
              <tr key={todo.id}>
                <td className="border text-center">{todo.id}</td>
                <td className="border">{todo.title}</td>
                <td className="border text-center">{todo.userId}</td>
                <td className="border text-center">
                  {todo.completed ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
