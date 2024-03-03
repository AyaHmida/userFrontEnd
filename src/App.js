import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from './pageHome';
import Login from './authentification/login'; 
import Register from './authentification/register'; 
import Publication from './components/publication'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageHome/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/publication" element={<Publication/>} />
            </Routes>
        </Router>
    );
}
export default App;
