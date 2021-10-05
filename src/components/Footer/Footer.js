import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import {
    faCoffee,
    faPhoneVolume,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white p-5">
            <div className="row m-5">
                <div className="col-md-5">
                    <div className="left-container text-start">
                        <h1>Elegant Edu Care</h1>
                        <div className="icons-container d-flex text-center ">
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                        </div>
                        <p className="mt-4 ">
                            <small>
                                *These statements have not been evaluated by the Food and
                                Drug Administration. These products are not intended to
                                diagnose.
                            </small>
                        </p>

                        <p className="mt-5">
                            <small>Zemez © . All rights reserved.</small>
                        </p>
                    </div>
                </div>

                <div className="col-md-2">
                    <Link className="list-item" to="/home">Home</Link>
                    <Link className="list-item" to="/services" >Services</Link>
                    <Link className="list-item" to="/about">About Us</Link>
                    <Link className="list-item" to="/blogs">Blogs</Link>
                </div>
                <div className="col-md-5">
                    <div className="right-footer-container">
                        <h3>Sign up for the latest updates</h3>
                        <input
                            className="footer-input"
                            type="text"
                            placeholder="Enter Email"
                        />
                        <div className="phone d-flex align-items-center justify-content-center mt-4">
                            <div className="foter-phone-icon">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </div>
                            <div>
                                <h5>+1 8 800 555 35 35</h5>
                            </div>
                        </div>
                        <div className="map d-flex align-items-center justify-content-center">
                            <div className="foter-phone-icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <div>
                                <p>
                                    160 Broadway, New York, NY 10038,
                                    <br /> 102 1st Avenue, New York, NY 100
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;