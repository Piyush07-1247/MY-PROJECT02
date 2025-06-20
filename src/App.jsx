import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RoleList from './components/RoleList';
import RoleDetails from './components/RoleDetails';

export default function App(){
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <header className="py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700">🚀 Future Tech Careers</Link>
      </header>
      <Routes>
        <Route path="/" element={<RoleList />} />
        <Route path="/role/:id" element={<RoleDetails />} />
      </Routes>
      <footer className="text-center text-sm text-gray-500 my-8">
        &copy; {new Date().getFullYear()} Career Paths • Auto‑updates every 24 h
      </footer>
    </div>
  );
}