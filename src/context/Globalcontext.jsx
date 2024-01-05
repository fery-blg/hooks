import { createContext,  useState } from "react";




export const MyContext = createContext()

export const  MyProviders = ({children})=>{
    const [name ,setName]=useState("feriel")
return <MyContext.Provider
value={{name , setName}}
>{children}</MyContext.Provider>

};