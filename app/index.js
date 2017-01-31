import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import RECIPES from './RECIPES';

(function() {
  localStorage.setItem('recipes', JSON.stringify(RECIPES));
})();

ReactDOM.render(<Main/>, document.querySelector('#root'));