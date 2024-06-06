import React, { useState, useEffect }  from 'react'
import { useDispatch } from 'react-redux';

import { changeQuantity } from '../../stores/cart';

import { products } from '../../data/products';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState(null);  // Initialize detail to null
    const dispatch = useDispatch();
  
    useEffect(() => {
      const findDetail = products.find(product => product.id === productId);  
      // Use find instead of filter, generating errors
      setDetail(findDetail);
    }, [productId]);
  
    const handleMinusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1  // Corrected quantity decrement
      }));
    }
  
    const handlePlusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
      }));
    }
  
    if (!detail) {
      return null; // Or a loading indicator depends with data size
    }

  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md mb-1'>
      <img src={detail.image} alt="" className='w-12'/>
      <h3>{detail.name}</h3>
      <p>Ksh. {detail.price * quantity}</p>
      <div className='w-20 flex justify-between gap-2'>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  )
}

export default CartItem