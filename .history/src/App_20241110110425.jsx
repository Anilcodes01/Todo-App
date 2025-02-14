import { useState } from 'react'
import './App.css'
import { MdWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import ToolBar from './components/ToolBar'
import NavBar from './components/NavBar'
import TaskSpace from './components/TaskSpace'
import Modal from './components/Modal'
import ProgressSpace from './components/ProgressSpace'
import MotivationSpace from './components/MotivationSpace'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='w-[100vw] overflow-hidden p-2 gap-2 h-[100vh] grid grid-cols-[50px_1100px_60px_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <ToolBar bgColor={darkMode?'bg-gray-800' : 'bg-gray-100'} Button={<button className="w-10 h-10 rounded-full flex items-center justify-center" onClick={() => setShowModal(true)}><IoMdAddCircle size={40} /></button>} />
      <NavBar Button={<button className="w-10 h-10 rounded-full flex items-center justify-center" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdWbSunny size={25} /> : <AiFillMoon size={25} />}</button>} bgColor={darkMode?'bg-gray-800' : 'bg-gray-100' }/>
      <TaskSpace bgColor={darkMode?'bg-gray-800' : 'bg-gray-100' } />
      <ProgressSpace bgColor={darkMode?'bg-gray-800' : 'bg-gray-100' } /> 
      <MotivationSpace bgColor={darkMode?'bg-gray-800' : 'bg-gray-100' } />
      <Modal onClick={()} Show={showModal?true:false} />
    </div>
  )
}

export default App
