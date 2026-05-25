import { motion } from "framer-motion";

export default function Hero() {

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-red-500 tracking-[6px] text-sm mb-4"
      >
        DESARROLLADOR WEB FULLSTACK
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Franco
        <span className="block text-red-500">Sosa</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Creo experiencias web modernas, rápidas y visualmente impactantes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <button 
        onClick={() => scrollToSection("proyectos")}
        className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition">
          Ver proyectos
        </button>

        <button 
        onClick={() => scrollToSection("contacto")}
        className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition">
          Contacto
        </button>
      </motion.div>

    </section>
  );
}