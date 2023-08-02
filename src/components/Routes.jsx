import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Semester from '../pages/Semester';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/semester/:semesterNumber" element={<Semester />} />
    </Routes>
  );

}

