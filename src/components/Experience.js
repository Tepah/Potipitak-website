import React from 'react';
import {experience} from "./constants";
import { motion } from "framer-motion";
import styles, { layout } from "../style";

const ExperienceTable = () => {

  const experienceItem = experience.map(job =>
    <ExperinceDisplay job={job} />
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
    <div id="experience">
      <motion.div
        initial={outView}
        whileInView={inView}
      >
        <h2 className={`${styles.heading2} flex flex-1`}>Experience</h2>
      </motion.div>
      <div className="sm:py-32 py-16">
        {experienceItem}
      </div>
    </div>
  )
}

const ExperinceDisplay = ({job}) => {

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
    x: 50
  }

  return (
    <motion.section className={layout.sectionReverse}
        initial={outView}
        whileInView={inView}
    >
      <div className={layout.sectionInfo}>
        <h5 className={`font-poppins font-semibold xs:text-[30px] text-[20px] text-white xs:leading-[76.8px] 
        leading-[66.8px] w-full`}>{job.name}</h5>
        <p className={`${styles.paragraph}`}>{job.desc}</p>
      </div>
      <div className={layout.sectionImgReverse}>
        <img className={`w-[300px] shadow relative`}
             src={job.src} alt={job.name}/>
        <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%]
          rounded-full  white__gradient" />
        <div className="absolute z-[0] left-1/2 top-0 w-[50%] h-[50%]
          rounded-full  blue__gradient" />
      </div>
    </motion.section>
  )
}


export default ExperienceTable