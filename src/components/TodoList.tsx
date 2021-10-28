import React from 'react';
import { TodoItem } from '../models/Todo.model';

interface TodoListProps {
    items: TodoItem[]
};

const TodoList: React.FC<TodoListProps> = props => {    

    return(
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
    
}

export default TodoList;