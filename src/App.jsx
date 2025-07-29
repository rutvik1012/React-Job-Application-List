import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AddDetail from '../useContaxt/components/AddDetail';
import List from '../useContaxt/components/List';


const App = () => {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<AddDetail/>
    },
    {
      path:"/job_list",
      element:<List/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App