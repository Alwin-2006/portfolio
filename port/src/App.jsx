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
   
      <div className='bg-black h-screen'>
      <motion.div  className=' theme flex flex-col gap-10 items-center w-full text-white text-5xl md:text-8xl overflow-hidden' >
        <motion.span initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:0.5}}  ><Navbar  /></motion.span>
        <motion.div initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:1}}>
          <div className='font-bold py-20 flex flex-col justify-between items-center gap-5 '>
          <h1>Alwin Santhosh</h1>
          <h2 className='text-3xl  '>Sophmore @ NIT Calicut CSE</h2>
          <motion.div  initial ={{opacity:0, y:0}} animate ={{opacity:1, y:20}}transition={{duration:0.5, delay:1}}>
          <Socials /> 
          </motion.div>
         
          </div>
        </motion.div >
          
      </motion.div>
      </div>
     
  
  )
}

export default App
