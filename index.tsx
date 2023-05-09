import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AdminPage from './Admin';
import StudentPage from './StudentPage';
import App from './App'

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter ([
  {path : '/' , element: <App/>},
  {path : '/admin' , element: <AdminPage/>},
  {path : '/student' , element: <StudentPage/>},
])

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
