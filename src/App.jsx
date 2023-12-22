import {useState,useCallback,useEffect} from "react"
import './App.css';


const Page =() => {
  const [length , setLength] =useState("8")
  const [number , setNumber] =useState(false)
  const [character , setCharacter] =useState(false)
  const [password , setPassword] =useState("")
  
  const PasswordGenerator= useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz";
    if(number)  str += "1234567890"
    
    if (character) str+= "€¥$¢^√π¶∆✓™"
    
    
    for(let i =1;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character,setPassword])
    
  
  useEffect(() => {
    PasswordGenerator();
    
  }, [length,number,character,setPassword])
  
  const copytext = () =>{
  let copyarea = document.querySelector("#text")
  let texts = copyarea.value
  navigator.clipboard.writeText(texts)
let copybutton = document.querySelector("#btn")
copybutton.innerHTML = "Copied";
setTimeout(()=>{
  copybutton.innerHTML="Copy"
},3000)
  }
  
  
  
  
  return(
  
    
    <div className="container">
      <h1>PassWord Generator</h1>
      <div className="top">
      <input id="text" className="inp" type="text"
      placeholder="password"
      value={password}
      />
      <button id="btn" className="btn"
      onClick={copytext}
      >Copy</button>
      </div>
      <div className="bottom">
       <input type="range" 
       className="range"
       min={6}
       max={50}
       value={length}
       onChange={(e)=>{
         setLength(e.target.value)
       }}
       />
       <label>Length={length}</label>
       <input type="checkbox" 
       className="check"
       onChange={()=>{
        setCharacter((prev)=> !prev) 
       }}
       />
       <label>Characters</label>
        <input type="checkbox" 
       className="check"
       onChange={()=>{
        setNumber((prev)=> !prev) 
       }}
       />
       <label>Numbers</label>
      </div>
      
    </div>
    )
}

export default Page;

