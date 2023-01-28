import React from 'react';
import '../App.css';
import {motion} from "framer-motion";
import {socialLinks, variants} from "./constants";
import styles, {layout} from "../style";

const Socials = () => {
  const socialItems = socialLinks.map( socialItem =>
    <a href={socialItem.link}>
      <motion.img
        className={`w-[60px] invert`}
        src={socialItem.src}
        alt={socialItem.name}
        variants={variants["fastDown"]}
        initial="outView"
        whileInView="inView"
      />
    </a>
  )
  return (
    <section id="socials" className={`${styles.paddingY}`}>
      <motion.h2
        className={`${styles.heading2}  flex flex-1`}
        variants={variants["down"]}
        initial="outView"
        whileInView="inView"
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
