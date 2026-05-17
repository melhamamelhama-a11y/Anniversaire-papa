import { useState } from 'react';
import { MapPin, Play } from 'lucide-react';

export function VideoAndMap() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Vidéo et Lieu de la Fête
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4">Montage Familial</h3>
            <div className="relative bg-[#1A2B4A] rounded-lg overflow-hidden shadow-lg aspect-video">
              {!videoPlaying ? (
                <div
                  className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-[#1A2B4A]/80 transition-all duration-300 group"
                  onClick={() => setVideoPlaying(true)}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={40} className="text-[#1A2B4A] fill-[#1A2B4A] ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Montage Familial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Cliquez sur le bouton play pour voir le montage familial
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4 flex items-center gap-2">
              <MapPin size={28} className="text-[#D4AF37]" />
              Lieu de la Fête
            </h3>
            <div className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-lg overflow-hidden shadow-lg flex-1 border-2 border-[#D4AF37]/20">
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <MapPin size={48} className="text-[#D4AF37] mb-4" />
                <h4 className="text-xl font-bold text-[#1A2B4A] mb-2">Lieu de Célébration</h4>
                <p className="text-center text-gray-600 mb-4">
                  Les détails du lieu seront communiqués aux invités confirmés
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-[#D4AF37] w-full">
                  <p className="text-sm text-gray-700">
                    <strong>Date :</strong> 30 Mai 2026
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Heure :</strong> À confirmer
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Lieu :</strong> À déterminer
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Confirmez votre présence pour recevoir les détails complets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
