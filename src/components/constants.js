
export const projects = [
  {name: "Stat Tracker",
    desc: "Application made in python to add statistic information and show them on graphics.",
    img: "img/stat_tracker.jpg"},
  {name: "Space Pew",
    desc: "Pygame application with score progression, lives, and power ups.",
    img: "img/space_pew.jpg"}
]

export const experience = [
  {
    name: "Amazon",
    desc: "Worked on collaborating with a team to implement distributed tracing to the routines platform on the Alexa" +
      "team. Learned a lot about the industry practices and felt like an influential part of the organization. Worked " +
      "in mainly Java and Amazon suites.",
    src: "img/amazon.png"
  },
  {
    name: "Assure-US",
    desc: "Collaborated with a partner to study the different variables that could lead to strokes using data science" +
      " methods via Pandas and plotly.",
    src: "img/California_State_University,_Fullerton_seal.svg"
  }
]

export const navLinks = [
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "about",
    title: "About"
  },
  {
    id: "socials",
    title: "Socials"
  }
]

export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pete-potipitak-69a306187/",
    src: "img/linkedin.svg"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/peteshapie/",
    src: "img/instagram.svg"
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Potipitak",
    src: "img/facebook.svg"
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/user/tepahtops?si=2c11076319904cbf",
    src: "img/spotify.svg"
  }
]

export const about = [
  {
    src: "img/self.jpg",
    info: "An aspiring software engineer, looking to make his place in the world of technology. "
  }
]

export const variants = {
  down: {
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        y: {type: "spring", stiffness: 100}
      }
    },
    outView: {
      opacity: 0,
      y: -30
    }
  },
  right:
    {
      inView: {
        opacity: 1,
        x: 0,
        transition: {
          x: {type: "spring", stiffness: 100},
          duration: 0.8,
        }
      },
      outView: {
        opacity: 0,
        x: -50
      }
    }
}
