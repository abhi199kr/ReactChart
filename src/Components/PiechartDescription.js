import React from 'react'
import { PieChart } from 'recharts'
import Footer from './Footer'
import Header from './Header'
import Piechart from './Piechart'
import Sidebar from './Sidebar'

const PiechartDescription = () => {
  return (
    <div>
    <Header/>
 
    {/* thi div for sidebar and descrtion */}
    
    <div className='flex p-5 md:p-0'>
    <div className='hidden md:block w-2/10'>
        <Sidebar/>
    </div>
    <div className=''>
    <h1 className='text-center font-bold text-3xl pt-5 text-amber-400'> Welcome To PieChart</h1>
    <div className='flex flex-col md:flex-row'>
    <div className=' bg-pink-700 mx-4  mx-4  px-2 pr-5 py-8'>
    <Piechart/>
    </div>
    <div className='mt-8 rounded-lg px-3'>
    <div className='p-5  bg-gray-600 rounded w-fit font-bold text-white'>
    A pie chart is a circle that is divided into areas, or slices. Each slice represents the count or percentage of the observations of a level for the variable. Pie charts are often used in business. Examples include showing percentages of types of customers, percentage of revenue from different products, and profits from different countries. Pie charts can be helpful for showing the relationship of parts to the whole when there are a small number of levels. For example, a good pie chart might show how different brands of a product line contribute to revenue, as seen in Figure 1.

    </div>

    </div>
   
       
    </div>
    </div>
      
    </div>
    <Footer/>
      
    </div>
  )
}

export default PiechartDescription
