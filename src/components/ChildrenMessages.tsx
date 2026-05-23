import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ChildMessage {
  id: number;
  name: string;
  message: string;
}

const childrenMessages: ChildMessage[] = [
  {
    id: 1,
    name: 'Amine',
    message: 'Cher Papa, Joyeux Anniversaire🎉\n !! Toujous en mode non-stop😄\n Avec le pris de l\'essence ⛽️\n, je suis sûr que t\'a une alerte ‼️\n  Mais comme elle... plus ça monte, plus ça vaut cher 😎\n Joyeux Anniversaire PAPA .',
  },
  {
    id: 2,
    name: 'Amel',
    message: 'Joyeux anniversaire Papa 🎉\nJe te souhaite plein de bonheur, de santé et de beaux moments aujourd\'hui et toute l\'année. Profite bien de ta journée ❤️',
  },
  {
    id: 3,
    name: 'Manel',
    message: 'joyeux anniversaire mon VIEUX! J\'espère que tu garderas toujours un esprit de jeune et que ta vie sera remplit de bonheur😘\!',
  },
  {
    id: 4,
    name: 'Hamza',
    message: 'Bon anniversaire papa 🎉\ Que du bonheur et de la santé pour toi . Plus qu’un an avant de pouvoir rejouer au tennis !',
  },
  {
    id: 5,
    name: 'Myriam',
    message: 'Papa, merci pour ton amour et ta sagesse. Joyeux anniversaire !',
  },
  {
    id: 6,
    name: 'Kenza',
    message: 'Cher Hamid,je te souhaite un merveilleux anniversaire entouré de personnes qui t\'aiment et j\'espère qu\'on pourra partager tous les suivants ensemble! InshaaAllah. Qu'Allah te préserve et te donne la santé et l\'amour des tiens le plus longtemps possible. Gros bisous!',
  },
];

export function ChildrenMessages() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setVisibleCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
        Messages de ta famille
      </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <p className="text-center text-gray-600 text-lg mb-12">
          Avec tout notre amour et notre gratitude
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childrenMessages.map((child, index) => (
            <div
              key={child.id}
              className="h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <button
                onClick={() => toggleCard(child.id)}
                className="w-full h-full group cursor-pointer"
              >
                <div
                  className={`w-full h-80 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] ${
                    visibleCards.includes(child.id)
                      ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#1A2B4A]/10'
                      : 'bg-white hover:shadow-2xl'
                  }`}
                >
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                    {visibleCards.includes(child.id) ? (
                      <div className="space-y-4 animate-fadeIn">
                        <Heart size={40} className="text-[#D4AF37] fill-[#D4AF37] mx-auto" />
                        <p className="text-gray-700 text-base leading-relaxed italic">
                          "{child.message}"
                        </p>
                        <p className="text-[#D4AF37] font-bold text-lg">— {child.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Heart size={48} className="text-[#D4AF37] fill-[#D4AF37] mx-auto" />
                        <h3 className="text-2xl font-bold text-[#1A2B4A]">{child.name}</h3>
                        <p className="text-gray-500 text-sm">Cliquez pour lire le message</p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Cliquez sur chaque carte pour découvrir les messages de cœur
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
