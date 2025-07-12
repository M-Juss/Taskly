import React from 'react'

const TaskGenerator = () => {
  return (
    <div className='flex shadow-2xl'>
        <input type="text" className='border-l-1 border-t-1 border-b-1 border-gray-200 flex-1 h-12 rounded-l-lg  pl-3 outline-none text-lg'/>
        <button className='text-white px-5 h-12 bg-secondary rounded-r-lg border-l-1 border-t-1  border-b-1 border-secondary font-medium'>Add Task</button>
    </div>
  )
}

export default TaskGenerator