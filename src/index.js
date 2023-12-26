// Importing React library for creating React components
import React from 'react';
// Importing ReactDOM from react-dom/client for rendering React components
import ReactDOM from 'react-dom/client';
// Importing BrowserRouter from react-router-dom for handling routing in the application
import { BrowserRouter } from 'react-router-dom';

// Importing the main App component
import App from './App';

// Creating a root using ReactDOM.createRoot and selecting the HTML element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main application within the React.StrictMode
root.render(
  <React.StrictMode>
    {/* Wrapping the entire application with BrowserRouter for routing functionality */}
    <BrowserRouter>
      {/* Rendering the main App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
