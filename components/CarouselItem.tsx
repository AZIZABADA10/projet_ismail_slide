import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItemProps {
  slide: {
    id: number;
    src: string;
    title: string;
    subtitle: string;
  };
  isActive: boolean;
  direction: number; // -1 pour previous, 1 pour next
}

const CarouselItem = ({ slide, isActive, direction }: CarouselItemProps) => {
  return (
    <AnimatePresence initial={false} custom={direction}>
      {isActive && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ x: direction * 100 + '%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -100 + '%', opacity: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <img 
            src={slide.src} 
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
            // Préchargement des images
            loading="eager"
          />
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center px-4">
              {slide.title}
            </h2>
            <p className="text-xl text-gray-200 text-center px-4">
              {slide.subtitle}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarouselItem;