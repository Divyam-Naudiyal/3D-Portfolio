const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 18, suffix: "+", label: "Technologies Learned" },
  { value: 400, suffix: "+", label: "Hours of Coding Practice" },
  { value: 23, suffix: "+", label: "Completed Projects & Assignments" },
  { value: 100, suffix: "%", label: "Passion for Development" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.svg",
  },
  {
    name: "JavaScript Developer",
    imgPath: "/images/logos/javascript.svg",
  },
  {
    name: "C Developer",
    imgPath: "/images/logos/c (1).svg",
  },
  {
    name: "C++ Developer",
    imgPath: "/images/logos/c.svg",
  },
  {
    name: "PostgreSQL Developer",
    imgPath: "/images/logos/postgresql.svg",
  },
  {
    name: "MongoDB Developer",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "TypeScript Developer",
    imgPath: "/images/logos/typescript.svg",
  },

];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Divyam demonstrated strong analytical skills and applied machine learning techniques effectively to build practical classification models.",
    imgPath: "/images/exp9.png",
    logoPath: "/images/logo9.png",
    title: "Machine Learning Intern",
    date: "September 2023 - December 2023",
    responsibilities: [
      "Designed and implemented machine learning models for movie genre classification and spam SMS detection using supervised learning techniques.",
  "Performed data preprocessing, feature extraction, and model evaluation to improve classification accuracy.",
  "Analyzed model performance and optimized algorithms to ensure reliable and efficient predictions."
    ],
  },
  {
    review: "Divyam showcased strong full-stack development skills, delivering functional and user-friendly web applications with a problem-solving approach.",
    imgPath: "/images/exp11.png",
    logoPath: "/images/logo10.png",
    title: "Full Stack Intern",
    date: "May 2024 - August 2024",
    responsibilities: [
      "Designed and developed WaveFlow, a web-based music player focused on intuitive UI and smooth streaming experience.",
    "Built a URL Shortener application to generate and manage shareable links efficiently.",
    "Worked across frontend and backend to implement scalable web application features."
    ],
  },
  {
  review:
    "Divyam delivered a clean, responsive website for VISENSOL that effectively showcased their solar services and strengthened their online presence.",
  imgPath: "/images/exp15.png",
  logoPath: "/images/logo15 (1).png",
  title: "Web Developer",
  date: "September 2024",
  responsibilities: [
    "Designed and developed a responsive business website for VISENSOL to showcase solar installation services.",
    "Implemented clean UI layouts using HTML, CSS, and JavaScript to improve clarity and user engagement.",
    "Optimized website structure and content presentation for better accessibility and performance."
  ],
},
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/divyamnaudiyal/",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    url: "https://github.com/Divyam-Naudiyal",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/divyamnaudiyal/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
