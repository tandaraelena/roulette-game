import React from 'react';
import { render } from 'react-dom';
import App from './component/app';

const hereRendersAppComponent = document.querySelector("#here-renders-app-component")

render(
  <App/>,
  hereRendersAppComponent
)