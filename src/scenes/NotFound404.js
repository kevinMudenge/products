import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {
  const [countdown, setCountdown] = useState(75);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    
    return () => clearInterval(timer); // Cleans up timer on component unmount
  }, [countdown, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Product Not Found</h1>
      <p className="text-xl mb-10">Redirecting to the Home page in {formatTime(countdown)}...</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate('/')}
      >
        Click Here To Go Now
      </button>
    </div>
  );
};

export default NotFound404;
