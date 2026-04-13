import { base } from "../utils/base";

export default function Navbar() {
   
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur z-50">

      <div className="flex items-center gap-2">
    <img src={`${base}logo.png`} className="h-8" />
  <span className="text-white font-bold">
    Fran<span className="text-red-500">Dev</span>
  </span>
</div>

      <ul className="hidden md:flex gap-8 text-gray-400">
  <li 
    onClick={() => scrollToSection("proyectos")}
    className="hover:text-white cursor-pointer"
  >
    Proyectos
  </li>

  <li 
    onClick={() => scrollToSection("sobre-mi")}
    className="hover:text-white cursor-pointer"
  >
    Sobre mí
  </li>

  <li 
    onClick={() => scrollToSection("contacto")}
    className="hover:text-white cursor-pointer"
  >
    Contacto
  </li>
</ul>

    </nav>
  );
}