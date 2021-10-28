import React, { useRef } from 'react';

const TodoInput: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const textInput = textInputRef.current!.value;
        console.log(textInput);

        
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