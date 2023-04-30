import { useState, useReducer, useEffect } from "react";

const cases = {
  addTodo: "add-todo",
  deleteTodo: "delete-todo",
};

function reducer(initialTodos, action) {
  switch (action.type) {
    case cases.addTodo:
      return [...initialTodos, action.newTodo];

    case cases.deleteTodo:
      return initialTodos.filter((t) => t.id !== action.deleteTodo.id);

    default:
      return initialTodos;
  }
}

export default function App() {
  const [initialTodos, updateTodos] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");
  const [todoId, setTodoId] = useState(1);

  function addTodo(e) {
    e.preventDefault();
    setTodoId(todoId + 1);
    updateTodos({
      type: cases.addTodo,
      newTodo: {
        id: todoId,
        date: Date.now(),
        name: todoName,
        complete: false,
      },
    });
    setTodoName("");
    console.log(initialTodos);
  }

  function deleteTodo(todo) {
    console.log("ASDFasdfa");
    updateTodos({
      type: cases.deleteTodo,
      deleteTodo: todo,
    });
    // setTodoName("");
    console.log(initialTodos);
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
      </form>

      {initialTodos.map((item) => (
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          key={item.id}
        >
          <p>{item.name}</p>
          <button onClick={() => deleteTodo(item)}>delete</button>
        </div>
      ))}
    </>
  );
}
