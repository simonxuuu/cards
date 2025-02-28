const STORAGE_KEY = 'gemini_flashcards';

export function saveFlashcards(flashcards) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  }
}

export function getFlashcards() {
  if (typeof window !== 'undefined') {
    const storedFlashcards = localStorage.getItem(STORAGE_KEY);
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
  }
  return [];
}

export function clearFlashcards() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}