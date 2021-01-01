import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return React.createElement(
    'div',
    { classNme: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo' }, null),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferre',
        },
        'Learn React'
      )
    )
  );
}

export default App;
