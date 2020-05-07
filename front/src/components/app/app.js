import React from 'react';
import {render} from 'react-dom';

import AppRoot from './app-root';
import './app.css';

let rootEl = document.getElementById('root');

let renderApp = () => {
  render(
    <AppRoot />,
    rootEl
  );
};

renderApp();
