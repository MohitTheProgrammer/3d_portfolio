import {
  angular,
  audio,
  compilar,
  contact,
  css,
  express,
  firebase,
  git,
  github,
  html,
  instagram,
  javascript,
  linkedin,
  mongodb,
  mysql,
  nodejs,
  react,
  sass,
  tailwindcss,
  trip,
  typescript,
  whatsapp,
  costartup,
} from "../assets/icons";
import { appginie } from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "Mysql",
    type: "Backend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "React Native (Intern)",
    company_name: "Appginie Pvt. Ltd.",
    icon: appginie, // import your icon
    iconBg: "#e0f2fe",
    date: "3-Month Internship",
    points: [
      "Developed responsive and interactive user interfaces using React JS.",
      "Collaborated with team members to implement, test, and optimize frontend components.",
      "Worked with component-based architecture and improved UI performance.",
      "Gained hands-on experience with debugging, Git version control, and team workflows.",
    ],
    border: "border-b-4 border-b-blue-300",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "tel:+919560829946",
  },
  {
    name: "Instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/nirmohi_t/",
  },
  {
    name: "WhatsApp",
    iconUrl: whatsapp,
    link: "https://wa.me/919560829946",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/MohitTheProgrammer",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mohit-mahour-1703a929a/",
  },
];

export const projects = [
  {
    iconUrl: compilar,
    theme: "btn-back-blue",
    name: "Online JavaScript Compiler",
    description:
      "Built a real-time collaborative JavaScript compiler that allows multiple users to write, execute, and sync code simultaneously using live updates powered by Socket.IO.",
    link: "https://online-js-compiler.onrender.com/",
  },
  {
    iconUrl: audio,
    theme: "btn-back-green",
    name: "Audio Book Platform",
    description:
      "Developed a modular audiobook streaming platform with user authentication and data management using Firebase, focusing on clean UI and scalable Angular architecture.",
    link: "https://mohittheprogrammer.github.io/Audio-Book/",
  },
  {
    iconUrl: trip,
    theme: "btn-back-orange",
    name: "Trip – Delhi Travel App",
    description:
      "Designed and developed a travel application to explore Delhi’s tourist attractions with structured data handling, Firebase CRUD operations, and fully responsive layouts.",
    link: "https://mohittheprogrammer.github.io/trip/",
  },
  {
    iconUrl: costartup,
    theme: "btn-back-pink",
    name: "Co-Startup-App",
    description:
      "Developing and maintaining a React Native mobile application with a focus on clean UI, reusable components, and seamless interaction with backend APIs while optimizing performance.",
    link: "https://play.google.com/store/apps/details?id=com.costartup",
  },
];
