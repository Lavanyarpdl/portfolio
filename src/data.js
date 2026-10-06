export const profile = {
  name: 'Lavanya R',
  role: 'Frontend Developer',
  status: 'Open to full-time Frontend developer and Fullstack developer roles',
  email: 'lavanyarpdl@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lavanya-ranganathan-7179b4232/',
  github: 'https://github.com/Lavanyarpdl/react-node-login-register',
  intro: `I build responsive, scalable web applications using Vue.js, React, and JavaScript,
    with over two years of hands-on frontend experience shipping live, production-facing
    products. I'm also growing into full stack development through personal projects with
    Node.js.`,
  aboutStats: 'Based in India\n2+ years experience\nFrontend-first, full stack capable',
  aboutParagraphs: [
    `Most of my recent work has been on live, production-facing products across travel
    and logistics — flight booking platforms with real-time pricing and PNR data, B2B
    portals, and shipment-tracking dashboards — where the details that matter are the
    ones users never notice: fast forms, correct states, and pages that hold up under
    real traffic. Along the way I've built 20+ reusable UI components and cut load times
    by roughly 30% through code and asset optimization.`,
    `I'm actively looking for a team where I can keep building things like that, pick up
    new technologies quickly, and grow alongside people who care about the craft.`,
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React.js', 'Redux', 'JavaScript', 'HTML & CSS', 'Responsive design & media queries'],
  },
  {
    title: 'Backend & data',
    skills: ['Node.js', 'MySQL', 'SQL', 'API integration', 'B2B portals'],
  },
  {
    title: 'Architecture',
    skills: ['Headless components', 'Reusable component libraries', 'Payment gateway integration — SlicePay, FlexPay, Plaid'],
  },
  {
    title: 'Tools & practice',
    skills: ['GitLab', 'Google Analytics & GTM', 'AI-assisted development tools', 'Manual testing', 'Debugging'],
  },
];

export const featuredProject = {
  name: 'Flyro',
  url: 'https://flyro.ca',
  urlLabel: 'flyro.ca',
  description: `A live flight booking website — search, booking flow, and PNR pages built
    with Vue.js, integrating real-time flight availability and fare APIs for a responsive,
    end-to-end booking experience.`,
  tech: ['Vue.js', 'JavaScript', 'API integration', 'Responsive design'],
};

export const secondaryProjects = [
  {
    label: 'Citi Air Travel',
    description: `A flight booking platform built for a US-based client, with the same real-time
      fare and availability integration work as the rest of my travel projects.`,
    url: 'https://citiairtravel.com',
    urlLabel: 'citiairtravel.com',
  },
  {
    label: 'Majestic Courier',
    description: `A logistics website covering shipment tracking and order management, built with
      the same component-based, API-integrated frontend approach as my other live projects.`,
    url: 'https://majesticcourier.com',
    urlLabel: 'majesticcourier.com',
  },
  {
    label: 'React + Node login & register',
    description: `A full stack authentication starter — React on the frontend, Node on the backend —
      built to practice a clean, secure sign-up and sign-in flow from scratch.`,
    url: 'https://github.com/Lavanyarpdl/react-node-login-register',
    urlLabel: 'View on GitHub',
    external: true,
  },
];
