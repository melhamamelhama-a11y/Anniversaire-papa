import { useState } from 'react';
import { Play, Pause, Music, ExternalLink } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: 'Back to Black',
    artist: 'Amy Winehouse',
    duration: '3:56',
    url: 'https://youtu.be/TJAfLE39ZZ8?si=uYYlCdKgY7CCeoyd',
  },
  {
    id: 2,
    title: 'Beat It',
    artist: 'Michael Jackson',
    duration: '4:18',
    url: 'https://youtu.be/oRdxUFDoQe0?si=Q0Pm9XJ1-dqoXVGr',
  },
  {
    id: 3,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: '4:54',
    url: 'https://youtu.be/Zi_XLOBDo_Y?si=DiQ_tPi3RjsUZ1io',
  },
  {
    id: 4,
    title: 'You Know I\'m No Good',
    artist: 'Amy Winehouse',
    duration: '4:08',
    url: 'https://youtu.be/b-I2s5zRbHg?si=cdo5R8GH8mOzg3hV',
  },
  {
    id: 5,
    title: 'Retiens la nuit',
    artist: 'Johnny Hallyday',
    duration: '4:30',
    url: 'https://youtu.be/0paUMNed8t4?si=om-XzkTavfWEPp3i',
  },
  {
    id: 6,
    title: 'Three Little Birds',
    artist: 'Bob Marley',
    duration: '4:15',
    url: 'https://youtu.be/LanCLS_hIo4?si=zVtKzEk2GEEOV3GY',
  },
  {
    id: 7,
    title: 'Is This Love',
    artist: 'Bob Marley',
    duration: '3:45',
    url: 'https://youtu.be/69RdQFDuYPI?si=GTFSRmL6GYqW-sxI',
  },
];

export function Playlist() {
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);

  const openYouTube = (url: string) => {
    window.open(url, '_blank');
    setCurrentSongId(null);
  };

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Playlist de Papa
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#D4AF37]">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <Music className="text-[#D4AF37]" size={28} />
              <p className="text-gray-600">Les musiques préférées de Papa - Jazz, Soul et Classiques</p>
            </div>

            <div className="space-y-3">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    currentSongId === song.id
                      ? 'bg-[#D4AF37]/10 border-l-4 border-[#D4AF37]'
                      : 'bg-[#F5F5F5] hover:bg-[#F0F0F0] border-l-4 border-transparent'
                  }`}
                >
                  <div className="text-[#1A2B4A] font-bold w-6 text-center">{index + 1}</div>

                  <button
                    onClick={() => {
                      setCurrentSongId(song.id);
                      openYouTube(song.url);
                    }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A2B4A] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="Écouter sur YouTube"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#1A2B4A] truncate">{song.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{song.artist}</p>
                  </div>

                  <div className="text-sm text-gray-500 font-medium">{song.duration}</div>

                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    title="Ouvrir sur YouTube"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Cliquez sur le bouton play ou l'icône pour écouter sur YouTube
        </p>
      </div>
    </div>
  );
}
