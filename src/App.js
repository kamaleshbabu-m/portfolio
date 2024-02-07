import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
      <ScrollToTop/>
        <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/blog" exact element={<BlogPage/>} />
        <Route path="/projects" exact element={<ProjectPage/>} /> 
         
        </Routes>
        <Navigate to="/" />
      </Router>
      <BackToTop />
      
    </div>
  );
}

export default App;

/*
      <div className="app">
      <Router>
        <ScrollToTop/>
        <Routes>
    
<Route path="/blog" exact element={<BlogPage/>} />
        <Route path="/projects" exact element={<ProjectPage/>} />  
          <Navigate to="/" />
        </Routes>
      </Router>
      <BackToTop />
    </div> 
    */

