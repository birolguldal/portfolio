
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Birol",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Testimonials",
      link: "#projects",
    }
    // {
    //   title: "Links",
    //   link: "/links",
    // }
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Birol",
  description: "Experienced full-stack software engineer with a passion for empowering the next generation of tech innovators through personalized and engaging computer science tutoring.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "With a rich background as a senior full-stack software engineer at industry giants like Ford Motor Company and J.P. Morgan, I possess a profound understanding of computer science's practical and theoretical aspects.",
    "This experience allows me to offer students a unique perspective on how computer science principles are applied in real-world, high-stakes environments.",
    "I am passionate about sharing my knowledge and skills to foster the development of aspiring programmers, offering them personalized, insight-driven learning experiences. My blend of industry experience, technical proficiency, and educational commitment positions me as an unparalleled resource for those seeking to excel in computer science and make impactful contributions to the tech world.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Conceptual Understanding",
      description: "I emphasize a strong foundation in fundamental computer science concepts, ensuring students not only learn how to code but also understand the underlying principles. This approach fosters deep comprehension and the ability to tackle new and unfamiliar problems.",
      icons: null,
    },
    {
      title: "Real-World Application",
      description: "Drawing on my extensive experience at Ford Motor Company and J.P. Morgan, I integrate real-world examples and projects into the curriculum. This not only makes learning more interesting but also prepares students for the practical challenges they will face in their careers.",
      icons: null,
    },
    {
      title: "Interactive Learning",
      description: "I believe in active participation and encourage students to learn by doing. Through interactive sessions, coding exercises, and collaborative projects, students gain hands-on experience that reinforces learning and enhances their problem-solving skills.",
      icons: null,
    },
    {
      title: "Personalized Mentorship",
      description: "Recognizing that each student has unique strengths, weaknesses, and learning styles, I tailor my teaching methods to suit individual needs. This personalized approach ensures that every student receives the support they need to thrive.",
      icons: null,
    },
    {
      title: "Continuous Feedback and Improvement",
      description: "I maintain an open line of communication for feedback and continuously adapt my teaching methods to maximize effectiveness and student satisfaction.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Testimonials",
  cards: [
    {
      //title: "StarBook",
      //description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      //image: profile.src,
    },
    {
      //title: "QuranTalk",
      //description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      // icons: [
      //   {
      //     icon: faAppStore,
      //     link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
      //   },
      //   {
      //     icon: faGooglePlay,
      //     link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
      //   },
      // ]
    },
    {
      //title: "Portfolio",
      //description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      // icons: [
      //   {
      //     icon: faGithub,
      //     link: "https://github.com/hashirshoaeb/portfolio",
      //   },
      // ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Ready to elevate your computer science skills and unlock your potential? Feel free to reach out directly by email at birolguldal@gmail.com or call/text at (734)-972-2928.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:birolguldal@gmail.com",
      isPrimary: true,
    },
    {
      title: "Call Me",
      link: "tel:+17349722928",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Birol Guldal | tutor | computer science | michigan | ann arbor",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}