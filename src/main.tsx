import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement as HTMLElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
