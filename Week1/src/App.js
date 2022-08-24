import React, { useEffect } from 'react';
import './App.css';
import Banner from './pages/Banner';
import Content from './components/Content';
import Menu from './pages/Menu';


function App() {


  return (
    <div>
    <Banner/>
    <Menu/>
    <Content/>
  
    </div>
  );
}

export default App;

