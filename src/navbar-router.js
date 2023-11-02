import React from 'react'
import {BrowserRouter, NavLink, Route,Routes} from 'react-router-dom'
import './navbar.css'
import { Content_About_Me } from './func-components'
import { Education_Page } from './Education-components'
import { Skill_Page } from './skill-components'

export default function NavBarRouter() {
    return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm py-0 navbar-light px-4" style={{ backgroundColor: '#ff85a3' }}>
        <a className="navbar-brand mx-1">
          <img src="./logo192.png" height="50" alt=""/>
        </a>
        <div className="navbar-brand" style={{fontWeight:'bold', color: '#ffffff', fontFamily:'Gill Sans' ,fontSize:25}}>Portfolio Heart</div>
        <ul className="navbar-nav nav-pills mx-3">
          <li className="nav-item mx-2">
            <NavLink to="/" className="nav-link" exact={true}>About Me</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/educations" className="nav-link">Education</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/skills" className="nav-link">Skill</NavLink>
          </li>
        </ul>
      </nav>
      <div className="text-center">
      <Routes>
        <Route path="/" element={<Content_About_Me/>}/>
        <Route path="/educations" element={<Education_Page/>}/>
        <Route path="/skills" element={<Skill_Page/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    )
}