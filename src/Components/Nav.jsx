import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <>
      <Navbar className='d-flex justify-content-between' bg="dark" data-bs-theme="dark">
          <Navbar.Brand className="ms-3" href="#"><img src="http://placekitten.com/50" alt="" /></Navbar.Brand>
          <Nav className='me-3'>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
      </Navbar>
    </>

) }

export default MyNav;