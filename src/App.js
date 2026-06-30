// import logo from './logo.svg';
import './App.css';
import Tutor from './components/Tutor';
import { useState } from 'react';
import Nav from './components/Nav';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  // usestate for alert 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'LIGHTMODE'
      setTimeout(() => {
        document.title = "TEXT LOGICS";
      }, 1500);
      showAlert("LightMode is enabled", "success")

    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#00000076';
      document.title = 'DARKMODE'
      setTimeout(() => {
        document.title = "TEXT LOGICS";
      }, 1500);
      showAlert("DarkMode is enabled", "success")

    }
  }
  return (
    // <Router>
      <div className="App">
        <Nav mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
       <Tutor showAlert={showAlert} mode={mode} togglemode={togglemode} />

        {/* <Routes> */}
           

{/* <Route path="/" element={} />
          <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}

      </div>
    /* </Router> */
  );
}

export default App;
