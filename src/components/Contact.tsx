import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    title: "Gmail",
    value: "fransosa291113@gmail.com",
    link: "mailto:fransosa291113@gmail.com?subject=Consulta%20Web&body=Hola%20Franco,%20me%20interesa%20hacer%20una%20p%C3%A1gina%20web",
    icon: <MdEmail size={20} className="text-red-400" />,
  },
  {
    title: "WhatsApp",
    value: "Enviame un mensaje",
    link: "https://wa.me/5493516332819?text=Hola%20Franco,%20me%20comunico%20porque%20necesito%20una%20p%C3%A1gina%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    icon: <FaWhatsapp size={20} className="text-green-500" />,
  },
  {
    title: "GitHub",
    value: "github.com/FranSiso95",
    link: "https://github.com/FranSiso95",
    icon: <FaGithub size={20} className="text-gray-300" />,
  },
  {
    title: "LinkedIn",
    value: "Escribime por LinkedIn",
    link: "#",
    icon: <FaLinkedin size={20} className="text-blue-500" />,
  },
  {
    title: "Instagram",
    value: "Mandame un DM",
    link: "https://instagram.com/fransosa95",
    icon: <FaInstagram size={20} className="text-pink-500" />,
  },
  {
    title: "Facebook",
    value: "Contactame por Facebook",
    link: "https://www.facebook.com/FranSosa1995/?locale=es_LA",
    icon: <FaFacebook size={20} className="text-blue-400" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black text-white px-6 md:px-16 py-24 text-center"
    >
      {/* TITULO */}
      <p className="text-red-500 tracking-[4px] mb-4">CONTACTO</p>

      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        ¿Trabajamos <span className="text-red-500">juntos?</span>
      </h2>

      <p className="text-gray-400 mb-16 max-w-xl mx-auto">
        Si tenés un proyecto en mente o simplemente querés charlar,
        no dudes en contactarme.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {contacts.map((c, i) => (
        <motion.a
            key={i}
            href={c.link}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group border border-white/10 rounded-xl p-6 text-left bg-white/5 backdrop-blur hover:border-red-500 transition relative overflow-hidden"
        >
            {/* glow */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-[0_0_30px_rgba(239,68,68,0.3)]"></span>

            {/* ICONO + TITULO */}
            <div className="flex items-center gap-3 mb-2">
            {c.icon}
            <p className="text-sm text-gray-400">{c.title}</p>
            </div>

            {/* TEXTO */}
            <h3 className="text-lg font-semibold group-hover:text-white transition">
            {c.value}
            </h3>

        </motion.a>
        ))}

      </div>
    </section>
  );
}