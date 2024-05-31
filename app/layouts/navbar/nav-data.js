import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-2',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `https://instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Behance',
    url: `https://www.behance.com/${config.behance}`,
    icon: 'behance',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
