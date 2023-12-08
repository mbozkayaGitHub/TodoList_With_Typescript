import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos , toggleTodo}) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} toggle={} />
      ))}
    </ul>
  );
};

export default TodoList;
