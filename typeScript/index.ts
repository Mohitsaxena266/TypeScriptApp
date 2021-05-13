import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const toDo = response.data as Todo;

  const id = toDo.id;
  const title = toDo.title;
  const completed = toDo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  //   let todoObj: Todo = {
  //     id,
  //     title,
  //     completed,
  //   };

  console.log(`
  id value  ${id},
  title value  ${title},
  completed   ${completed}

  `);
};
