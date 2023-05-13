import Button from "../Button"
import { Itodo } from "../../Interfaces/Itodo"
import { IeditMode } from "../../Interfaces/IeditMode"
import { useEffect, useState } from "react"

interface Iprops {
    editMode: IeditMode
    setEditMode: Function
    todoList: Itodo[]
    setTodoList: Function
    AddTodo: Function
    EditTodo: Function
}

const AddOrEditForm = ({ editMode, setEditMode, todoList, setTodoList, AddTodo, EditTodo }: Iprops) => {

    const [todoText, setTodoText] = useState<string>('')

    useEffect(() => {
        if (editMode.isEnable) {
            const tempEditTodo = todoList.find(item => item.Id === editMode.Id)
            tempEditTodo && setTodoText(tempEditTodo?.Text)
        } else {
            setTodoText('')
        }
    }, [editMode])

    return (
        <>
            <div className="w-[328px] h-[162px] p-[24px] border border-[#959595] shadow-xl">

                <form className="w-full h-full flex flex-col justify-between items-center">

                    <input
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        className="w-full rounded-[8px] p-[8px] border border-[#D4D4D4]"
                        placeholder="Title..."
                    />
                    <Button
                        onClick={() => {
                            editMode.isEnable
                                ?
                                EditTodo(editMode.Id, todoText)
                                :
                                AddTodo(todoText);
                            setTodoText('')
                        }}
                    >{editMode.isEnable ? 'Update' : 'Add'}</Button>

                </form>

            </div >
        </>
    )
}

export default AddOrEditForm