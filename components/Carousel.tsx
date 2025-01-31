import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import CarouselItem from './CarouselItem.tsx';
import CarouselControls from './CarouselControls.tsx';
import CarouselIndicators from './CarouselIndicators.tsx';

// Le code slides défini dans le même fichier
const imageNames = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"];
const avatarNames = ["avatar0.jpeg", "avatar1.jpeg", "avatar2.jpeg", "avatar3.jpeg", "avatar4.jpeg", "avatar5.jpeg"];

const images = imageNames.map(name => require(`../assets/${name}`));
const avatars = avatarNames.map(name => require(`../assets/${name}`));

const slides = images.map((src, index) => ({
  id: index + 1,
  src,
  title: ["TOP BUSINESS CONFERENCE","GLOBAL TECH SUMMIT","STARTUP EXPO","DIGITAL TRANSFORMATION","DIGITAL TRANSFORMATION","DIGITAL TRANSFORMATION"][index],
  subtitle: ["to Attend in 2025 in India","Innovation & Technology 2025","Connect & Grow in 2025","Future of Business 2025","Future of Business 2025","Future of Business 2025"][index],
  avatar: avatars[index]
}));

// (voir la définition ci-dessus)

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true
  });

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full max-w-6xl mx-auto pb-20">
      <div 
        className="relative w-full overflow-hidden rounded-lg"
        style={{ height: '500px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        {...handlers}
      >
        {slides.map((slide, index) => (
          <CarouselItem 
            key={slide.id}
            slide={slide}
            isActive={index === currentIndex}
          />
        ))}
        <CarouselControls 
          goToPrevious={goToPrevious} 
          goToNext={goToNext} 
        />
      </div>
      <CarouselIndicators 
        slides={slides}
        currentIndex={currentIndex}
        setCurrentIndex={goToSlide}
      />
    </div>
  );
};

export default Carousel;
