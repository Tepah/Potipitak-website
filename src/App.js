import { Hero, ProjectTable, ExperienceTable, AboutMe, Navbar, Socials } from './components';
import { motion } from "framer-motion";
import styles from'./style';

const App = () => {
  return(
    <div className="App">
      <header className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>


        <motion.div
          initial={{opacity: 0}}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: .2
              }
          }}>
            <Hero />
          </motion.div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <ProjectTable />
            <ExperienceTable />
            <AboutMe />
            <Socials />
          </div>
        </div>
      </header>
    </div>
  )
};


export default App;