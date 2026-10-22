import '@/styles/tailwind.css';
import '@/styles/style.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Top from '@/pages/Top';

const root = document.getElementById('root');
if (!root) throw new Error('#root element not found');

createRoot(root).render(
  <StrictMode>
    <Top />
  </StrictMode>,
);
