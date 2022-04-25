import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/pagina productos/Home';
import Admin from './components/pagina productos/Admin';
import HistorialPedidos from './components/historialPedidos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />  
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/admin" element={<Admin />}>
            </Route>
            <Route path="/historial" element={<HistorialPedidos />}>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
