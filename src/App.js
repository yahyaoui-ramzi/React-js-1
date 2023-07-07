import React from 'react';
import Name from './Components/Name/Name';
import Price from './Components/Price/Price';
import Description from './Components/Description/Description';
import Image from './burning.jpg';
import { Card, Col, Container, Row , Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import ProductData from './Product';





const App = () => {
  const [firstName, setFirstName] = useState('');

  const handleNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${firstName || 'there'}!`);
  };

  return (
    
<Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title><Name /></Card.Title>
              <Card.Text><Price /></Card.Text>
              <Card.Text style={{ fontStyle: 'italic' }}>

               <Description /> </Card.Text>
              <Card.Img variant="top" src={Image} />

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                value={firstName}
                onChange={handleNameChange}
                placeholder="Enter your first name"
              />
            </p>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
          </Col>
          
      </Row>
    </Container>
    

  );
}


export default App;
