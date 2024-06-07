import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-purple-800 px-4 text-white'>
      <h1 className="logo  text-xl font-bold">TODO</h1>
      <div className='flex gap-5'>
        <Link to='/'> Home</Link>
        <Link to='/todo'>Todo</Link>
      </div>
    </div>
  )
}

export default Navbar
