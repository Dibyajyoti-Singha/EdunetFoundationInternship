import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const recipeData = {
  1: {
    name: "Delicious Pasta",
    description: "Classic Italian pasta with rich tomato sauce.",
    image: "/images/pasta.jpeg",
    steps: [
      "Boil pasta in salted water until al dente.",
      "Heat olive oil in a pan and sauté garlic.",
      "Add tomato sauce, salt, and pepper, and cook for 5 minutes.",
      "Mix pasta with the sauce and garnish with basil and cheese.",
      "Serve hot and enjoy!"
    ]
  },
  2: {
    name: "Juicy Burger",
    description: "A homemade chicken burger with fresh ingredients.",
    image: "/images/burger.jpeg",
    steps: [
      "Mix minced chicken with spices and form patties.",
      "Grill the patties until fully cooked.",
      "Toast the burger buns and spread mayonnaise.",
      "Assemble with lettuce, tomato, cheese, and patty.",
      "Serve with fries and ketchup!"
    ]
  },
  3: {
    name: "Chocolate Cake",
    description: "Moist chocolate cake with a rich flavor.",
    image: "/images/cake.jpeg",
    steps: [
      "Preheat the oven to 180°C (350°F).",
      "Mix flour, cocoa powder, sugar, and baking powder.",
      "Add eggs, milk, and melted butter, then mix well.",
      "Pour into a greased cake pan and bake for 30 minutes.",
      "Let it cool and decorate with frosting."
    ]
  },
  4: {
    name: "Chicken Biryani",
    description: "Spicy and flavorful Indian rice dish with chicken.",
    image: "/images/biriyani.jpg",
    steps: [
      "Marinate chicken with yogurt, spices, and lemon juice.",
      "Cook basmati rice with whole spices and set aside.",
      "Sauté onions, tomatoes, and marinated chicken.",
      "Layer chicken and rice, cover, and cook on low heat.",
      "Garnish with coriander and serve hot!"
    ]
  },
  5: {
    name: "Japanese Sushi",
    description: "Traditional Japanese sushi rolls with fresh ingredients.",
    image: "/images/sushi.jpg",
    steps: [
      "Cook sushi rice and mix with rice vinegar, sugar, and salt.",
      "Place a seaweed sheet on a bamboo mat and spread rice evenly.",
      "Add sliced fish, avocado, and cucumber as fillings.",
      "Roll the sushi tightly using the bamboo mat.",
      "Cut into pieces and serve with soy sauce, wasabi, and pickled ginger."
    ]
  },
  6: {
    name: "Vanilla Ice Cream",
    description: "Creamy homemade vanilla ice cream.",
    image: "/images/icecream.jpg",
    steps: [
      "Heat milk, sugar, and cream in a saucepan until sugar dissolves.",
      "Whisk egg yolks in a bowl and slowly mix with warm milk mixture.",
      "Return to heat and cook until thickened.",
      "Cool the mixture and add vanilla extract.",
      "Freeze in an ice cream maker and enjoy!"
    ]
  },
};

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <Container className="text-center mt-4"><h2>Recipe Not Found</h2></Container>;
  }

  return (
    <Container className="mt-4 text-center">
      <Card>
        <Card.Img variant="top" src={recipe.image} style={{ maxHeight: "300px", objectFit: "cover" }} />
        <Card.Body>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h3>How to Make:</h3>
          <ol className="text-start">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipeDetail;
