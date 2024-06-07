import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './componets/Home'
import TodoApp from './componets/todo'
import Navbar from './componets/Navbar'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/todo",
      element:<><Navbar/> <TodoApp/></>
    },
    
    {
      path:"/",
      element:<><Navbar/> <Home/></>
    }
    
  ])
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App