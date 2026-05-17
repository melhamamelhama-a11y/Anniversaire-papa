import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';

interface RSVPData {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no' | 'maybe' | '';
  guests: string;
  dietary: string;
}

export function RSVPForm() {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    dietary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttendanceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value as 'yes' | 'no' | 'maybe' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.attendance) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: '',
          guests: '1',
          dietary: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle size={64} className="text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-4">
            Merci pour votre réponse !
          </h2>
          <p className="text-gray-600 text-lg">
            Nous avons bien reçu votre confirmation. À bientôt le 30 mai !
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Confirmez votre présence
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#D4AF37]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Nom complet *</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Téléphone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 6 XX XX XX XX"
                className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
              />
            </div>

            {/* Présence */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Serez-vous présent ? *</label>
              <Select value={formData.attendance} onValueChange={handleAttendanceChange}>
                <SelectTrigger className="border-[#D4AF37]/30 focus:border-[#D4AF37]">
                  <SelectValue placeholder="Sélectionnez votre réponse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Oui, j\'y serai !</SelectItem>
                  <SelectItem value="maybe">Peut-être</SelectItem>
                  <SelectItem value="no">Non, je ne pourrai pas venir</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Nombre d'invités */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Nombre de personnes
                </label>
                <Input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                />
              </div>
            )}

            {/* Régimes alimentaires */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Régimes alimentaires spéciaux
                </label>
                <Input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="Ex: végétarien, sans gluten, etc."
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.attendance}
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A2B4A] font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              Envoyer ma réponse
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
