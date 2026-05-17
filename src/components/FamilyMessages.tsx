import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart } from 'lucide-react';

interface Message {
  id: number;
  author: string;
  content: string;
  date: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    author: 'Marie',
    content: 'Papa, tu es le meilleur ! Merci pour tous les souvenirs magnifiques que tu nous as donnés.',
    date: '2026-05-15',
  },
  {
    id: 2,
    author: 'Jean',
    content: 'Joyeux anniversaire Papa ! Tes conseils et ton amour nous ont guidés toute notre vie.',
    date: '2026-05-14',
  },
  {
    id: 3,
    author: 'Sophie',
    content: 'Papa, tu es notre héros. Merci d\'être toujours là pour nous. Bon anniversaire !',
    date: '2026-05-13',
  },
];

export function FamilyMessages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && content.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        author,
        content,
        date: new Date().toISOString().split('T')[0],
      };
      setMessages([newMessage, ...messages]);
      setAuthor('');
      setContent('');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-4">
          Messages de la Famille
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto mb-12"></div>

        {/* Formulaire */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12 border-t-4 border-[#D4AF37]">
          <h3 className="text-2xl font-bold text-[#1A2B4A] mb-6">Laisse un message pour Papa</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ton nom"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
              />
            </div>
            <div>
              <Textarea
                placeholder="Écris un message chaleureux pour Papa..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={!author.trim() || !content.trim() || isSubmitting}
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A2B4A] font-semibold py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              Envoyer le message
            </Button>
          </form>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#D4AF37] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-[#1A2B4A]">{message.author}</h4>
                  <p className="text-sm text-gray-500">{message.date}</p>
                </div>
                <Heart size={20} className="text-[#D4AF37] fill-[#D4AF37]" />
              </div>
              <p className="text-gray-700 leading-relaxed">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
