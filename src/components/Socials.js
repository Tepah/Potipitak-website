import React from 'react';
import '../App.css';
import {motion} from "framer-motion";
import {socialLinks} from "./constants";
import styles, {layout} from "../style";

const Socials = () => {
  const socialItems = socialLinks.map( socialItem =>
    <a href={socialItem.link}>
      <motion.img
        className={`w-[60px] invert`}
        src={socialItem.src}
        alt={socialItem.name}
        initial=
        whileInView="inView"
      />
    </a>
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
    <section id="socials" className={`${styles.paddingY}`}>
      <motion.h2
        className={`${styles.heading2}  flex flex-1`}
        initial={outView}
        whileInView={inView}
      >
        Socials
      </motion.h2>
      <div className={`z-[5] sm:py-64 py-32 flex flex-1 justify-center center-items justify-evenly relative`}>
        {socialItems}
        <div className="absolute z-[3] -right-2 -bottom-3 w-[50%] h-[50%]
          rounded-full  white__gradient" />
      </div>
    </section>
  )
}


export default Socials
