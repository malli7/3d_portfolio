import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cognizant,
  coursehero,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "WordPress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2022",
    points: [
      "Developed a web-based student management system using React for the front-end and Spring Boot and Java for the back end.",
      "Utilized MySQL for database management and incorporated functions such as student registration,course scheduling, and grade tracking.",
      "Worked in a team of five to complete the project within a six-month time.",
      "Increased the system's efficiency in comparison to previous systems. ",
    ],
  },
  {
    title: "Tutor",
    company_name: "CourseHero",
    icon: coursehero,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Helped students solve coding challenges in Java and Python while also explaining the underlying ideas.",
      "Answered 500+ questions posted in course hero, reinforcing python and java concepts with 93% helpful rating. ",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2023",
    points: [
      "successfully contributed to the 'Viacom MSO Steady State' project by offering customized software solutions that were in line with requirements.",
      "coordinated post-production support services for the installed software systems, assuring their smooth operation and alignment with Viacom's ongoing business needs. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "Explore a captivating world of 3D art and design through my portfolio website, showcasing visually stunning creations that push the boundaries of imagination and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/malli7/3d_portfolio",
  },
  {
    name: "AI Summarizer",
    description:
      "AI Summarizer allows users to input an article link, and it summarizes the contents of the article, providing a concise summary as output.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/malli7/ai_summarizer",
  },
];

export { services, technologies, experiences, testimonials, projects };
