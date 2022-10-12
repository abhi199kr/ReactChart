import React from 'react'
import Bar2 from './Bar2'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Bargraphdesc = () => {
  return (
    <div>
    <Header/>
 
    {/* thi div for sidebar and descrtion */}
    
    <div className='flex p-5 md:p-0'>
    <div className='hidden md:block w-2/10'>
        <Sidebar/>
    </div>
    <div className=''>
    <h1 className='text-center font-bold text-3xl pt-5 text-amber-400'> Welcome To Bar Graph</h1>
    <div className='flex flex-col md:flex-row'>
    <div className=' bg-yellow-200 mx-4  px-2 pr-5 py-8'>
    <Bar2/>
    </div>
    <div className='mt-8 rounded-lg px-3'>
    <div className='p-5  bg-gray-600 rounded w-fit font-bold text-white'>
    A bar graph is a graphical representation of information. It uses bars that extend to different heights to depict value.

Bar graphs can be created with vertical bars, horizontal bars, grouped bars (multiple bars that compare values in a category), or stacked bars (bars containing multiple types of information).

Bar graphs are commonly used in business and financial analysis to display often complicated data. They can convey information quickly and effectively. In the financial industry, a volume chart is a commonly used vertical bar graph.

    </div>

    </div>
   
       
    </div>
    </div>
      
    </div>
    <Footer/>
      
    </div>
  )
}

export default Bargraphdesc
