'use client';

import { useState } from 'react';

export default function FlashcardForm({ onSubmit, isLoading }) {
  const [inputText, setInputText] = useState('');
  const [inputType, setInputType] = useState('notes'); // 'notes' or 'topic'
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="border rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        <div className="flex border rounded-md overflow-hidden">
          <button
            type="button"
            className={`px-4 py-2 flex-1 ${
              inputType === 'notes' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setInputType('notes')}
          >
            Study Notes
          </button>
          <button
            type="button"
            className={`px-4 py-2 flex-1 ${
              inputType === 'topic' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setInputType('topic')}
          >
            Topic Prompt
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="inputText" className="block mb-2 font-medium">
          {inputType === 'notes' 
            ? 'Paste your study notes here' 
            : 'Enter a topic to generate flashcards for'}
        </label>
        <textarea
          id="inputText"
          rows="10"
          className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none resize-none"
          placeholder={inputType === 'notes' 
            ? 'Paste your lecture notes, textbook excerpts, or study material...' 
            : 'E.g., "Basics of quantum physics" or "Key events of World War II"'
          }
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className={`px-6 py-3 rounded-md font-medium ${
            isLoading || !inputText.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Generating...' : 'Generate Flashcards'}
        </button>
      </div>
    </form>
  );
}