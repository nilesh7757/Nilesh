import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col h-[90vh] justify-center items-center'>
        <h1 className='text-5xl font-bold text-center'>Welcome To The Todo List App</h1>
        <button className='mt-7 bg-purple-600 rounded-md px-4 py-1 text-white hover:bg-purple-800 hover:font-bold'><Link to="/todo">Go to the Todo List</Link></button>
    </div>
  )
}

export default Home
