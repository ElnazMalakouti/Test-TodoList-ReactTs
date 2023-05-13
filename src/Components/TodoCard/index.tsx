import { MdDelete } from 'react-icons/md'
import { MdModeEditOutline } from 'react-icons/md'
import { Itodo } from '../../Interfaces/Itodo'
import { IeditMode } from '../../Interfaces/IeditMode'

interface Iprops extends Itodo {
    index: number
    editMode: IeditMode
    setEditMode: Function
    deleteTodo: Function
}

const TodoCard = ({ index, Id, Text, editMode, setEditMode, deleteTodo }: Iprops) => {
    return (
        <>
            <div className="w-[450px] h-[65px] p-[16px] text-[20px] border border-[#959595] flex justify-between items-center">

                <div className="flex justify-center items-center gap-[16px]">

                    <p>{index + 1}.</p>
                    <p>{Text}</p>

                </div>

                <div className="flex justify-center items-center gap-[16px] text-[26px] text-[#686B6F]">

                    <button
                        onClick={() => setEditMode({
                            Id: Id,
                            isEnable: true
                        })}
                    >
                        <><MdModeEditOutline /></>
                    </button>

                    <button 
                        onClick={() => {
                            deleteTodo(Id)
                        }}
                    >
                        <><MdDelete /></>
                    </button>

                </div>

            </div>
        </>
    )
}

export default TodoCard 