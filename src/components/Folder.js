import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <p>© 2024 BikeFlow Repairs. Designed by Group 5.</p>
        <p>Contact: <a href="mailto:repairs@bikeflow.com" className="text-white">repairs@bikeflow.com</a></p>
      </Container>
    </footer>
  );
};

export default Footer;