import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Attach the function to the navigate event
    const unlisten = navigate(onRouteChange);

    // Cleanup function to remove the event listener (optional)
    return () => {
      unlisten();
    };
  }, [navigate]);

  return null; // or your actual component UI if needed
};

export default ScrollToTop;
