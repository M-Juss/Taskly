import React, { useState } from 'react'
import TaskGenerator from './TaskGenerator'
import TaskHolder from './TaskHolder'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";


const TaskContainer = () => {

    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState('')
    const [isTaskChecked, setIsTaskChecked] = useState(false)
  
    const handleClickTask = (index) => {
      setIsTaskChecked(!isTaskChecked)
    }

  
    const handleSubmitTask = () => {
      if(taskInput === "") return
      setTasks(prev => [...prev, taskInput])
      setTaskInput('')
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
        <h1 className='text-5xl font-medium text-accent pb-5 '>Taskly</h1>
        <div className='h-fit w-100 bg-neutral rounded-2xl shadow-2xl px-5 py-5'>

          <div className='flex shadow-2xl'>
            <input 
            type="text" 
            value={taskInput}
            className='border-l-1 border-t-1 border-b-1 border-gray-200 flex-1 h-12 rounded-l-lg  pl-3 outline-none text-lg'
            onChange={(e) => setTaskInput(e.target.value)}
            />

            <button 
            className='text-white px-5 h-12 bg-secondary rounded-r-lg border-l-1 border-t-1  border-b-1 border-secondary font-medium'
            onClick={handleSubmitTask}
            >Add Task</button>
          </div>

          {tasks.map((task, index) => {
            return(
              <div key={index} className='bg-secondary text-white w-full h-12 mt-5 mb-3 flex items-center rounded-lg'>
                <span className='mx-2 cursor-pointer' onClick={handleClickTask}>{isTaskChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>} </span>
                <span className='flex-1 align-center font-medium cursor-pointer' onClick={handleClickTask}>{isTaskChecked ? <span className=' line-through'>{task}</span> : <span>{task}</span> }</span>
                <HiPencilSquare className='mr-4' size={22}/>
                <FaTrashAlt className='mr-4' size={18}/>
              </div>
            )
          })}


        </div>
    </div>
  )
}

export default TaskContainer