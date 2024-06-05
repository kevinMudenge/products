import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {
  const [countdown, setCountdown] = useState(300); // 300 seconds = 5 minutes
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate('/'); // Redirect to the products page after countdown
    }
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [countdown, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Product Not Found</h1>
      <p>Redirecting to the products page in {formatTime(countdown)}...</p>
      <button onClick={() => navigate('/products')}>Click here to go now</button>
    </div>
  );
};

export default NotFound404;
