import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TodoItem } from './models/Todo.model';

const App: React.FunctionComponent = () => {

  const [todos, setTodos] = useState<TodoItem[]>([
      //default starting state
      {id: 't1', text: 'Empty dishwasher'},
      {id: 't2', text: 'Call mom'},
      {id: 't3', text: 'Renew car registration'},
      {id: 't4', text: 'Walk the dog'}
  ]);

  const todoAddHandler = (text: string) => {
    console.log('todoAddHandler:', text);
    setTodos(previousTodos => {
      return [...previousTodos, {id: Math.random().toString(), text: text}]
    });
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(previousTodos => {
      return previousTodos.filter(item => (item.id !== id));
    });
  }

  return (
    <div className="App">
      <TodoInput onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />      
    </div>
  );
}

export default App;
