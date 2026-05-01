/** Floating ambient particles — gentle dust/light motes */
export const Particles = ({ count = 24, color = "hsl(var(--gold))" }: { count?: number; color?: string }) => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + (i % 5);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 6 + (i % 7);
        const delay = (i % 9) * 0.6;
        return (
          <span
            key={i}
            className="absolute block rounded-full animate-twinkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
};
