import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { CourseName, Instructor, Img, Price, Ratings } = props.service;

    return (
        <div>
            <Col>
                <Card style={{ width: '36rem'}}>
                    <Card.Img variant="top" src={Img} fluid/>
                    <Card.Body>
                        <Card.Title>{CourseName}</Card.Title>
                        <Card.Text>Instructor: {Instructor}</Card.Text>
                        <Card.Text>Course Fee: ${Price}</Card.Text>
                        <Card.Text>Reviews: {Ratings}</Card.Text>

                        <button className="btn btn-primary fw-5 fs-5" > Enroll now </button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;