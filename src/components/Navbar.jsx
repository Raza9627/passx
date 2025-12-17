import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
       
        <nav className='bg-slate-800 text-white flex justify-between items-center h-16 px-10'>
            <div className="logo font-bold text-white text-2xl ">
           <span className="text-green-500">&lt;</span>
           <span>Pass</span><span className='text-green-500'>X/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-4'>
                    <Link to="/" className='transition-all duration-100  ease-in-out hover:font-bold'>Home</Link>
                    <Link to="/about" className='transition-all duration-100  ease-in-out hover:font-bold'>About</Link>
                    <Link to="/feedback" className='transition-all duration-100  ease-in-out hover:font-bold'>Feedback</Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar