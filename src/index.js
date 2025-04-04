import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Success from './Success';
import Fail from './Fail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/Success' element={<Success/>}></Route>
  <Route path='/Fail' element={<Fail/>}></Route>
 </Routes>
 </BrowserRouter>
);

