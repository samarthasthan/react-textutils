
import { useState } from 'react';
import './App.css';
import Navbar from './compoments/Navbar';
import Textform from './compoments/Textform';


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
   
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Textform/>
    </>
  );
}

export default App;
