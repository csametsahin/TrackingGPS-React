import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

export default function Navbar({id}) {
    return (
    
        <div className="navbar-container">
               <ul>
                    <NavLink className="nav" exact to={`/${id}`}>Ana Sayfa</NavLink>
                    <NavLink className="nav" exact to={`/aracim/${id}`}>Araçlarım</NavLink>
                 
               </ul>
        </div>
    )
}
    