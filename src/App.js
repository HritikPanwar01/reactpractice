import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';   //{/* <About/>
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message ,type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
 
  const  toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor ='#091b35'
      showAlert("dark mode is enaled" ,"success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'textutils is amazing Mode'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install textUtils Mode'
      // },3000);
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode is enaled" ,"success")
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
   
    </>
  );
}

export default App;
