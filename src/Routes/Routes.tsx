import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashboard, Team, Invoices, Contacts, Bar, Form, Line, Pie, FAQ, Calendar,
} from '../Pages';

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default RouteComponent;