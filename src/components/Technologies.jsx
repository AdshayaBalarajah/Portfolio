import React from "react";
import {
  SiMongodb,
  SiSpringboot,
  SiSass,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiC,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub, FaJava, FaCss3Alt } from "react-icons/fa"; // Java from Font Awesome
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="technologies" className="pb-32">
      <div className="pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10"
        >
          {[
            { Icon: FaReact, className: "text-cyan-400" },
            { Icon: SiSpringboot, className: "text-green-700" },
            { Icon: SiMysql, className: "text-blue-600" },
            { Icon: DiGit, className: "text-red-600" },
            { Icon: FaGithub, className: "text-white" },
            { Icon: SiHtml5, className: "text-orange-600" },
            { Icon: SiCss3, className: "text-blue-600" },
            { Icon: SiSass, className: "text-pink-600" },
            { Icon: SiBootstrap, className: "text-purple-600" },
            { Icon: SiJavascript, className: "text-yellow-500" },
            { Icon: FaJava, className: "text-red-700" }, // Using FaJava instead of SiJava
            { Icon: SiTailwindcss, className: "text-teal-500" }, // Tailwind CSS
            { Icon: SiC, className: "text-blue-600" }, // C Language
          ].map(({ Icon, className }, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={iconVariants(2 + index)}
              className="p-4 flex-shrink-0"
            >
              <Icon className={`text-6xl md:text-7xl ${className}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;



