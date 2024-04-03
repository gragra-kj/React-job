import { useState } from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobsPages from './pages/JobsPages';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element ={<MainLayouts/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPages/>}/>
    <Route path='/jobs/:id' element={<JobPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Route>
  )
)

function App() {
 return (
  <RouterProvider router={router}/>

 )
};

export default App
