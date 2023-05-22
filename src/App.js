import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';
import Signup from './Components/Signup/Signup';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [state, setState] = useState(false);

  const popups = () => {
    setState(!state);
  };

  return (
    <div>
      <Routes>

        <Route path="/Home" element={<Header />} />
        <Route path="/Sign_In" element={<Popup />} />
        <Route path="/Sign_Up" element={<Signup />} />

      </Routes>
      {/* <Header popups={popups} /> */}
      {/* {state && <Header />} */}

      {state && <Popup />}




      {state && <Signup />}
    </div>
  );
}

export default App;
