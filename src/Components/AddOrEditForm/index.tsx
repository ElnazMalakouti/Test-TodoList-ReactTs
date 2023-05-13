import Button from "../Button"

interface Iprops {
    formMode: string
    setFormMode: Function
}

const AddOrEditForm = ({ formMode, setFormMode }: Iprops) => {
    return (
        <>
            <div className="w-[328px] h-[162px] p-[24px] border border-[#959595] shadow-xl">

                <form className="w-full h-full flex flex-col justify-between items-center">

                    <input className="w-full rounded-[8px] p-[8px] border border-[#D4D4D4]" placeholder="Title..." />
                    <Button>{formMode === 'Add' ? 'Add' : 'Update'}</Button>

                </form>

            </div>
        </>
    )
}

export default AddOrEditForm