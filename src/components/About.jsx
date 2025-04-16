import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);




const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Linea de vida</p>
        <h2 className={styles.sectionHeadText}>Descripcion General.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Puedes descargar mi CV en el siguiente enlace:&nbsp;
      <a
        href="/CV Jonatan.pdf"
        download
        className="text-[#915EFF] underline hover:text-white transition duration-300"
      >
        Descargar CV Jonatan Mtz F.
      </a>
    </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Soy estudiante de Ingeniería en Sistemas Computacionales, con una sólida formación en programación, redes, bases de datos y 
       desarrollo de software. 
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       A lo largo de mi carrera he trabajado en proyectos académicos y personales que integran tecnologías como 
       Node.js, React, bases de datos relacionales, automatización y simulación de sistemas.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Me apasiona resolver problemas mediante la 
       tecnología, aprender continuamente y aplicar mis conocimientos en entornos reales que aporten valor. 
       Busco seguir creciendo 
       profesionalmente en áreas como desarrollo web, administración de TI y soluciones empresariales innovadoras.
      </motion.p>
           

      <div className="mt-20 flex flex-wrap gap-10" style={{ justifyContent: 'center' }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
