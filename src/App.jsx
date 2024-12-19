import React from 'react';
import Feedback from './routes/Feedback';
import Submit from './routes/Submit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <div>
    //   <Feedback/>
    //   <Submit />
    // </div>

    <Router>
      <Routes>
        <Route path='/' element={<Feedback />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </Router>
  );
};

export default App;
