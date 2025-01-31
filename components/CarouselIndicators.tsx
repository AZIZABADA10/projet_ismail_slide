import React from 'react';
import { motion } from 'framer-motion';

interface CarouselIndicatorsProps {
  slides: Array<{
    id: number;
    src: string;
    title: string;
    subtitle: string;
    avatar: string;
  }>;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselIndicators = ({ slides, currentIndex, setCurrentIndex }: CarouselIndicatorsProps) => {
  return (
    <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-4">
      {slides.map((slide, index) => (
        <motion.button
          key={slide.id}
          onClick={() => setCurrentIndex(index)}
          className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
            currentIndex === index 
              ? 'border-blue-500 scale-110' 
              : 'border-gray-400/50 hover:border-gray-400'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={slide.avatar}
            alt={`Indicator ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/150?text=${index + 1}`;
            }}
          />
          {currentIndex === index && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute inset-0 bg-blue-500/10 border-2 border-blue-500 rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CarouselIndicators;