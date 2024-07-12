import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

import Btn from './btnclick';
function Routerapp() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/data" element={<Btn />} />
          
        </Routes>
      </Router>
    );
  }
  
  export default Routerapp;