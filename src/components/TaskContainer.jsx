import React, { useEffect, useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import { useLocalStorage } from '@uidotdev/usehooks';
import { FaCheckToSlot } from "react-icons/fa6";


const TaskContainer = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskInput, setTaskInput] = useState('');
  const [editTaskInput, setEditTaskInput] = useState('')

useEffect(() => {
  const updateAfterRefreshTasks = tasks.filter(task => task.isTaskChecked === false)
  setTasks(updateAfterRefreshTasks)
}, []);

  const handleSubmitTask = () => {
    if (taskInput.trim() === "") return;
    setTasks(prev => [...prev, { text: taskInput, isTaskChecked: false, isEditing: false }]);
    setTaskInput('');
  };

  const handleClickTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isTaskChecked: !task.isTaskChecked } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTaskAfterDelete = tasks.filter((_, i) => index !== i);
    setTasks(updatedTaskAfterDelete)
  } 

  const handleEditTask = (index) => {
    const isAnyTaskEditing = tasks.some(task => task.isEditing)

    if(isAnyTaskEditing) return;

    setEditTaskInput(tasks[index].text)

    const editTasks = tasks.map((task, i) => ({
          ...task,
          isEditing: i === index
    }))
    setTasks(editTasks)
  }
  
const handleSubmitEditedTask = (index) => {
  if (editTaskInput.trim() === "") return;

  const updatedTasks = tasks.map((task, i) => {
    if (i === index) {
      return {
        ...task,
        text: editTaskInput,
        isEditing: false
      };
    }
    return task;
  });

  setTasks(updatedTasks);
};

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='text-5xl font-medium text-accent pb-5 '>Taskly</h1>
      <div className='h-fit w-100 bg-neutral rounded-2xl shadow-2xl px-5 py-5'>
        <div className='flex shadow-2xl p'>
          <input
            type="text"
            value={taskInput}
            className='border-l-1 border-t-1 border-b-1 border-gray-200 flex-1 h-12 rounded-l-lg  pl-3 outline-none text-lg'
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className='text-white px-5 h-12 bg-secondary rounded-r-lg border-l-1 border-t-1 border-b-1 border-secondary font-medium'
            onClick={handleSubmitTask}
          >
            Add Task
          </button>
        </div>

        {tasks.map((task, index) => (
          <div key={index} className='bg-secondary text-white w-full h-12 mt-5 mb-3 flex items-center rounded-lg'>
            <span className='mx-2 cursor-pointer' onClick={() => handleClickTask(index)}>
              {task.isTaskChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </span>

            {task.isEditing ? 
            (
            <>
            <input
            type="text"
            value={editTaskInput}
            className='flex-1 font-medium focus:outline-none border-b-1'
            onChange={(e) => setEditTaskInput(e.target.value)} />
            <FaCheckToSlot className='mr-4 ml-2' size={22} onClick={() => handleSubmitEditedTask(index)} ></FaCheckToSlot>
            <FaTrashAlt className='mr-4' size={18} onClick={() =>handleDeleteTask(index)}/>
            </>

            ) 
            : 
            (
              <>
            <span className='flex-1 font-medium cursor-pointer' onClick={() => handleClickTask(index)}>
              {task.isTaskChecked ? <span className='line-through'>{task.text}</span> : <span>{task.text}</span>}
            </span>

            <HiPencilSquare className='mr-4' size={22} onClick={() => handleEditTask(index)}/>
            <FaTrashAlt className='mr-4' size={18} onClick={() => handleDeleteTask(index)}/>
              </>

            )
            }

            {/* <span className='flex-1 font-medium cursor-pointer' onClick={() => handleClickTask(index)}>
              {task.isTaskChecked ? <span className='line-through'>{task.text}</span> : <span>{task.text}</span>}
            </span>

            <HiPencilSquare className='mr-4' size={22} onClick={() => handleEditTask(index)}/>
            <FaTrashAlt className='mr-4' size={18} onClick={() =>handleDeleteTask(index)}/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
