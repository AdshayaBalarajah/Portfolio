import React from "react";
import { EDUCATION } from "../constants"; // Update to import EDUCATION
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="pb-16">
      <div className="pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Education
        </motion.h2>
        <div className="flex flex-col items-center">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col lg:flex-row lg:justify-between w-full max-w-4xl"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="lg:w-1/4 mb-4 lg:mb-0"
              >
                <p className="mb-2 text-sm text-stone-400">{edu.duration}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold text-lg">
                  {edu.degree} ={" "}
                  <span className="text-sm text-stone-500">
                    {edu.institution}
                  </span>
                </h3>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
