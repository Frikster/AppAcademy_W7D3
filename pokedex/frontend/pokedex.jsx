import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
