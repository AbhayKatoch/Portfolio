import React, { useRef } from 'react'
import {Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'





function Header() {
  const [sta,setSta] = useState({})
  const Location = useLocation();
  const navRef = useRef()
  
  useEffect(()=>{
    const curr = navRef.current.querySelector('#nav-link');
    if(curr){
      setSta({
        width:`${curr.offsetWidth}px`,
        left:`${curr.offsetLeft}px`,
        height:'3px',
        backgroundColor:'blue',
        position:'absolute'
        
      })
    }
  },[Location])
  return (
    <>
      <header className=' z-10 h-20 ' >
        <nav ref={navRef} className=' z-30 top-0 bottom-0 left-0 right-0 absolute grid grid-flow-col gap-x-4 px-10 py-2 h-28'>
          
          {/* main nav */}
          <div className=' flex flex-col items-center pt-4'>
            <div className=' max-w-full bg-nav-color  rounded-full p-3 sm:w-auto text-white items-center '>
              <NavLink to='/' id='nav-link' className='p-3 hover:text-my-blue'>Home</NavLink>
              <a href='#about' className='p-3 hover:text-my-blue'>About</a>
              <a href='#project' className='p-3 hover:text-my-blue'>Projects</a>
              <NavLink to="mailto:abhaykatoch210@gmail.com" className='p-3 hover:text-my-blue'>Contact</NavLink>
              <NavLink to='https://drive.google.com/file/d/1KlOuIp6bZL9JAPUqaOPkqfQdTYLTmZig/view?usp=sharing' target='_blank' className='p-3 hover:text-my-blue'>Resume</NavLink>
            </div>


          
          </div>
          
        </nav>
        
        
        

      </header>
    
    
    </>
  )
}

export default Header