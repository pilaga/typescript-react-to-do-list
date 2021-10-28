import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App: React.FunctionComponent = () => {

  const todos = [
      {id: 't1', text: 'Empty dishwasher'},
      {id: 't2', text: 'Call mom'},
      {id: 't3', text: 'Renew car registration'},
      {id: 't4', text: 'Walk the dog'}
  ];

  const todoAddHandler = (text: string) => {
    console.log('todoAddHandler:', text);
  }

  return (
    <div className="App">
      <TodoInput onAddTodo={todoAddHandler} />
      <TodoList items={todos} />      
    </div>
  );
}

export default App;
