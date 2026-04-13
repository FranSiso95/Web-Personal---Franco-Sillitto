import { motion } from "framer-motion";

export default function About() {
  return (
    <section 
    id="sobre-mi"
    className="bg-black text-white px-6 md:px-16 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-red-500">mí</span>
          </h2>

          <p className="text-gray-400 mb-4">
            Soy desarrollador web enfocado en crear páginas modernas,
            rápidas y visualmente impactantes.
          </p>

          <p className="text-gray-400 mb-4">
            Me especializo en transformar ideas en experiencias digitales
            que no solo se ven bien, sino que también funcionan y generan resultados.
          </p>

          <p className="text-gray-400">
            Actualmente trabajo con tecnologías como React, Tailwind y JavaScript,
            desarrollando sitios optimizados para todo tipo de dispositivos.
          </p>

          {/* BOTÓN */}
          <a
            href="#contacto"
            className="inline-block mt-6 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Contactarme
          </a>
        </motion.div>

        {/* LADO DERECHO (cards) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-red-500">+5</h3>
            <p className="text-gray-400 text-sm">Proyectos reales</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-red-500">100%</h3>
            <p className="text-gray-400 text-sm">Responsive</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-red-500">⚡</h3>
            <p className="text-gray-400 text-sm">Performance</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-red-500">🎯</h3>
            <p className="text-gray-400 text-sm">Resultados</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}