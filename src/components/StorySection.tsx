import { ReactNode } from "react";

interface StorySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const StorySection = ({ children, className = "", id }: StorySectionProps) => {
  return (
    <section id={id} className={`section-shell overflow-hidden ${className}`}>
      <div className="text-shell relative z-10">{children}</div>
    </section>
  );
};
