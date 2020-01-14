import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import Three from './components/ThreeAnimation/Three'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/> 
        <div id='container'>
          <Three id='id'/>
          <h1 id='header'>Joseph Beech</h1>
        </div>
      </div>
    )
  }
}










