import { useEffect, useState, useRef ,useCallback,useMemo } from "react";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import UpDate from "./components/UpDate";
function App() {
  const myRef = useRef(null);
  const updateInnerHtml = useCallback( (e) => {
    const el = myRef.current;
    console.log(el)

    if (el) {
      el.innerText = e.target.value;
  }
  },[]);
  return (
    <>
      <First />
     { useMemo(()=>{return  <Second />},[])}
     
      <UpDate />
      <div ref={myRef}> Initial content</div>
      <input onChange={updateInnerHtml} />
    </>
  );
}

export default App;
