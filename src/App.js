import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  HashRouter,
  // BrowserRouter as Router,
  Routes,
  //Switch,
  Route,
 // Link
} from "react-router-dom";



function App() {
  const [mode, setMode]= useState('light');//wether dark mode is on or not
  const [alert, setAlert]= useState('null');

  const showAlert =(message, type)=>{
   setAlert(
    {
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // document.body.classList('bg-'+cls);
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#032e6e';
      //#121212
      //#042743
      showAlert("Dark Mode Has Been Enabled","success");
    //  document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
     // document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" about="About TextUtils"/> */}
    {/* <Navbar/> */}

    {/* router setUp */}
    <HashRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />}/>

        <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode={mode}/>}/>
      </Routes>
    </div>
    </HashRouter>
    </>
  );
}

export default App;