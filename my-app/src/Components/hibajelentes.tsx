import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default function Hiabajelentes() {
    const [alert, SetAlert] = useState<boolean>(false);
    return (
        <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Név</Form.Label>
        <Form.Control required type="text" placeholder="Név" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Elérhetőség</Form.Label>
        <Form.Control required type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Leírás</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    )
}