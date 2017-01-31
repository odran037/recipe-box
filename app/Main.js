import React from 'react';
import {
  Accordion,
  Button,
  ButtonToolbar,
  Grid,
  Jumbotron,
  Modal,
  Panel,
  Well
} from 'react-bootstrap';
import IngredientsList from './IngredientsList';
import RecipeModal from './RecipeModal';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }
  componentWillMount() {
    let recipes = JSON.parse(localStorage.getItem('recipes'));
    this.setState({ recipes: recipes });
  }
  deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.splice(index, 1);
    this.setState({ recipes: recipes });
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  save(index) {
    let recipes = JSON.parse(localStorage.getItem('recipes'));
    let newRecipe = {
      title: document.getElementById('recipeTitle').value,
      ingredients: document.getElementById('recipeIngredients').value.split(',')
    };
    if (typeof index === 'number') {
      recipes[index] = newRecipe;
    } else {
      recipes.push(newRecipe);
    }
    this.setState({ recipes: recipes });
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1 className="text-center">Stacy's Recipe Box</h1>
        </Jumbotron>
        <RecipeModal save={this.save.bind(this)}>
          <Button className="new-recipe" bsStyle="success">Add New Recipe</Button>
        </RecipeModal>
        <Accordion>
          {this.state.recipes.map((recipe, index) => {
            return (
              <Panel header={recipe.title} eventKey={index} key={index}>
                <IngredientsList list={recipe.ingredients}/>
                <hr/>
                <ButtonToolbar>
                  <Button onClick={this.deleteRecipe.bind(this, index)} bsStyle="danger">Delete</Button>
                  <RecipeModal save={this.save.bind(this, index)} recipeTitle={recipe.title} recipeIngredients={recipe.ingredients}>
                    <Button>Edit</Button>
                  </RecipeModal>
                </ButtonToolbar>
              </Panel>
            );
          })}
        </Accordion>
        <Well bsSize="small">
          <p className="footer text-center lead">
            I love you!
          </p>
        </Well>
      </Grid>
    );
  }
}