import React from 'react';
import Home from '../Components/Home'
import About from '../Components/About'

const routes = [
  
  { path: '/', exact: true, name: 'تنظیمات کاربران / ایجاد کاربر', component: <Home/> },
  { path: '/About', exact: true, name: 'تنظیمات کاربران / ایجاد کاربر', component: <About/> },
];

export default routes;
