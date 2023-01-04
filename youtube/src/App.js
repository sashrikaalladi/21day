
import './App.css';
import React from 'react';
import Header from './pages/Header/Header'
import Sidebar from './pages/sidebar/Sidebar';
import Videos from './pages/videos/Videos';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Subscriptions from './pages/subscriptions/Subscriptions';


function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='app__page'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
          <Route path="/" element={<Videos />} />
            <Route path="/Subscriptions" element={<Subscriptions />} />
            <Route path="/Videos" element={<Videos />} />
           
          </Routes>
          
        </BrowserRouter>
        </div>
    </div>

  );
}

export default App;
