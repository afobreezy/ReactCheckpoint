import { Card, Button } from "react-bootstrap";
import blogImage from "../assets/blog image.jpeg";

const ChatCard = (props) => {
  return (
    <Card style={{ width: "100%" }} className="mb-3">
      <Card.Img variant="top" src={blogImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ChatCard;