import React, { useState, useId } from 'react';
import './App.css';
import AddOrEditForm from './Components/AddOrEditForm';
import TodoCard from './Components/TodoCard';
import { Itodo } from './Interfaces/Itodo';
import { IeditMode } from './Interfaces/IeditMode';

function App() {

  const [todoList, setTodoList] = useState<Itodo[]>([])

  const [editMode, setEditMode] = useState<IeditMode>({
    isEnable: false,
    Id: null
  })

  const AddTodo = (text: string) => {
    const Id = Date.now()
    const newTodo: Itodo = {
      Id: Id,
      Text: text
    }
    setTodoList([...todoList, newTodo])
  }

  const EditTodo = (Id: number, newText: string) => {
    const tempTodoList = todoList.map(item => {
      if (item.Id === Id) {
        item.Text = newText
      }
      return item
    })
    setTodoList(tempTodoList)
    setEditMode({
      ...editMode,
      Id: null,
      isEnable: false
    })
  }

  const deleteTodo = (Id: number) => {
    const tempTodoList = todoList.filter(item => item.Id !== Id)
    setTodoList(tempTodoList)
    if (editMode.Id === Id) {
      setEditMode({
        ...editMode,
        Id: null,
        isEnable: false
      })
    }
  }


  return (
    <>
      <div className='w-full'>
        <div className='w-full lg:w-[75%] p-[16px] lg:py-[40px] lg:px-[60px] border border-[#959595] flex flex-col gap-[30px] justify-start items-start overflow-auto'>
          <p className='text-[22px] text-bold'>{editMode.isEnable ? 'Update' : 'Add'} Mode</p>

          <div className='w-full px-[20px] flex flex-col md:flex-row gap-[16px] justify-center lg:justify-between items-center'>

            <div className='w-full lg:h-full lg:mb-auto flex justify-start items-start'>
              <AddOrEditForm
                editMode={editMode}
                setEditMode={setEditMode}
                todoList={todoList}
                setTodoList={setTodoList}
                AddTodo={AddTodo}
                EditTodo={EditTodo}
              />
            </div>

            <div className='w-full pb-[16px] flex flex-col justify-center items-center gap-[8px]'>
              {
                todoList && todoList.map((item, index) => {
                  return <TodoCard
                    index={index}
                    key={item.Id}
                    Id={item.Id}
                    Text={item.Text}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    deleteTodo={deleteTodo}
                  />
                })
              }
            </div>

          </div>

        </div>
      </div>
    </>
  );


}

export default App;
