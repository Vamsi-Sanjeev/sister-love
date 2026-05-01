import { useEffect, useState } from "react";

interface IntroScreenProps {
  onStart: () => void;
}

const lines = ["namaskaram chelli…"," VeryGood Morning!!!", "I made something for you.", "Just read it slowly 💛"];

export const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const [shown, setShown] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setShown(i + 1), 1200 + i * 1800));
    });
    timers.push(setTimeout(() => setShowBtn(true), 1200 + lines.length * 1800 + 600));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="section-shell bg-dawn animate-dawn-rise overflow-hidden relative">
      {/* Star field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = 1 + (i % 3);
          return (
            <span
              key={i}
              className="absolute block rounded-full bg-white animate-twinkle"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 29) % 70}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.8,
                animationDuration: `${3 + (i % 5)}s`,
                animationDelay: `${(i % 8) * 0.5}s`,
                boxShadow: `0 0 ${size * 3}px rgba(255,240,200,0.8)`,
              }}
            />
          );
        })}
      </div>

      {/* Warm glow at bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[40vh] w-[80vw] -translate-x-1/2 animate-glow-pulse"
        style={{
          background: "radial-gradient(ellipse at bottom, hsl(45 95% 75% / 0.6) 0%, transparent 70%)",
        }}
      />

      <div className="text-shell space-y-12 relative z-10">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`line ${i === 0 ? "line-script text-5xl sm:text-6xl text-white" : "text-white/95"} transition-all duration-[1800ms] ease-out`}
            style={{
              filter: i < shown ? "blur(0)" : "blur(10px)",
              opacity: i < shown ? 1 : 0,
              transform: i < shown ? "translateY(0)" : "translateY(20px)",
              textShadow: "0 0 30px hsl(45 90% 70% / 0.5)",
            }}
          >
            {line}
          </p>
        ))}
        <div
          className={`pt-10 transition-all duration-[1600ms] ${
            showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button onClick={onStart} className="btn-glow">
            Start
          </button>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/50">
            scroll slowly
          </p>
        </div>
      </div>
    </section>
  );
};
