import defaultImage from '../assets/images/default.png';

const CONFIG = {
  name: 'TrackDoc',
  origin: 'http://localhost:3000',
  basePathname: '/',
  trailingSlash: false,
  title: 'TrackDoc',
  description: 'Official website of TrackDoc',
  defaultImage: defaultImage,
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: 'en',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
