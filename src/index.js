import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Components
import Article from './components/article/Article';
import Hidrogeno from './components/hidrogeno/Hidrogeno';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Article />
    <Hidrogeno />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
