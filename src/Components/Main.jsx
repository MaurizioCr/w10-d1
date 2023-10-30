import libri from '../books/fantasy.json'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
function Books() { return(
        <Container>
            
            <Row className='align-items-start'>
            
    {libri.map((book)=> {return (
        <Col key={book.asin} md={3}>
        <Card >
            
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">{book.price}$</Button>
            </Card.Body>
        </Card>
        </Col>
  )
})}

</Row>
</Container>
)}



  



export default Books;

