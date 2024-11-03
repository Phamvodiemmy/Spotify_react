import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const token = new URLSearchParams(location.hash.substring(1)).get('access_token');
      if (token) {
        localStorage.setItem('spotify_token', token);
        navigate('/dashboard'); // Điều hướng đến trang Dashboard
      }
    }
  }, [location, navigate]);
};

export default useAuth;
