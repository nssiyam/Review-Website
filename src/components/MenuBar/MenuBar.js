import React from 'react';
import './MenuBar.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
    return (

        <div className="container-fluid p-4 bg-dark">
            <div className="row">
                <div className="col-md-2 d-flex align-items-end justify-content-start">
                    <NavLink to="/home" className="items">
                        Lorem
                    </NavLink>
                </div>
                <div className="col-md-6 d-flex align-items-end justify-content-end">
                    <NavLink to="/home" className="items" activeClassName="selected">
                        Home
                    </NavLink>
                    <NavLink to="/services" className="items" activeClassName="selected">
                        Services
                    </NavLink>
                    <NavLink to="/about" className="items" activeClassName="selected">
                        About us
                    </NavLink>
                    <NavLink to="/blogs" className="items" activeClassName="selected">
                        Blogs
                    </NavLink>
                    <NavLink to="/service/ssc" className="items" activeClassName="selected">
                        SSC
                    </NavLink>
                    <NavLink to="/service/hsc" className="items" activeClassName="selected">
                        HSC
                    </NavLink>
                </div>
                <div className="col-md-4 d-flex align-items-end justify-content-end">
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