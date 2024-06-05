import React from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/global/Header';
import CartTab from '../components/global/CartTab';

const Dashboardlayout = () =>{
  const statusTabCart = useSelector(store => store.cart.statusTabCart)
  return (
   <div className='bg-zinc-200'>
   <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
   ${statusTabCart === false ? "" : "-translate-x-56"}`}>
    <Header />
    <Outlet />
    </main>
    <CartTab />
    </div>
  )
}

export default Dashboardlayout