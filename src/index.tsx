import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

const root: HTMLElement | null = document.querySelector('div#root');

if (root !== null) {
    ReactDOM.render(<App />, root);
}