interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: '1956',
    title: 'Naissance',
    description: 'Le début d\'une belle histoire',
  },
  {
    year: '1975',
    title: 'Rencontre avec Maman',
    description: 'Le jour où tout a changé',
  },
  {
    year: '1980',
    title: 'Mariage',
    description: 'L\'union de deux cœurs',
  },
  {
    year: '1985',
    title: 'Naissance du premier enfant',
    description: 'La famille s\'agrandit',
  },
  {
    year: '2000',
    title: 'Grands-parents',
    description: 'Une nouvelle génération arrive',
  },
  {
    year: '2026',
    title: 'Anniversaire spécial',
    description: '70 ans de vie, 70 ans de souvenirs',
  },
];

export function Timeline() {
  return (
    <div className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white via-[#F5F5F5] to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Les Moments Importants
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-[#B8941F]"></div>

          {/* Événements */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } md:gap-8 gap-4`}>
                {/* Contenu */}
                <div className="w-full md:w-5/12">
                  <div className={`bg-white rounded-lg p-6 shadow-md border-l-4 ${
                    index % 2 === 0
                      ? 'border-l-[#D4AF37] md:text-right'
                      : 'border-l-[#1A2B4A] md:text-left'
                  }`}>
                    <div className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>

                {/* Point central */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] border-4 border-white shadow-lg"></div>
                </div>

                {/* Espace vide */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
