import React from 'react';
import { motion } from "framer-motion";
import styles from "../style";

const Hero = () => {
  const outView = {
    opacity: 0
  }

  const inView = {
    opacity: 1,
    transition: {
      delay: 0.2
    }
  }

  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id={"home"} className={`flex md:flex-row flex-col sm:py-96 py-40 sm:mb-56 mb-20`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 z-[5]`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[200px]
                leading-[75px]">
                  Pete Potipitak
                </h1>
              </div>
              <p className={`${styles.paragraph} max-w-[470px] mt-3`}>all about <span className={'text-gradient'}>Pete</span>
              </p>
            </div>
          <div className={"absolute z-[0] w-[50%] h-[50%] top-0 left-0 blue__gradient"} />
          <div className={"absolute z-[0] w-[30%] h-[30%] bottom-0 right-0 white__gradient"} />
        </section>
      </div>
    </div>
  )
}

export default Hero