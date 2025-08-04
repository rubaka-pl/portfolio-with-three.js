export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'PMB - Brand Ambassador',
    desc: 'I developed an admin panel for managing promotional codes and a dedicated landing page for brand ambassadors to track used codes.',
    subdesc:
      'Built using WordPress Multisite with PHP, SQL, and JavaScript, the system allows for easy creation, assignment, and monitoring of promo codes. The landing page provides real-time insights for ambassadors on their code usage, ensuring transparency and engagement.',
    href: 'https://github.com/rubaka-pl/ParkingMetalBox?tab=readme-ov-file',
    texture: '/textures/project/pmb.mp4',
    logo: '@assets/pmb.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '@assets/spotlight1.png',
  },
  {
    title: 'Pokedex - Pokémons Browser with API & Autocomplete',
    desc: 'Pokedex is a sleek web app for exploring Pokémon data. It features real-time search with autocomplete, detailed Pokémon stats, and a responsive UI. Built using React class components with clean project structure.',
    subdesc:
      'The app uses live data from the PokéAPI and is organized into clear folders: api, components, types, and utils. Designed for performance and easy navigation with dynamic routing.',
    href: 'https://github.com/rubaka-pl/rss-school/tree/app-state-management',
    texture: '/textures/project/pokemon.mp4',
    logo: '@assets/pokemon.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '@ssets/spotlight2.png',
  },
  {
    title: 'Vinyasa Yoga Studio – WordPress Multipage Site',
    desc: 'A modern, responsive multi-page website for a yoga studio with interactive sliders, contact forms, and blog. Built with WordPress, custom theme development, and Advanced Custom Fields for dynamic content control.',
    subdesc:
      'This project integrates Redux Framework for global settings, ACF for custom sections, and RWD for seamless mobile and desktop experience. Includes Swiper.js slider, contact booking system, and multi-language support.',
    href: 'https://linen-worm-330260.hostingersite.com/',
    texture: '@textures/project/Vinyasa.mp4',
    logo: '@assets/vinyasa-logo.svg',
    logoStyle: {
      backgroundColor: 'rgb(15 37 35 / 86%)',
      border: '0.2px solid #2A1816',
      boxShadow: '0px 0px 60px 0px rgba(89, 99, 156, 0.5)',
    },
    spotlight: '@assets/spotlight3.png',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    animeGirlPosition: isSmall ? [0, 0.4, -1.1] : isMobile ? [0, -0.3, 4] : [0, -1, 0],
    cubePosition: isSmall ? [3.6, -7, -11] : isMobile ? [3.5, -5, -3] : isTablet ? [3.5, -3.3, 1] : [6, -4.4, -1],
    reactLogoPosition: isSmall ? [4, 2, -11] : isMobile ? [3, 1, -2] : isTablet ? [3.5, 1.2, 0] : [5, 1, 1],
    ringPosition: isSmall ? [-5, 7, -13] : isMobile ? [-7, 2, -14] : isTablet ? [-7.5, 3, 0] : [-11, 2, -4],
    HeartPosition: isSmall ? [-3, -7, -13] : isMobile ? [-6, -9, -14] : isTablet ? [-7, -8, -12] : [-11, -9, -14],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'RS-School',
    pos: 'React Developer',
    duration: 'Present',
    title: `I’m taking part in a free self-paced frontend course with mentor support. 
    Each participant builds their own unique project. Mine is a Pokédex app. I'm using this opportunity to sharpen my skills in TypeScript and Redux, while following modern development practices.
     We collaborate through Discord, sharing feedback, progress, and learning as a community. The course structure helps me grow independently, yet with guidance when needed.'`,
    icon: '@assets/rs-school.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Parking magic box',
    pos: 'Web Developer',
    duration: 'May 2025 - Jul 2025 ',
    title: `Built web tools and WordPress plugins using PHP, JavaScript, and MySQL. 
    Experience with creating custom admin pages, writing SQL, building 
    simple business websites and landing pages. Also worked with WordPress 
    multisite setups and database connections between sites`,
    icon: '@assets/pmb.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Grupa NEUCA',
    pos: 'Software QA Engineer',
    duration: 'Feb 2024 - Nov 2024 (10 month)',
    title: `Testing the functionality of the logistics application, managing data in 
SAP-MM, creating and testing interfaces in SOAP UI, verifying 
communication between systems, writing test cases, preparing test data, 
and identifying, reporting, and verifying defects. I also deployed new 
application versions to the test server for pre-production testing and 
updated servers.`,
    icon: '@assets/Neuca.svg',
    animation: 'salute',
  },
];
