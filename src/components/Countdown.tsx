import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Target date: May 30, 2026 at midnight
      const targetDate = new Date('2026-05-30T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-4 md:p-6 min-w-20 md:min-w-24">
        <div className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <p className="text-sm md:text-base text-[#1A2B4A] font-medium mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );

  return (
    <div className="w-full py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-12">
          Compte à rebours jusqu'à la fête
        </h2>
        <div className="flex justify-center gap-4 md:gap-8">
          <TimeUnit value={timeRemaining.days} label="Jours" />
          <TimeUnit value={timeRemaining.hours} label="Heures" />
          <TimeUnit value={timeRemaining.minutes} label="Minutes" />
          <TimeUnit value={timeRemaining.seconds} label="Secondes" />
        </div>
      </div>
    </div>
  );
}
