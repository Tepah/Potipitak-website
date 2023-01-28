import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import {projects} from "./constants";
import styles, { layout } from "../style";

const ProjectTable = () => {
  const projectItem = projects.map(project =>
    <ProjectDisplay project={project} />
  )

  const inView = {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
      duration: 0.8,
      delay: .2
    }
  }

  const outView = {
    opacity: 0,
    y: -30
  }

  return (
    <section id={"projects"}>
      <motion.div
        initial={outView}
        whileInView={inView}
        exit={{ opacity: 0 }}>
        <h2 className={`${styles.heading2} flex flex-1`}>Projects</h2>
      </motion.div>
      <div className="sm:py-32 py-16">
        <ul>
          {projectItem}
        </ul>
      </div>
    </section>
  );
}

const ProjectDisplay = ({project}) => {

  const inView = {
    opacity: 1,
    x: 0,
  transition: {
    x: { type: "spring", stiffness: 100 },
    duration: 0.8,
    delay: .2
    }
  }
  const outView = {
    opacity: 0,
    x: -50
  }

  return (
    <li>
      <figure>
        <motion.div
          initial={outView}
          whileInView={inView}>
          <div className={layout.section}>
            <div className={layout.sectionImg}>
              <img className="rounded-xl w-[500px] shadow relative"
                   src={project.img} alt={project.name} />
              <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%]
                rounded-full white__gradient" />
            </div>
            <div className={`${layout.sectionInfo} max-w-[500px] min-w-[200px] m-7`}>
              <h5 className={`font-poppins font-semibold xs:text-[30px] text-[20px] text-white xs:leading-[76.8px] 
                  leading-[66.8px] w-full`}>{project.name}</h5>
              <p className={`${styles.paragraph} mt-5`}>{project.desc}</p>
            </div>
          </div>
        </motion.div>
      </figure>
    </li>
  )
}

export default ProjectTable