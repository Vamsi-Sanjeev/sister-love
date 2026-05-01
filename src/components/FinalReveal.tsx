import { useState } from "react";

export const FinalReveal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="space-y-12 relative">
      {!opened ? (
        <>
          <p className="line-soft text-sm uppercase tracking-[0.4em]">a small whisper</p>
          <button onClick={() => setOpened(true)} className="btn-glow animate-float">
            One last thing…
          </button>
        </>
      ) : (
        <div className="animate-blur-in space-y-8">
          <div className="ornament" />
          <p className="line text-dusk">Thank you for staying.</p>
          <p className="line-script text-5xl sm:text-6xl line-gold">Stay forever 💛</p>
          <div className="ornament" />
          <p className="pt-6 text-xs uppercase tracking-[0.4em] text-whisper">
            with all my heart
          </p>
        </div>
      )}
    </div>
  );
};
