import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const recipes = [
  { id: 1, name: "Delicious Pasta", image: "/images/pasta.jpeg" , className: "recipe-img"},
  { id: 2, name: "Juicy Burger", image: "/images/burger.jpeg" , className: "recipe-img"},
  { id: 3, name: "Chocolate Cake", image: "/images/cake.jpeg" , className: "recipe-img"},
  { id: 4, name: "Chicken Biryani", image: "/images/biriyani.jpg" , className: "recipe-img"},
  { id: 5, name: "Japanese Sushi", image: "/images/sushi.jpg" , className: "recipe-img"},
  { id: 6, name: "Vanilla Ice Cream", image: "/images/icecream.jpg" , className: "recipe-img"},
];

function RecipeList() {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Explore Recipes 🍲</h1>
      <Row className="mt-3">
        {recipes.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.image} className="recipe-img" />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Button variant="success" as={Link} to={`/recipe/${recipe.id}`}>
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeList;
