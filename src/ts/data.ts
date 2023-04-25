import { getPermalink } from '~/ts/utils';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/features'),
    },
    {
      text: 'Sign Up',
      href: getPermalink('/signup'),
    },
    {
      text: 'Login',
      href: getPermalink('/login'),
    }
  ]
};

export const footerData = {
  footNote: `
    <a class='text-zinc-600 hover:underline dark:text-gray-200' href='https://github.com/Anish-Shobith'>Trackdoc</a> &copy; 2022 - Present · All rights reserved.
  `,
};
