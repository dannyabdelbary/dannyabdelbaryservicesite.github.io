import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    { name: "Quick Tire Fix", price: "$30", desc: "Flat tire repair in under 30 mins." },
    { name: "Full Tune-Up", price: "$90", desc: "Complete bike overhaul." },
    { name: "Brake Adjustment", price: "$45", desc: "Smooth stopping guaranteed." }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{service.price}</Card.Subtitle>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;