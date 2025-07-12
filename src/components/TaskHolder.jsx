import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';

const TaskHolder = () => {

  const [isChecked, setIsChecked] = useState(false)

  const handleClickTask = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='bg-secondary text-white w-full h-12 mt-5 mb-3 flex items-center rounded-lg'>
        <span className='mx-2 cursor-pointer' onClick={handleClickTask}>{isChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>} </span>
        <span className='flex-1 align-center font-medium cursor-pointer' onClick={handleClickTask}>{isChecked ? <span className=' line-through'>Testing Lang po</span> : <span>Testing Lang po</span> }</span>
        <HiPencilSquare className='mr-4' size={22}/>
        <FaTrashAlt className='mr-4' size={18}/>
    </div>
  )
}

export default TaskHolder