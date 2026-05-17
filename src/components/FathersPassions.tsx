import { Dumbbell, Utensils, Wind } from 'lucide-react';

export function FathersPassions() {
  return (
    <div className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Les Passions de Papa
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sport */}
          <div className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-lg p-8 shadow-lg border-t-4 border-[#D4AF37] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 mb-6 mx-auto">
              <Dumbbell size={32} className="text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4 text-center">
              Le Sport
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Papa est passionné par le fitness ! Il passe régulièrement à la salle de sport et adore courir dans les escaliers. Sa détermination et sa discipline sont inspirantes pour toute la famille.
            </p>
          </div>

          {/* Cuisine */}
          <div className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-lg p-8 shadow-lg border-t-4 border-[#D4AF37] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 mb-6 mx-auto">
              <Utensils size={32} className="text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4 text-center">
              La Pâtisserie
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Papa est un maître pâtissier ! Ses Cornes de Gazelle et ses Maroutes (ces délicieuses pâtisseries fourrées à la date) sont absolument succulentes. Ses créations culinaires ravissent toute la famille.
            </p>
          </div>

          {/* Musique */}
          <div className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-lg p-8 shadow-lg border-t-4 border-[#D4AF37] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 mb-6 mx-auto">
              <Wind size={32} className="text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4 text-center">
              La Musique
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Papa adore la musique de qualité, particulièrement Amy Winehouse et le jazz soul. Il apprécie les artistes authentiques et les mélodies intemporelles qui touchent le cœur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
