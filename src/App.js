// import logo from './logo.svg';
import './App.css';
// bfeac2359e1a49fd9c234322006e5a6a
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import NewsItems from './components/NewsItems';
const App =()=> {
const  apiKey = process.env.REACT_APP_NEWS_API  
const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar color='#f11946' height={3} progress={progress}/>
        <Routes>
        <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={9} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={9} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={9} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology"/>}/>
        </Routes>    
        </Router>      
      </div>
    )
  
}


// business
// entertainment
// general
// health
// science
// sports
// technology

export default App;