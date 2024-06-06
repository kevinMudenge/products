import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { products } from '../../data/products';
import { addToCart } from '../../stores/cart';

const Productdetails = () => {
  const { slug } = useParams();
  const [quantity, setQuantity]= useState(1);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const [detail, setDetail] = useState([]);
  useEffect(()=> {
    const findDetail = products.filter(product => product.slug === slug);

    if(findDetail.length > 0){
      setDetail(findDetail[0])
    } else {
      //window.location.href = '/404PageNotFound'; caused errors
      navigate('//404PageNotFound')

    }
  }, [slug, navigate])//only runs if either of the two changes that should handle that.

  const handleMinusQuantity =()=>{
    setQuantity(quantity - 1 < 1 ? 1 : quantity -1)}
  const handlePlusQuantity =()=>{
    setQuantity(quantity + 1)
  }

  const handleAddToCart =()=> {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  }
  
  return (
    <div>
      <h2 className='text-3xl mb-12 mt-3 text-center'>PRODUCT DETAILS</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} alt="" className= 'max-h-lvh'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl mb-6'>
            Ksh. {detail.price}
          </p>
          <div className='flex gap-5'>
          <div className='flex gap-2 justify-center items-center'>
            <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
            <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
            <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
          </div>
          <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl' onClick={handleAddToCart}>
            Add To Cart
          </button>
          </div>
          <p className='mt-4'>
            {detail.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Productdetails;