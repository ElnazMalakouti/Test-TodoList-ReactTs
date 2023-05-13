import React, { useState } from 'react';
import './App.css';
import AddOrEditForm from './Components/AddOrEditForm';
import TodoCard from './Components/TodoCard';

function App() {

  const [formMode, setFormMode] = useState<string>('Add')


  return (
    <>
      <div className='w-[75%] h-[30%] py-[40px] px-[60px] border border-[#959595] flex flex-col gap-[30px] justify-start items-start'>
        <p className='text-[22px] text-bold'>{formMode === 'Add' ? 'Add' : 'Update'} Mode</p>

        <div className='w-full h-full px-[20px] flex justify-between items-center'>

          <div className='w-full h-full mb-auto flex justify-start items-start'>
            <AddOrEditForm
              formMode={formMode}
              setFormMode={setFormMode}
            />
          </div>

          <div className='flex flex-col justify-center items-center gap-[8px]'>
            <TodoCard />
            <TodoCard />
            <TodoCard />
          </div>

        </div>

      </div>
    </>
  );


}

export default App;
