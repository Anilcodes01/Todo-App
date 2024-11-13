import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[1fr_2fr_1fr_2fr_1fr_2fr] grid-rows-10'>
      <div className='bg-orange-500 rounded-xl row-span-10 1'></div>
      <div className='col-span-* row-span-1 rounded-xl bg-blue-500 2'></div>
      <div className='col-span-6 row-span-9 rounded-xl bg-yellow-500 3'></div>
      <div className='col-span-1 row-span-9 rounded-xl bg-green-500'></div>
      <div className='col-span-2 row-span-9 rounded-xl bg-red-500'></div>
    </div>
  )
}

export default App
