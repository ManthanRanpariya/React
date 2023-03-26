import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
// import About from './Components/About';
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
   <>
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
   <div className="container my-3 ">
   <TextForm heading="Enter the text to Analyze below"  mode={mode}/>
   {/* <About /> */}
   </div>
   </>
  );
}

export default App;
