import React from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

export default class IngredientsList extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.list.map((item, index) => {
          return (<ListGroupItem key={index}>{item}</ListGroupItem>);
        })}
      </ListGroup>
    );
  }
}