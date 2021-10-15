import React from 'react';
import './MenuBar.css';
import logo from "../../images/home-logo.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
    return (

        <div className="container-fluid p-1 bg-menu">
            <div className="row container mx-auto">
                <div className="col-md-3 d-flex align-items-center justify-content-start">
                    <NavLink to="/home" className="items">
                        <img className="img-fluid rounded-circle" src={logo} alt="" style={{ width: '50px' }} />
                        <span style={{ marginLeft: '5px' }}>Elegant Edu Center</span>
                    </NavLink>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <NavLink to="/home" className="items" activeClassName="selected">
                        Home
                    </NavLink>
                    <NavLink to="/services" className="items" activeClassName="selected">
                        Services
                    </NavLink>
                    <NavLink to="/about" className="items" activeClassName="selected">
                        About us
                    </NavLink>
                    <NavLink to="/contact" className="items" activeClassName="selected">
                        Contact Us
                    </NavLink>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <NavLink to="/login" className="items login" activeClassName="selected">
                        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                        Log In
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default MenuBar;