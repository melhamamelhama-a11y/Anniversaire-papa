import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

const sampleMemories: Memory[] = [
  {
    id: 1,
    title: 'Premiers pas',
    year: '1985',
    description: 'Les premiers moments en famille',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Vacances en famille',
    year: '1995',
    description: 'Souvenirs inoubliables à la mer',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Moments de partage',
    year: '2005',
    description: 'Les plus beaux moments ensemble',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Célébrations',
    year: '2015',
    description: 'Anniversaires et fêtes en famille',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Aventures récentes',
    year: '2024',
    description: 'Les nouvelles aventures continuent',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=400&fit=crop',
  },
];

export function MemoriesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleMemories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sampleMemories.length) % sampleMemories.length);
  };

  const currentMemory = sampleMemories[currentIndex];

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Nos Souvenirs
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Navigation gauche */}
          <button
            onClick={prevSlide}
            className="hidden md:flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A2B4A] transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image principale */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-[#D4AF37] mb-6">
              <img
                src={currentMemory.image}
                alt={currentMemory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/30 to-transparent"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1A2B4A] mb-2">{currentMemory.title}</h3>
              <p className="text-[#D4AF37] text-lg font-semibold mb-2">{currentMemory.year}</p>
              <p className="text-gray-600 text-sm">{currentMemory.description}</p>
            </div>
          </div>

          {/* Navigation droite */}
          <button
            onClick={nextSlide}
            className="hidden md:flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A2B4A] transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {sampleMemories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#D4AF37] w-8'
                  : 'bg-[#D4AF37]/30 w-2 hover:bg-[#D4AF37]/60'
              }`}
            />
          ))}
        </div>

        {/* Boutons mobiles */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A2B4A] transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A2B4A] transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
