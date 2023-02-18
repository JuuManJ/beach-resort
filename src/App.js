// import logo from './logo.svg';
import React from "react";
 import './App.css';
 import Home from './Pages/Home';
 import Rooms from './Pages/Rooms';
 import SingleRoom from './Pages/SingleRoom';
 import Error from './Pages/Error';
 import { Route, Routes } from 'react-router-dom';
 import Navbar from './Components/Navbar';

function App() {
  return (
    <>

    <Navbar/>
    <Routes> 
    <Route exact path="/" element={<Home/>}/> 
    <Route exact path="/rooms/" element={<Rooms/>}/>
    <Route exact path="/rooms/:slug" element={<SingleRoom/>}/> 
    <Route exact path="*" element={<Error/>}/>
    </Routes>

    </>
  );
}

export default App;
