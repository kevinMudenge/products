import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCart from '../../components/section/ProductCart';

const Dashboard = () => {
  const [displayCategory, setDisplayCategory] = useState('all');

  const books = products.filter(product => product.id <= 8);
  const chairs = products.filter(product => product.id > 8);

  const renderProducts = () => {
    if (displayCategory === 'books') {
      return books.map((product, key) => <ProductCart key={key} data={product} />);
    }
    if (displayCategory === 'chairs') {
      return chairs.map((product, key) => <ProductCart key={key} data={product} />);
    }
    return products.map((product, key) => <ProductCart key={key} data={product} />);
  };

  return (
    <div>
      <h1 className='text-3xl mt-5'>List Products</h1>
      <div className='flex justify-between items-end'>
        <h2 className='mb-0'>Do you like Books or Chairs? 😃</h2>
        <div className='flex justify-end gap-4'>
          {displayCategory !== 'chairs' && <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setDisplayCategory('chairs')}>Chairs</button>}
          {displayCategory !== 'books' && <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => setDisplayCategory('books')}>Books</button>}
          {displayCategory !== 'all' && <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={() => setDisplayCategory('all')}>See All</button>}
        </div>

      </div>
      <div className='mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {renderProducts()}
      </div>
    </div>
  );
};

export default Dashboard;