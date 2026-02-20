import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import Timer from './components/Timer';
import Tests from './components/Tests';
import Lounge from './components/Lounge';
import Friends from './components/Friends';
import Analytics from './components/Analytics';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="plan" element={<Schedule />} />
            <Route path="focus" element={<Timer />} />
            <Route path="tests" element={<Tests />} />
            <Route path="lounge" element={<Lounge />} />
            <Route path="friends" element={<Friends />} />
            <Route path="stats" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
