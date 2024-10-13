import React from 'react';
import ReactDOM from 'react-dom/client';
import HandleRoutes from './Routes';
import ThemeContextProvider from './context/ThemeContext';

// Create a root container instead of using ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HandleRoutes />
      </ThemeContextProvider>
  </React.StrictMode>
);