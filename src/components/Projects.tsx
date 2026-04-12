import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  img: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Rincón Integral",
    desc: "Sitio web profesional para negocio local con diseño moderno y optimización mobile.",
    img: "/public/logo-rincon.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fransiso95.github.io/rincon-integral/",
  },
  {
    title: "Vidriería Azar",
    desc: "Web para vidriería y marqueteria a pedidos con catálogo de productos.",
    img: "/public/logo-azar.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fransiso95.github.io/Vidrieria-Azar/",
  },
  {
    title: "Libreria Rick & Morty",
    desc: "Web que consume la API de Rick & Morty para mostrar personajes, con búsqueda y paginación.",
    img: "/public/logo-rick-morty.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fransiso95.github.io/Proyecto-Js/",
  },
  {
    title: "BuscaMinas",
    desc: "Juego clásico de buscaminas implementado en JavaScript.",
    img: "/public/logo-buscaminas.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fransiso95.github.io/Proyecto-React/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // 🔒 bloquear scroll
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  // ⌨️ cerrar con ESC
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="bg-black text-white px-6 md:px-16 py-24">

      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Proyectos <span className="text-gray-500">destacados</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(p)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer relative overflow-hidden rounded-xl group shadow-xl"
          >

            <img
              src={p.img}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/60 flex items-end p-4">
              <h3 className="text-lg font-bold">{p.title}</h3>
            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* ❌ cerrar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <img
                src={selected.img}
                className="rounded-xl mb-4"
              />

              <h3 className="text-2xl font-bold">
                {selected.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {selected.desc}
              </p>

              {/* TECNOLOGÍAS */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BOTÓN */}
              <a
                href={selected.link}
                target="_blank"
                className="block mt-6 bg-red-500 text-center py-3 rounded-lg hover:bg-red-600 transition"
              >
                Ver proyecto 🚀
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}