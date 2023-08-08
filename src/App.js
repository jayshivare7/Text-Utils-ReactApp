import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes} from "react-router-dom";




function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
const showAlert=(message ,type)=>{
setAlert({
msg:message,
type:type
})
setTimeout(()=>{
setAlert(null);},2000)
}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled","success");
    }
  }
  return (
    <>
  
{/* <BrowserRouter>  */}
<Navbar title="TextUtils" aboutText="About"  mode={mode}  toggleMode={toggleMode} />
   <Alert alert={alert}/>

<div className="container my-3"> 
    {/* my-3 gives a margin in y direction with 3 value and this is of bootstrap */}
  
  
  
    <Routes>
    
     <Route exact path="/about" element={<About  mode={mode}  />}/>
     <Route exact path="/" element={<TextForm  showAlert={showAlert}  mode={mode} heading="Enter the text to analyze below" />}/>

     </Routes>
    </div>

{/* // </BrowserRouter> */}

  
    </>
  );
}

export default App;
