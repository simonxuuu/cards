'use client';

import { useState } from 'react';

export default function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="relative w-full h-64 cursor-pointer perspective"
      onClick={toggleFlip}
    >
      <div className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front side */}
        <div className="absolute w-full h-full bg-white border rounded-lg p-6 shadow-md backface-hidden">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg text-center">{front}</p>
            </div>
            <div className="text-sm text-gray-500 text-center mt-4">
              Click to flip
            </div>
          </div>
        </div>
        
        {/* Back side */}
        <div className="absolute w-full h-full bg-blue-50 border rounded-lg p-6 shadow-md backface-hidden rotate-y-180">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg text-center">{back}</p>
            </div>
            <div className="text-sm text-gray-500 text-center mt-4">
              Click to flip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}