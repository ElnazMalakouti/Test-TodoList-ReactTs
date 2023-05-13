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
      <div className='w-[75%] h-[30%] py-[40px] px-[60px] border border-[#959595] flex flex-col gap-[30px] justify-start items-start'>
        <p className='text-[22px] text-bold'>{editMode.isEnable ? 'Update' : 'Add'} Mode</p>

        <div className='w-full h-full px-[20px] flex justify-between items-center'>

          <div className='w-full h-full mb-auto flex justify-start items-start'>
            <AddOrEditForm
              editMode={editMode}
              setEditMode={setEditMode}
              todoList={todoList}
              setTodoList={setTodoList}
              AddTodo={AddTodo}
              EditTodo={EditTodo}
            />
          </div>

          <div className='flex flex-col justify-center items-center gap-[8px]'>
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
      {console.log(todoList)}
    </>
  );


}

export default App;
