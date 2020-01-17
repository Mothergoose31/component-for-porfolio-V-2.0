import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Three from './components/ThreeAnimation/Three'
import About  from './components/AboutPage/About'
import HeaderWord from "./components/HeaderWord/HeaderWord"

export default class App extends Component {
  render() {
    return (
      <div className = "App">
        <Router>
          <Nav/> 
          
            <div id='container'>
            <Route  exact path ="/">
              <Three id='id'/>
              <HeaderWord/>
            </Route>
            </div>
          
          <Route path ='/about'>
            <About/>
          </Route>
        </Router>
      </div>
    )
  }
}










