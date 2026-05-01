/** Decorative ornamental divider with center symbol */
export const Ornament = ({ symbol = "✦" }: { symbol?: string }) => (
  <div className="ornament my-8">
    <span className="text-sm tracking-[0.3em]">{symbol}</span>
  </div>
);
