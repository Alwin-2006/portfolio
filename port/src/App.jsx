import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Techstack from './components/Techstack'

function App() {

  return (
    <>
      <div className='bg-black theme flex flex-col items-center gap-10 h-full text-white'>
          <Navbar />
          <div className='text-8xl font-bold py-50 flex flex-col items-center gap-5'>
          <h1>Alwin Santhosh</h1>
          <h2 className='text-3xl p-5'>Sophmore @ NIT Calicut CSE</h2>
          <Socials /> 
          <Techstack />
          </div>
      </div>
    </>
  )
}

export default App
