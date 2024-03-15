import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './App';

window.addEventListener('resize', () => {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';
})
document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
