import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
    <div className='h-screen w-screen flex items-end p-9' style={{backgroundColor: color}}>
      <div className='flex justify-center bottom-12 insert-x-0 px-2 w-full' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick = {() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >RED
          </button>
          <button
          onClick = {() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          >BLUE
          </button>
          <button
          onClick = {() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          >GREEN
          </button>
          <button
          onClick = {() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "pink"}}
          >PINK
          </button>
          <button
          onClick = {() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "yellow"}}
          >YELLOW
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
