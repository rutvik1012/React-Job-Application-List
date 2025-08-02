import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AddDetail from '../useContaxt/components/AddDetail';
import List from '../useContaxt/components/List';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AddDetail />} />
        <Route path="/job_list" element={<List />} />
      </Routes>
    </HashRouter>
  );
};

export default App;