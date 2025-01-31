import React from 'react';
import Carousel from './components/Carousel.tsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 pt-8 flex items-center justify-center">
      <div className="w-full max-w-6xl pb-24"> {/* Ajout de padding-bottom */}
        <Carousel />
      </div>
    </div>
  );
};

export default App;