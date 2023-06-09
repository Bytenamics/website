import { getPermalink } from '~/ts/utils';

export const headerData = {
  links: [
    {
      text: 'Tracking',
      href: getPermalink('/tracking'),
    },
    {
      text: 'Create',
      href: getPermalink('/create'),
    },
    {
      text: 'Update Status',
      href: getPermalink('/status'),
    }
  ]
};

export const footerData = {
  footNote: `
    <a class='text-zinc-600 hover:underline dark:text-gray-200' href='https://github.com/Anish-Shobith'>Trackdoc</a> &copy; 2022 - Present · All rights reserved.
  `,
};
