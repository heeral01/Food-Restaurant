import React from 'react'
import AboutUs from "./container/AboutUs/AboutUs";
import Search from "./container/Search/Search";
import Findus from "./container/Findus/Findus";
import Header from "./container/Header/Header";
import SpecialMenu from "./container/SpecialMenu/SpecialMenu";

import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {


  return (
      <div>
       <Navbar/>
       <Header/>
       <AboutUs/>
       <SpecialMenu/>
       <Search />
       
       <Findus/>
      </div>
  )
}

export default App
