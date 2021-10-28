import React, { useRef } from 'react';
import './TodoInput.css';

type TodoInputProps = {
    onAddTodo: (todoText: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const textInput = textInputRef.current!.value;

        props.onAddTodo(textInput);        
    };

    return(
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='new-todo'>Add new task</label>
                <input type="text" id='new-todo' ref={textInputRef} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoInput;