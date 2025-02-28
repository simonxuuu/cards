'use client';

import { useState } from 'react';

export default function ReviewMode({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState(new Set());
  const [unknownCards, setUnknownCards] = useState(new Set());
  
  const currentCard = flashcards[currentIndex];
  const totalCards = flashcards.length;
  const progress = ((currentIndex + 1) / totalCards) * 100;
  
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  
  const goToNextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };
  
  const goToPrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };
  
  const markAsKnown = () => {
    const updatedKnown = new Set(knownCards);
    updatedKnown.add(currentIndex);
    setKnownCards(updatedKnown);
    
    const updatedUnknown = new Set(unknownCards);
    updatedUnknown.delete(currentIndex);
    setUnknownCards(updatedUnknown);
    
    goToNextCard();
  };
  
  const markAsUnknown = () => {
    const updatedUnknown = new Set(unknownCards);
    updatedUnknown.add(currentIndex);
    setUnknownCards(updatedUnknown);
    
    const updatedKnown = new Set(knownCards);
    updatedKnown.delete(currentIndex);
    setKnownCards(updatedKnown);
    
    goToNextCard();
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-center mb-4">
        <span className="text-gray-600">
          Card {currentIndex + 1} of {totalCards}
        </span>
      </div>
      
      {/* Flashcard */}
      <div 
        className="relative w-full h-80 cursor-pointer mb-8"
        onClick={flipCard}
      >
        <div className={`relative w-full h-full transition-all duration-300 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front side */}
          <div className="absolute w-full h-full bg-white border rounded-lg p-8 shadow-lg backface-hidden">
            <div className="flex flex-col justify-between h-full">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl text-center font-medium">{currentCard?.front}</p>
              </div>
              <div className="text-sm text-gray-500 text-center mt-4">
                Click to reveal answer
              </div>
            </div>
          </div>
          
          {/* Back side */}
          <div className="absolute w-full h-full bg-blue-50 border rounded-lg p-8 shadow-lg backface-hidden rotate-y-180">
            <div className="flex flex-col justify-between h-full">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl text-center">{currentCard?.back}</p>
              </div>
              <div className="text-sm text-gray-500 text-center mt-4">
                Click to see question
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-between items-center">
        <button
          onClick={goToPrevCard}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md ${
            currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-4">
          <button
            onClick={markAsUnknown}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            Don't Know
          </button>
          
          <button
            onClick={markAsKnown}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
          >
            Know
          </button>
        </div>
        
        <button
          onClick={goToNextCard}
          disabled={currentIndex === totalCards - 1}
          className={`px-4 py-2 rounded-md ${
            currentIndex === totalCards - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Next
        </button>
      </div>
      
      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-2xl font-bold text-blue-700">{totalCards}</p>
          <p className="text-sm text-gray-600">Total Cards</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-2xl font-bold text-green-700">{knownCards.size}</p>
          <p className="text-sm text-gray-600">Known</p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-2xl font-bold text-red-700">{unknownCards.size}</p>
          <p className="text-sm text-gray-600">Need Review</p>
        </div>
      </div>
    </div>
  );
}