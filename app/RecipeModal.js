import React from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal
} from 'react-bootstrap';

export default class RecipeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  close(save) {
    if (typeof save === 'function') {
      save();
    }
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <span>
        <span onClick={this.open.bind(this)}>{this.props.children}</span>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.recipeTitle ? 'Edit recipe' : 'Add new recipe'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <FormGroup controlId="recipeTitle">
              <ControlLabel>Recipe</ControlLabel>
              <FormControl type="text" defaultValue={this.props.recipeTitle}/>
            </FormGroup>
            <FormGroup controlId="recipeIngredients">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl componentClass="textarea" defaultValue={this.props.recipeIngredients}/>
            </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this, this.props.save)} bsStyle="primary">Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}