import Flashcard from './Flashcard';

export default function FlashcardStack({ flashcards }) {
  return (
    <div className="space-y-6">
      {flashcards.map((card, index) => (
        <Flashcard 
          key={index}
          front={card.front}
          back={card.back}
        />
      ))}
      
      <div className="text-center text-gray-600 mt-4">
        {flashcards.length} flashcards generated
      </div>
    </div>
  );
}