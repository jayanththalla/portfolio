import { cn } from "@/lib/utils";

interface DancingTextProps {
  text: string;
  className?: string;
}

export default function DancingText({ text, className }: DancingTextProps) {
  return (
    <span className={cn("dancing-name font-cursive", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="dancing-letter"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
