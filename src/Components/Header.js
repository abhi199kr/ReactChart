import React,{useState} from 'react'
import {Link} from 'react-router-dom'


import Drop1 from './Drop1'
const Header = () => {
    
 
  return (
   <>
    <div className='flex bg-blue-900 h-14 py-2'>
    <div className='w-1/3 pl-10 md:invisible'>

  {/* Drop Components */}
      <Drop1/>

    </div>
   
    <div className='md:w-11/12 place-items-end md:ml-auto '>
    
    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      
      
    </div>
  </div>
</div>

    </div>
    <div className='hidden md:block ml-auto '>
    <div className='flex'>
    
    <Link to="/login"><button className='border-2 mx-2 bg-red-600 text-white font-bold  border-white px-7 rounded-full  py-2'>
        SignIn

        </button></Link>
        <Link to="/login"><button className='border-2 bg-red-600 text-white font-bold  border-white px-7 rounded-full  py-2'>
        Registers

        </button></Link>

        </div>

    </div>

    </div>
   </>
     
  )
}

export default Header
