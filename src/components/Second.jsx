import React from 'react'
import { MyContext } from '../context/Globalcontext'
import { useContext } from 'react'


function Second() {
  
    const {name ,setName} = useContext(MyContext);
    return <div>{name} at second</div> ; 
  
}

export default Second