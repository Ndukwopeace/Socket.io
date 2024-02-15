import { useState,useEffect } from 'react'
import './App.css'
import io from 'socket.io-client'

function App() {
  
  const [socket] = useState(() => io('http://localhost:8000'));
  useEffect(() =>{
    console.log('Is this running?');
    socket.on("Welcome",()=>console.log("Welcome userId : ", socket.id ))
    
    return ()=>socket.off("Welcome");
  },[socket])
  return (
    <>
     <h1>Welcome</h1>
    </>
  )
}

export default App
