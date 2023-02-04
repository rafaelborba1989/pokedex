import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './routes/Home';
import Page from './routes/Page';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: "pages",
    element: (<Page/>)
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);