import React, { useContext } from 'react';
import './App.css';
import Header from './pages/Header/Header'
import Sidebar from './pages/sidebar/Sidebar';
import Videos from './pages/videos/Videos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscriptions from './pages/subscriptions/Subscriptions';
import { Themer } from './pages/usetheme/Themer';


function App() {
  return (
  
      <div className="App">
          <Themer>
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
          </Themer>
        </div>


  );
}

export default App;
