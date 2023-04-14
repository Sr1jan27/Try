// import logo from './logo.svg';
import "./App.css";
import TextForm from "./components/TextForm";

// import PropTypes from 'prop-types'
// import About from "./components/About";
import Navbar from './components/Navbar'
import React, {useState} from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')//this state tells wether dark mode is enabled or not
  const [alert,setAlert] = useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

    
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#2C2B2B';
      showAlert(" Dark Mode Has Been Enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has Been Enabled","success")
    }
  }

  return (
    <>
      <Navbar title = "Srijan" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
         
         <TextForm showAlert = {showAlert} heading = "Enter the text to get what you want" mode={mode}/>
         {/* <About/> */}
      </div>
    </>
  );
}

export default App;
