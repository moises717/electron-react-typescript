import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

import App from './App';
import './index.css';

root.render(<App />);
