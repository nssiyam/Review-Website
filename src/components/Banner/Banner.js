import React from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="row banner">
            <div className="col-md-6">
                <h1 className="title">Best Education Platform for Designers</h1>
                <br />
                <Link to="/contact">
                    <button className="btn-banner text-center" > Contact Us </button>
                </Link>

            </div>
        </div>
    );
};

export default Banner;