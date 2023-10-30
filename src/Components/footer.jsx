import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} Libreria Epic</p>
    </Container>
  );
};

export default Footer;
