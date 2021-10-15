import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="container-fluid text-white p-3 bg-footer">
            <div className="container row mx-auto">
                <div className="col-md-5 d-flex align-items-center">
                    <div className="left-container text-start">
                        <h1>Elegant Edu Care</h1>
                        <div className="icons-container d-flex text-center justify-content-start">
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
                        <p className="mt-2">
                            <small>Siyam ©2021 All rights reserved.</small>
                        </p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
                    <Link className="list-item" to="/home">Home</Link>
                    <Link className="list-item" to="/services" >Services</Link>
                    <Link className="list-item" to="/about">About Us</Link>
                    <Link className="list-item" to="/contact">Contact Us</Link>
                </div>
                
                <div className="col-md-5  d-flex align-items-center justify-content-end">
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
                                <h5>+8801959595959</h5>
                            </div>
                        </div>
                        <div className="map d-flex align-items-center justify-content-center">
                            <div className="foter-phone-icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <div>
                                <p>
                                    26 Bashundhara, Dhaka
                                    <br /> 221B 1st Lane, Niketon, Dhaka-1000
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