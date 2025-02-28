import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Gemini Flash
        </Link>
        
        <div className="flex space-x-6">
          <Link href="/generate" className="hover:text-blue-600 transition-colors">
            Generate
          </Link>
          <Link href="/review" className="hover:text-blue-600 transition-colors">
            Review
          </Link>
        </div>
      </div>
    </nav>
  );
}