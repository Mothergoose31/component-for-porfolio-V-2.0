import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        // function setTimeout(){window.location.reload()}1000;
        return (
            <div>
                <ul id='nav'>
                <NavLink to="/"> Home</NavLink>
                    
                <NavLink to='/about'> About</NavLink>

                </ul>
            </div>
        )
    }
    
}



