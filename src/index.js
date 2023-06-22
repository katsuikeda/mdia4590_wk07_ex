import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

// main view that loads other views
import Layout from './views/Layout';
import Home from './views/Home';
import TodoApp from './views/TodoApp';
import RecipeApi from './views/RecipeApi';

import NotFound from './views/NotFound';


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="todo" element={<TodoApp />} />        
        <Route path="recipe" element={<RecipeApi />} /> 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

