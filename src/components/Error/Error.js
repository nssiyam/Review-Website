import React from 'react';
import img from "../../images/error.jpeg";
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

const Error = () => {
    return (
        <div>
            <h1 className="text-danger mt-5">Not found error 404!!!</h1>
            <img className="error-img" src={img} alt="" />
        </div>
    );
};

export default Error;