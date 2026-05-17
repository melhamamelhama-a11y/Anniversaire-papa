import { Heart } from 'lucide-react';

export function ThankYouSection() {
  return (
    <div
      className="w-full py-20 md:py-32 px-4 bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663664325929/MnkcPML9745GUHGjY2dDAj/thank-you-background-H6bRkukKQoZvuhsARyoeit.webp)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <Heart size={64} className="text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Merci Papa
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-8"></div>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl border-t-4 border-[#D4AF37]">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Papa, en ce jour spécial, nous voulons te dire combien tu comptes pour nous. Tu as
            été notre guide, notre soutien, et notre inspiration à chaque étape de notre vie.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Tes valeurs, ta sagesse et ton amour inconditionnel nous ont façonnés. Les souvenirs
            que nous avons partagés resteront à jamais gravés dans nos cœurs.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Aujourd\'hui, nous célébrons non seulement ton anniversaire, mais aussi tout ce que tu
            représentes pour nous. Merci d\'être le père merveilleux que tu es.
          </p>

          <div className="space-y-4">
            <p className="text-[#D4AF37] text-2xl font-bold">Joyeux Anniversaire Papa !</p>
            <p className="text-gray-600 italic">Avec tout notre amour,</p>
            <p className="text-gray-600 italic">Ta famille</p>
          </div>
        </div>

        {/* Décorations */}
        <div className="flex justify-center gap-4 mt-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
