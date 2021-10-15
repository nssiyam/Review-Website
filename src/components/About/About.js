import React from 'react';
import img from "../../images/about.png"

const About = () => {
    return (
        <div>
            <div className="bg-dark">
                <h1 className="p-5">
                    <span className="text-white">What is </span> 
                    <span className="text-primary">Elegant Edu Center</span></h1>
                <div className="row container-fluid p-5 mx-auto">
                    <div className="col-md-6">
                        <img className="img-fluid border border-3 rounded" src={img} alt="" style={{ width: '350px' }} />
                    </div>
                    <div className="col-md-4 d-flex align-items-center text-white fs-5">
                        <p>I started coding in 2008 at the age of 26. I started off freelancing, then worked as a full-time developer and then created my own agency.

                            I loved working as a developer, but I realized that teaching was my true passion. I became a full-time content creator and educator in 2016.

                            I show people that they don't have to be a straight A student or a genius to learn to code. I break down complex concepts by showing you how to implement them in project-based courses and tutorials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;