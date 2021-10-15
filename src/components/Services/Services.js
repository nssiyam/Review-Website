import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://6159fee1601e6f0017e5a37e.mockapi.io/Services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container-fluid">
            <h2 className="mt-5 p-5 fs-1 fw-bold">Our Courses</h2>
            <div className="container-fluid row row-cols-3 row-cols-md-3 g-4">
                {
                    services.map(service =>
                        <Service key={service.id}
                            service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;