import React from 'react'
import TaskGenerator from './TaskGenerator'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";

const TaskContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
        <h1 className='text-5xl font-medium text-accent pb-5'>Taskly</h1>
        <div className='h-100 w-100 bg-neutral rounded-2xl shadow-2xl px-5 py-5'>
            <div className='flex shadow-2xl'>
                <input type="text" className='border-l-1 border-t-1 border-b-1 border-gray-200 flex-1 h-12 rounded-l-lg  pl-3 outline-none text-lg'/>
                <button className='text-white px-5 h-12 bg-secondary rounded-r-lg border-l-1 border-t-1  border-b-1 border-secondary font-medium'>Add Task</button>
            </div>

            <div className='bg-secondary text-white w-full h-12 mt-5 mb-3 flex items-center rounded-lg'>
                <MdCheckBoxOutlineBlank className='mx-2' />
                <span className='flex-1 align-center font-medium'>Testing Lang po</span>
                <HiPencilSquare className='mr-4' size={22}/>
                <FaTrashAlt className='mr-4' size={18}/>
            </div>
            
        </div>
    </div>
  )
}

export default TaskContainer