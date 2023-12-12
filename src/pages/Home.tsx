import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodos";

const Home:React.FunctionComponent = () => {
  const url = "https://656f3f6c6529ec1c62379ea7.mockapi.io/todos";
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos(url);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
 export default Home