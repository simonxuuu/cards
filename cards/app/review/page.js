'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReviewMode from '@/components/ReviewMode';
import { getFlashcards } from '@/lib/flashcardStore';

export default function ReviewPage() {
  const [flashcards, setFlashcards] = useState([]);
  
  useEffect(() => {
    const storedFlashcards = getFlashcards();
    setFlashcards(storedFlashcards);
  }, []);
  
  if (flashcards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">No Flashcards Found</h1>
        <p className="text-gray-600 mb-8">
          You don't have any flashcards to review yet. Generate some flashcards first!
        </p>
        <Link 
          href="/generate"
          className="inline-block bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 transition-colors"
        >
          Generate Flashcards
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Review Flashcards</h1>
      <ReviewMode flashcards={flashcards} />
    </div>
  );
}