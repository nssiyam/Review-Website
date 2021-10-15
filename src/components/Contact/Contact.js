import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container p-5">
            <h1 className="fw-bold">Contact Us Today</h1>
            <p className="fw-bold">Have a question about one of our services? Feel free to reach out to us using the form below and we will get back to you as soon as possible.</p>
            <div>
                <div className="w-50 mx-auto">
                    <Form>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                        <br />
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" />
                        <br />
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" />
                        <br />
                        <Form.Label>Your Institution</Form.Label>
                        <Form.Control type="text" />
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Query</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className="btn btn-primary fw-5 fs-5" > Submit </button>
                        
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;