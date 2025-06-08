import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero py-5 bg-light">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">Fast, Reliable Bike Repairs</h1>
        <p className="lead">Same-day service for commuters and adventurers alike.</p>
        <Button as={Link} to="/book" variant="primary" size="lg">Book a Repair</Button>
      </Container>
    </section>
  );
};

export default Hero;