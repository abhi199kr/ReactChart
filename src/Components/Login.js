import React,{useState} from 'react'


import { Navigate,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,setError]=useState('')
    const [allentry ,setallentry]=useState([])
    const [login ,islogin]=useState(false)
    
 
  
  return (
    <>
  <div className='flex items-center justify-center pt-10  '>
                <img src="" alt=""  className='rouded-full w-12 h-12  '/>
                <h1 className=' text-4xl pl-2  font-bold'>ReCharts</h1>
                </div>
                <p className='border-t-2 mt-5'></p>
        <div className=' flex flex-col justify-center items-center pt-10'>
        <h1 className=' text- pl-2  font-bold'>To continue to login to satisfy</h1>
        <button class="w-92 px-16 py-4 lg:hover:w-4/12 mt-5 bg-blue-700 flex text-white font-bold py-2 px-4 rounded-full">
  <img src="" className="h-5 w-5" alt="" />
  <p className='px-5 '>SIGN UP WITH THE FACEBOOK</p>
</button>
<button class="w-92 px-16 py-4 lg:hover:w-4/12 mt-5 bg-black flex text-white font-bold py-2 px-4 rounded-full">
  <img src="" className="h-6 w-6" alt="" />
  <p className='px-5 '>CONTINUE WITH THE APPLE</p>
</button>
<button class="w-92 px-16 py-4 lg:hover:w-4/12 mt-5 bg-white border-2 border-gray-800 hover:w-96 flex text-black font-bold py-2 px-4 rounded-full">
  <img src="" className="h-5 w-5" alt="" />
  <p className='px-5 '>SIGN UP WITH THE GOOGLE</p>
</button>

<button class="w-92 px-16 md:py-4 lg:hover:w-4/12 mt-5 bg-white border-2 border-gray-800 hover:w-96 flex text-black font-bold py-2 px-4 rounded-full">
  
  <p className='px-2 '>CONTINUE WITH THE PHONE NUMBER</p>
</button>
<div class="relative flex py-5 items-center">
    <div class="flex-grow border-t-2 w-36 border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-800">Or</span>
    <div class="flex-grow border-t-2 w-36 border-gray-400"></div>
</div>
        </div>

{/* From hear sign up started */}
<div class="bg-grey-lighter min-h-screen flex flex-col">
<form >
            <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
           
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    
                    <div>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Email address or username</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email address or username" value={email}
                      onChange={(e)=>setemail(e.target.value)} required=""/>
                  </div>

                  <div className='mt-5'>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" value={password}
                      onChange={(e)=>setpassword(e.target.value)} required=""/>
                  </div>
                  <p className='mt-2 hover:underline'>Forgot Your Password?</p>
                  <div className='mt-5'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='text-gray-900 px-3' for="vehicle1">Remember me</label><br></br>
</div>
                 

<div className='text-end mt-5'>
<button type='submit ' className='border-2 rounded-full w-40 hover:w-44 hover:h-16 h-14 bg-green-500 text-extrabold font-bold text-center' >log in</button>
</div>
<p className='border-t-2 mt-4'></p>
<h2 className='mt-4 font-bold text-center text-xl'>Don't have an account?</h2>
{/* <Link to="/Signup"> <div class="w-full place-items-center px-auto mx-auto  text-center md:py-4  mt-5 bg-white border-2 border-gray-800 hover:w-96 flex text-black font-bold py-2  rounded-full">
  
  Signup
</div></Link> */}

<div className='text-start mt-5'>
<button type='submit ' className='border-2 rounded-full w-40 hover:w-44 hover:h-16 h-14 bg-red-500 text-white text-extrabold font-bold text-center' >Sign up</button>
</div>

                    

                    

                </div>

                  
            </div>
            </form>
        </div>
    </>
  )
}

export default Login
