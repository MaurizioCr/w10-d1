import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
    <h2>Libreria Epic!</h2>
      <Alert show={show} variant="success">
        <Alert.Heading>Benvenuto</Alert.Heading>
        <p>
          Vi diamo il benvenuto sulla nostra libreria online. Qui puoi trovare molti libri diversi e interessanti e acquistare quello che più ti attira!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Grazie!
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

export default AlertDismissible;