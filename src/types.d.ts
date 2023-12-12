
interface TodoType {
    id: string | number ;
    task: string;
  isDone:boolean
  }

  interface ITodoList {
    todos:TodoType[];
    toggleTodo:ToggleFn;
    deleteTodo:DeleteFn
  }

  type AddFn = (text:string) => void; // işlem yapan bir fonksiyon oldugu için void ekledik

  type ToggleFn =(item:TodoType)=> void;

  type DeleteFn =(id: string | number ) => void ;