import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Booking = () => {
  const [date, setDate] = useState('');
  const [service, setService] = useState('tire');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book Your Repair</h2>
      {submitted ? (
        <Alert variant="success">
          Your booking for a <strong>{service}</strong> repair on <strong>{date}</strong> is confirmed!
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Select Service</Form.Label>
            <Form.Select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="tire">Quick Tire Fix ($30)</option>
              <option value="tuneup">Full Tune-Up ($90)</option>
              <option value="brake">Brake Adjustment ($45)</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Choose Date</Form.Label>
            <Form.Control 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit">Confirm Booking</Button>
        </Form>
      )}
    </Container>
  );
};

export default Booking;