import React, { useState } from 'react'
import ListContext from "./ListContext"

const ListProvider = ({children}) => {
    // step 2 provide sontext create that use state
    const[name,setName]=useState([])
    // const [email,setEmail]=useState([])
    // const[category,setCategory]=useState([])
  return (
    <>
    {/* step 3 provide */}
    <ListContext.Provider value={{name ,setName}}>
        {children}
    </ListContext.Provider>
    </>
  )
}

export default ListProvider