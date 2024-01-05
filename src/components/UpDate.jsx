import { MyContext } from "../context/Globalcontext"
import { useContext } from "react" 
function UpDate() {
    const {setName} = useContext(MyContext);
  return (
    <>
    
    <input type="text" onChange = {(e)=>{
        setName(e.target.value);
    }} />
    
    
    </>
  )
}

export default UpDate