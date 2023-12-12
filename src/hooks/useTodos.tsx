import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodos = (url:string) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (text:string ) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo = async (item:TodoType) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id:string | number ) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [url]);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodos;
