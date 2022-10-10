import React from 'react'
import Dashboar from './Dashboar'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Realdashboard = () => {
  return (
    <>
    <Header/>
    <div className='flex'>
    <div className='hidden md:block w-/10'>
        <Sidebar/>
    </div>
    <div>
        <Dashboar/>
    </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Realdashboard
