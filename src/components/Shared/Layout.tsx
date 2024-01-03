// Layout.js
import React from 'react';
import SideBar from '../Home/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10  h-screen'>
      <SideBar />
      <section className='col-span-1 md:col-span-2 lg:col-span-8  h-screen relative'>
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
