import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import drop from "../Assets/Images/drop.png"
const Header = () => {
    const [open,close]=useState(false)
    function click(){
        return(

         close(!open),
         console.log(open)
        
        )
    }
 
  return (
   <>
    <div className='flex bg-blue-600 h-14 py-2'>
    <div className='w-1/3 pl-10'>

  <img src={drop} alt="" className='w-10' />

    </div>
    <div className='w-1/3 '>
    
    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      
      
    </div>
  </div>
</div>

    </div>
    <div className='hidden md:block ml-auto'>
    
    <button className='border-2 bg-red-600 text-white font-bold  border-white px-7 rounded-full  py-2'>
        Register/SignIn

        </button>

    </div>

    </div>
   </>
     
  )
}

export default Header
