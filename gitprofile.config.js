// gitprofile.config.js

const config = {
  github: {
    username: 'ppyadav', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'pp-yadav',
    twitter: 'pyadav',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ppyadav.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://rxresu.me/r/v4nYxxt0', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'IBM Qradar SIEM',
    'IBM Spectrum Protect',
    'Web Application Pentest',
    'Linux',
    'Threat Analysis',
    'Vulnerability Assessment',
    'Active Directory',
    'Log Analysis',
    'Incident Response',
  ],
  experiences: [
    {
      company: 'Inspira Enterprise',
      position: 'Cyber Security Analyst',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://inspiraenterprise.com/',
    },
   /* {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    }, */
  ],
  certifications: [
    {
      name: 'Web Application Penetration Testing',
      body: 'By The Taggart Institute',
      year: '',
      link: ''
    },
  ],
  education: [
    {
      institution: 'Tolani college',
      degree: 'BSc.IT',
      from: '2018',
      to: '2021',
    },
    /*{
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    }, */
  ],

  // To hide the `My Projects` section, keep it empty.
  /* externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ], */
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'theebonypanther', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `under construction ❤️`,
};

export default config;
