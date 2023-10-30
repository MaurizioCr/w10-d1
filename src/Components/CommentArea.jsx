import React, { Component } from 'react';

class CommentArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    // Effettua una richiesta fetch quando la prop selectedBookAsin cambia
    componentDidUpdate(prevProps) {
        if (this.props.selectedBookAsin !== prevProps.selectedBookAsin) {
            if (this.props.selectedBookAsin) {
                // Effettua una richiesta solo se il codice ASIN è definito
                fetch(`URL_del_servizio_di_commenti?asin=${this.props.selectedBookAsin}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ comments: data });
                    })
                    .catch((error) => {
                        console.error('Errore nella richiesta dei commenti:', error);
                    });
            } else {
                this.setState({ comments: [] });
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Comments</h2>
                <ul>
                    {this.state.comments.map((comment) => (
                        <li key={comment.id}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CommentArea;

