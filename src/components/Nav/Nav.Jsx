import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul id='nav'>
                <NavLink to="/"> <li><a href="">Home</a></li></NavLink>
                    
                <NavLink to='/about'> <li><a href="">About</a></li></NavLink>

                </ul>
            </div>
        )
    }
    
}



