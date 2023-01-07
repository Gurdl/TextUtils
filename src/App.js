import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
 {
  const [initial, setInitial] = useState('#5e72e4');
  const [color, setColor] = useState("white")
  const [mode,setMode] = useState('light');
  const [txtMode, settxtMode] = useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)},3000
    );

  }
  const toggleDarkMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      settxtMode('light')
      document.title="TextUtils-Dark"
      
      document.body.style.backgroundColor='#042743';
      showAlert("dark Mode is On","success")
    }
    else{
      setMode('light')
      settxtMode('dark')
      document.title="TextUtils-Home"
      document.body.style.backgroundColor="white";
      showAlert("light Mode is On","success")
    }

  }
  return (
    <>
   <Navbar initial={initial} color={color} setColor={setColor}title="textUtils" myMode={mode} toggle={toggleDarkMode} txt={txtMode}></Navbar>
   <Alert alert={alert}></Alert>
   <TextForm showAlert={showAlert} heading="Write Your Text here:"  myMode={mode}></TextForm>
    </>
    //Use this for routing
  //   <BrowserRouter>
  //   <Navbar initial={initial} color={color} setColor={setColor}title="textUtils" myMode={mode} toggle={toggleDarkMode} txt={txtMode}></Navbar>
  //  <Alert alert={alert}></Alert>
  //   <Routes>
  //       <Route exact path="/About" element={<About />} />
  //       <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write Your Text here:"  myMode={mode}></TextForm>} />
        
  //   </Routes>
  // </BrowserRouter>
  // </>
  );
}

export default App;
