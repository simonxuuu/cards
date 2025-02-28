import { NextResponse } from 'next/server';
import { generateFlashcards } from '@/lib/geminiAI';

export async function POST(request) {
  try {
    const { inputText } = await request.json();
    
    if (!inputText || inputText.trim() === '') {
      return NextResponse.json(
        { error: 'Input text is required' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would include your API key or token
    // const apiKey = process.env.GEMINI_API_KEY;
    
    // Call the AI service to generate flashcards
    const flashcards = await generateFlashcards(inputText);
    
    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json(
      { error: 'Failed to generate flashcards' },
      { status: 500 }
    );
  }
}