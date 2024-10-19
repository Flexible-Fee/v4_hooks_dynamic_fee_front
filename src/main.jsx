import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import DynamicFee from './DynamicFee.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/fee/:contractAddress" element={<DynamicFee />} />
            </Routes>
        </Router>
    </StrictMode>
);
