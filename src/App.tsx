import React from 'react';
import TodoList from './components/TodoList';

const App: React.FunctionComponent = () => {

  const todos = [
      {id: 't1', text: 'Empty dishwasher'},
      {id: 't2', text: 'Call mom'},
      {id: 't3', text: 'Renew car registration'},
      {id: 't4', text: 'Walk the dog'}
  ];

  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
