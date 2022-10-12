import React from 'react'
import Areachart from './Areachart'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Areachardesc = () => {
  return (
    <div>
    <Header/>
 
    {/* thi div for sidebar and descrtion */}
    
    <div className='flex p-5 md:p-0'>
    <div className='hidden md:block w-2/10'>
        <Sidebar/>
    </div>
    <div className=''>
    <h1 className='text-center font-bold text-3xl pt-5 text-amber-400'> Welcome To Area Chart</h1>
    <div className='flex flex-col md:flex-row'>
    <div className=' bg-pink-100 px-2 pr-5 py-8 mx-4'>
    <Areachart/>
    </div>
    <div className='mt-8 rounded-lg px-3'>
    <div className='p-5  bg-gray-600 rounded w-fit font-bold text-white'>
    An area chart is a type of chart that can display the similarities and differences between one or more sets of data. Different types of area charts can also be used to display several different subsets of data to be compared against one another to explain a larger data set. The types of area charts that can do this are called stacked area charts and 100% area charts. All variations of area charts use elements from line and bar charts to easily display data.

    </div>

    </div>
   
       
    </div>
    </div>
      
    </div>
    <Footer/>
      
    </div>
  )
}

export default Areachardesc
