import { Card, Col, Row } from "react-bootstrap";


export default function Karakterek() {
    return (
    <Row>
    <Col sm>
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" alt="Harcos" src="fighter.png" />
      <Card.Body>
        <Card.Title>Harcos karakter</Card.Title>
        
        </Card.Body>
    </Card></Col>
    <Col sm>
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" alt="varázsló" src="wizard.jpg" />
      <Card.Body>
        <Card.Title>
        Varázsló karakter</Card.Title>
        
        </Card.Body>
    </Card></Col>
    </Row>
    )
}