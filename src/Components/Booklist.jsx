import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Books from './SingleBook'; // Il tuo componente Books
import CommentArea from './CommentArea'; // Componente CommentArea

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBookAsin: null, // Codice ASIN del libro selezionato
        };
    }

    // Funzione per gestire la selezione di un libro
    handleBookSelect = (asin) => {
        this.setState({ selectedBookAsin: asin });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Books onBookSelect={this.handleBookSelect} />
                    </Col>
                    <Col md={4}>
                        <CommentArea selectedBookAsin={this.state.selectedBookAsin} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookList;
