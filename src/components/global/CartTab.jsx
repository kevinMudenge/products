import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../section/CartTabItem';
import { toggleStatusTab } from '../../stores/cart';

import iconCart from '../../assets/images/shopper.png';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  const booksItems = carts.filter(item => item.productId <= 8);
  const chairsItems = carts.filter(item => item.productId > 8);
  //adding rendering logic for aesthetics.

  const [totalQuantity, setTotalQuantity] = useState(0);
  
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts])

return (
  <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
  transform transition-transform duration-500
  ${statusTab === false ? "translate-x-full" : ""}
  `}>
    <div className='flex justify-between p-5'>
      <h2 className=' text-white text-2xl'>Shopping Cart</h2>
      <div className='w-6 h-6 bg-gray-100 rounded-full
      flex justify-center items-center relative'>
        <img src={iconCart} alt="" className='w-4'/>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center'> 
          {totalQuantity}
        </span>
      </div>
    </div>
    <div>
      {booksItems.length > 0 && (
        <div className='p-5'>
          <h3 className="text-white">Books</h3>
          {booksItems.map((item, key) => 
            <CartItem key={key} data={item}/>
          )}
        </div>
      )}
      {chairsItems.length > 0 && (
        <div className='p-5'>
          <h3 className="text-white">Chairs</h3>
          {chairsItems.map((item, key) => 
            <CartItem key={key} data={item}/>
          )}
        </div>
      )}
      </div>
      <div className='grid grid-cols-2'>
          <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
          <button className='bg-amber-600 text-white'>CHECKOUT</button>
      </div>
  </div>
)
}

export default CartTab