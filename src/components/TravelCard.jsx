import React from "react";
import Card from "react-bootstrap/Card";

function TravelCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{props.location}</Card.Header>
            <Card.Img height="300px" src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.startDate} - {props.endDate}</Card.Subtitle>
                <Card.Text>
                {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={props.googleMapsUrl}>View on Google Maps</Card.Link>
            </Card.Footer>
        </Card>
    );
}

export default TravelCard;