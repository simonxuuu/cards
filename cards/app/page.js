import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Gemini Flash</h1>
        <p className="text-lg mb-8">
          Create AI-powered flashcards from your notes or prompts and review them to boost your learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Generate Flashcards</h2>
            <p className="mb-4">
              Input your study notes or a topic prompt and let AI create flashcards for you.
            </p>
            <Link 
              href="/generate" 
              className="inline-block bg-blue-600 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-700 transition-colors"
            >
              Create Flashcards
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Review Flashcards</h2>
            <p className="mb-4">
              Practice with your generated flashcards to reinforce your knowledge.
            </p>
            <Link 
              href="/review" 
              className="inline-block bg-green-600 text-white font-medium rounded-md px-6 py-3 hover:bg-green-700 transition-colors"
            >
              Start Reviewing
            </Link>
          </div>
        </div>
        
        <div className="text-gray-600">
          <h3 className="text-xl font-medium mb-2">How It Works</h3>
          <ol className="text-left list-decimal list-inside space-y-2">
            <li>Enter your study notes or topic on the generation page</li>
            <li>Our AI analyzes your content and creates relevant flashcards</li>
            <li>Review your flashcards with our interactive study mode</li>
            <li>Track your progress and master the material</li>
          </ol>
        </div>
      </div>
    </main>
  );
}