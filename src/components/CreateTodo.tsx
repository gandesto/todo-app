import { useState } from "react";
import { TodoTitle } from "../types";


interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void =>{
        event.preventDefault()
        saveTodo({ title: inputValue})
        setInputValue('')
    }
    const handleOnChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ):void => { setInputValue(evt.target.value)}

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='new-todo'
                value={inputValue}
                onChange={handleOnChange}
                placeholder='what do you want to do?'
                autoFocus
            />
        </form>
    )
}