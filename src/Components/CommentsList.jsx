import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

function CommentsList({ comments }) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Comments</Card.Title>
                    <ListGroup>
                        {comments.map((comment) => (
                            <ListGroup.Item key={comment._id}>
                                <strong>Rating:</strong> {comment.rate}
                                <br />
                                <strong>Comment:</strong> {comment.comment}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CommentsList;
