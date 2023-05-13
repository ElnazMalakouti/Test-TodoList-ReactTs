import { MdDelete } from 'react-icons/md'
import { MdModeEditOutline } from 'react-icons/md'

const TodoCard = () => {
    return (
        <>
            <div className="w-[450px] h-[65px] p-[16px] text-[20px] border border-[#959595] flex justify-between items-center">

                <div className="flex justify-center items-center gap-[16px]">

                    <p>1.</p>
                    <p>First Item Text</p>

                </div>

                <div className="flex justify-center items-center gap-[16px] text-[26px] text-[#686B6F]">

                    <button><><MdModeEditOutline /></></button>

                    <button><><MdDelete /></></button>

                </div>

            </div>
        </>
    )
}

export default TodoCard 