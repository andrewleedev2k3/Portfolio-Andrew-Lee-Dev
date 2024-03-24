import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import {
  projectOne,
  projectTwo,
  projectThree,
  logoFPTEdu,
  logoUdemy,
  lovelypet,
} from "@/assets";
// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Business Stratagy",
    des: "Guiding Growth and Success: Crafting Effective Business Strategies to Propel Your Ventures Forward.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "App Development",
    des: "Turning concepts into captivating apps through innovative development. Let's create your app vision together.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Elevating Online Visibility: Unlocking the Power of SEO Optimization for Improved Search Rankings and Reach.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Elevating Your Brand with Engaging and Intuitive Mobile Solutions. Let's Shape the Future of Digital Experiences Together.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Crafting Exceptional Experiences: Navigating the Intersection of Creativity and Functionality in UX Design.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Powering Your Online Presence: Reliable Hosting Solutions to Elevate Your Websites and Reach Your Audience.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "JOBHUB Website",
    des: "Candidates have the ability to search for jobs, while employers can search for candidates on a job recruitment website.",
    src: projectOne,
    demo: "https://jobhub-andrewleedev.netlify.app/",
  },
  {
    id: 2,
    title: "MEDUSA STORE",
    des: "Our project aims to redefine online shopping with a seamless platform offering a vast array of products.",
    src: projectTwo,
    demo: "https://medusa-store-ecommerce.vercel.app/",
  },
  {
    id: 3,
    title: "TASKFLOW - DNDKIT",
    des: "Welcome to Taskflow, your ultimate productivity companion designed to streamline your workflow and enhance your efficiency. ",
    src: projectThree,
    demo: "https://task-flow-liard.vercel.app/",
  },
  {
    id: 4,
    title: "LOVELY-PET",
    des: "Welcome to Lovely Pet, your go-to destination for all things pet-related! Our website project is dedicated to providing pet lovers with a one-stop platform for all their furry friend needs.",
    src: lovelypet,
    demo: "https://lovelypet.website/",
  },
];

export const educationData = [
  {
    id: 1,
    logo: logoFPTEdu,
    title: "FPT Polytechnic",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: null,
    des: "I have received an exceptional education at FPT Polytechnic College, where I not only attained remarkable academic achievements but also further developed my logical reasoning and coding abilities, gaining valuable hands-on experience in the process.",
  },
  {
    id: 2,
    title: "Study on Udemy",
    logo: logoUdemy,
    subTitle: "Online Courses (2022 - 2023)",
    result: null,
    des: "Udemy greatly enriched my journey, enhancing my coding skills through diverse courses. This mix of structured learning and self-driven exploration equips me with technical proficiency and practical application, ready to thrive in the dynamic tech industry.",
  },
];
export const academicAchievements = [
  {
    id: 1,
    title: "FPT Polytechnic",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "GPA: 3.60/4",
    des: "At FPT Polytechnic, I graduated with excellence, a testament to my dedication to learning. The curriculum enriched my coding skills and honed my algorithmic and logical thinking, paving the way for my growth into a proficient and accomplished programmer.",
  },
  {
    id: 2,
    title: "Study on Udemy",
    subTitle: "Online Courses (2022 - 2023)",
    result: "Elevating Coding Proficiency",
    des: "Udemy has been instrumental in my development. I've efficiently acquired and applied coding skills to my ongoing project, enhancing my proficiency in ReactJs, NodeJs, frontend and backend frameworks, and propelling my growth within the programming industry.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "GOLDEN BEE AWARDS",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 5",
  },
  {
    id: 2,
    title: "Good Student",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 2",
  },
  {
    id: 3,
    title: "Excellent Student",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 3",
  },
  {
    id: 4,
    title: "Excellent Student",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 4",
  },
  {
    id: 5,
    title: "Excellent Student",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 5",
  },
  {
    id: 6,
    title: "Excellent Student",
    subTitle: "FPT Polytechnic College (2021 - 2023)",
    result: "Semester 6",
  },
];

export const exprencesData = [];

export const skillsData = {
  be: [
    {
      id: 1,
      title: "Node Js",
      percent: "95%",
    },
    {
      id: 2,
      title: "Express Js",
      percent: "90%",
    },
    {
      id: 3,
      title: "MySQL, PostgreSQL, MongoDB",
      percent: "80%",
    },
    {
      id: 4,
      title: "APIs",
      percent: "90%",
    },
    {
      id: 5,
      title: "Deployment",
      percent: "80%",
    },
  ],

  fe: [
    {
      id: 1,
      title: "HTML 5, CSS3, JavaScript",
      percent: "95%",
    },
    {
      id: 2,
      title: "Responsive Design ",
      percent: "90%",
    },
    {
      id: 3,
      title: "React Js",
      percent: "95%",
    },
    {
      id: 4,
      title: "Framework FE",
      percent: "90%",
    },
    {
      id: 5,
      title: "Design",
      percent: "90%",
    },
  ],
};
