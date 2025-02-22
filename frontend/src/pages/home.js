import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../app.css";

function Home() {
  return (
    <Container className="text-center mt-4">
      {/* Welcome Section */}
      <Row>
        <Col>
          <h1>Welcome to Recipe World 🍽️</h1>
          <p>Discover and share the best recipes from around the world!</p>
          <Button variant="primary" as={Link} to="/recipes">
            Explore Recipes
          </Button>
        </Col>
      </Row>

      {/* Featured Recipes - First Row */}
      <Row className="mt-5">
        <Col>
          <h2>Featured Recipes</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/pasta.jpeg" className="recipe-img" />
            <Card.Body>
              <Card.Title>Delicious Pasta</Card.Title>
              <Card.Text>A classic Italian pasta recipe with rich flavors.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/1">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/burger.jpeg" className="recipe-img" />
            <Card.Body>
              <Card.Title>Juicy Burger</Card.Title>
              <Card.Text>A homemade chicken burger with fresh ingredients.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/2">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/cake.jpeg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Chocolate Cake</Card.Title>
              <Card.Text>A moist and rich chocolate cake recipe.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/3">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Featured Recipes - Second Row (NEW) */}
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/biriyani.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Chicken Biryani</Card.Title>
              <Card.Text>Fragment and well cooked homemade chicken biriyani.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/4">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/sushi.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Japanese Sushi</Card.Title>
              <Card.Text>Authentic sushi rolls with fresh ingredients.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/5">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/icecream.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Vanilla Ice Cream</Card.Title>
              <Card.Text>Homemade creamy vanilla ice cream.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/6">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
