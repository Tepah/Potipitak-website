import React from 'react';
import '../App.css';
import { motion } from "framer-motion";
import {about} from "./constants";
import styles, {layout} from "../style";

const AboutMe = () => {
  const aboutItem = about.map(info =>
    <AboutDisplay info ={info} />
  )

  const inView = {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
      delay: .2
    }
  }
  const outView = {
    opacity: 0,
    y: -30
  }

  return (
    <div>
      <motion.h2
        className={`${styles.heading2} flex flex-1`}
        initial={outView}
        whileInView={inView}
        >
        About Me
      </motion.h2>
      {aboutItem}
    </div>
  )
}

const AboutDisplay = ({info}) => {
  const inView = {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 100},
      duration: 0.8,
      delay: .2
    }
  }
  const outView = {
    opacity: 0,
    x: -50
  }

  return (
    <motion.section
        id="about"
        className={`${layout.section} md:py-64 py-16`}
        initial={outView}
        whileInView={inView}>
      <div className={`${layout.sectionImg}`}>
        <img className="rounded-full max-w-[500px] max-h-[500px] object-top md:h-96 h-72 md:w-96 w-72"
             src={info.src} alt="NA" />
      </div>
      <div className={`${layout.sectionInfo} max-w-[500px] md:pt-0 pt-16`}>
        <p className={styles.paragraph}>{info.info}</p>
      </div>
    </motion.section>
  )
}

export default AboutMe