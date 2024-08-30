import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "LivNSense GreenOps Private Limited",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with postgresql databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - 2024",
    role: "IT Developer Intern",
    company: "The VONG Movement",
    description: `Built WordPress websites, including a learning management system. Worked directly with servers, Apache, and Nginx.`,
    technologies: ["WordPress", "Apache", "Nginx", "PHP", "MySQL"],
  },
  {
    year: "2023 - 2023",
    role: "Research Intern",
    company: "National Institute of Technology, Silchar",
    description: `Worked on a project focused on DNA assembly error detection methods using C, Bloom filters, and hashing algorithms. This research contributed to advancements in computational biology.`,
    technologies: ["C", "Bloom Filters", "Hashing Algorithms"],
  },
  {
    year: "2022 - 2022",
    role: "React Native Intern",
    company: "Exposys Data Labs",
    description: `As a React Native Intern at Exposys Data Labs, I assisted in building React-based web applications, focusing on component optimization, SVG animations, and responsive design. I worked closely with senior developers and the design team, contributing to the creation of interactive user interfaces.`,
    technologies: ["React.js", "SVG", "Responsive Design", "JavaScript", "CSS"],
  }
];

export const PROJECTS = [
  {
    title: "Music SaaS Platform",
    image: project1, 
    description: `A music SaaS platform built with Next.js, Tailwind CSS, Prisma, and PostgreSQL. It offers scalable solutions for music streaming and management.`,
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Chatbot Powered by Large Language Models for Personalized Recommendations",
    image: project2,
    description: `An advanced recommendation system using LLMs and machine learning, integrating PALM2, LangChain, embeddings, and VectorDB for highly personalized suggestions.`,
    technologies: ["Large Language Models", "Collaborative Filtering", "PALM2", "LangChain", "Embeddings", "VectorDB", "Machine Learning"],
  },  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Todo list with Authentication",
    image: project4,
    description:
      "A React-based Todo list application with user authentication. Implemented using Hooks and Context API for state management, styled with Tailwind CSS, and built with TypeScript for type safety.",
    technologies: ["React", "Hooks", "Context API", "Tailwind CSS", "TypeScript", "Authentication"],
  },  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 8106554902",
  email: "jaswanthkumarpolisetty@gmail.com",
};
