import React from 'react'
import { MyContext } from '../context/Globalcontext'
import { useContext } from 'react'

function First() {
  
    const {name ,setName} = useContext(MyContext);
    return <div>{name} at first</div> ; 

  
}

export default First;