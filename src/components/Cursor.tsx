import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-red-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    />
  );
}