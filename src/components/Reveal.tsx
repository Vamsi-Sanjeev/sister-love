import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "h2" | "span";
  variant?: "blur" | "fade" | "up";
  once?: boolean;
}

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "blur",
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const animClass =
    variant === "blur"
      ? "animate-blur-in"
      : variant === "fade"
      ? "animate-fade-in"
      : "animate-fade-up";

  return (
    <Tag
      ref={ref as any}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
        opacity: visible ? undefined : 0,
      }}
      className={`${visible ? animClass : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};
