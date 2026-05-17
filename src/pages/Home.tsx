import { useState } from 'react';
import { Confetti } from '@/components/Confetti';
import { Playlist } from '@/components/Playlist';
import { FathersPassions } from '@/components/FathersPassions';
import { ChildrenMessages } from '@/components/ChildrenMessages';
import { ThankYouSection } from '@/components/ThankYouSection';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'passions', label: 'Ses Passions' },
    { id: 'playlist', label: 'Playlist' },
    { id: 'messages', label: 'Messages' },
    { id: 'thankyou', label: 'Merci Papa' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Confetti />

      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
            <h1 className="text-xl font-bold text-[#1A2B4A]">Anniversaire Papa</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                    : 'text-[#1A2B4A] hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1A2B4A]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D4AF37]/20 py-4">
            <div className="px-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-[#1A2B4A] hover:bg-[#F5F5F5] rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663664325929/MnkcPML9745GUHGjY2dDAj/hero-anniversary-5Sf7zz3TXhDMb8BbckgUof.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Joyeux Anniversaire Papa
          </h1>
          <p className="text-2xl md:text-3xl text-[#D4AF37] font-semibold mb-8 drop-shadow-lg">
            30 Mai 2026
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl text-white mb-12 leading-relaxed drop-shadow-md">
            Une célébration de vie, d'amour et de souvenirs précieux
          </p>
          <Button
            onClick={() => scrollToSection('passions')}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A2B4A] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Commencer la célébration
          </Button>
        </div>
      </section>

      <section id="passions">
        <FathersPassions />
      </section>

      <section id="playlist">
        <Playlist />
      </section>

      <section id="messages">
        <ChildrenMessages />
      </section>

      <section id="thankyou">
        <ThankYouSection />
      </section>

      <footer className="bg-[#1A2B4A] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D4AF37] font-semibold mb-2">Avec tout notre amour</p>
          <p className="text-gray-300">© 2026 - Anniversaire Papa - Une célébration familiale</p>
        </div>
      </footer>
    </div>
  );
}
