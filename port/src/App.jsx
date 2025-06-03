import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Techstack from './components/Techstack'
import {motion} from 'framer-motion'

function App() {

  return (
    <>
      <motion.div  className='bg-black theme flex flex-col items-center h-screen w-full text-white py-7 text-5xl md:text-8xl' >
        <motion.span initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:0.5}}  ><Navbar  /></motion.span>
        <motion.div initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:1}}>
          <div className='  font-bold py-25 flex flex-col items-center gap-5 '>
          <h1>Alwin Santhosh</h1>
          <h2 className='text-3xl p-5  '>Sophmore @ NIT Calicut CSE</h2>
          <motion.div className = '' initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:1}}>
          <Socials /> 
          <Techstack />
          </motion.div>
         
          </div>
        </motion.div >
          
      </motion.div>
    </>
  )
}

export default App
