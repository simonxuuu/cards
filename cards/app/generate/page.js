'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashcardForm from '@/components/FlashcardForm';
import FlashcardStack from '@/components/FlashcardStack';
import { saveFlashcards } from '@/lib/flashcardStore';

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const generateFlashcards = async (inputText) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate flashcards');
      }
      
      const data = await response.json();
      setFlashcards(data.flashcards);
    } catch (err) {
      console.error('Error generating flashcards:', err);
      setError('There was an error generating your flashcards. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const saveAndReview = () => {
    if (flashcards.length > 0) {
      saveFlashcards(flashcards);
      router.push('/review');
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generate Flashcards</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <FlashcardForm 
            onSubmit={generateFlashcards} 
            isLoading={isLoading} 
          />
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>
        
        <div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Generated Flashcards</h2>
            
            {flashcards.length > 0 && (
              <button
                onClick={saveAndReview}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Save & Review
              </button>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : flashcards.length > 0 ? (
            <FlashcardStack flashcards={flashcards} />
          ) : (
            <div className="border border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-500">
              Your generated flashcards will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}