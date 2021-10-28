import React, { useRef } from 'react';

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
            <div>
                <label htmlFor='new-todo'>New task</label>
                <input type="text" id='new-todo' ref={textInputRef} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoInput;