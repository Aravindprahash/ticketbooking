import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container style={{ marginTop: '50px', maxWidth: '700px' }}>
      <h2 className="text-center mb-4">📬 Contact Us</h2>

      {submitted && (
        <Alert variant="success" className="text-center">
          Your message has been sent successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ backgroundColor: '#f9f9f9' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><strong>Name</strong></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label><strong>Email address</strong></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label><strong>Message</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Type your message here..."
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
