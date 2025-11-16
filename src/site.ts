// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'How to Help Seriously Endangered Animals',
  description:
    'A guide on how to contribute to the conservation of critically endangered species around the world.',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Nura',
  url: 'https://how-to-help-seriously-endangered-animals.netlify.app',
  github:
    'https://github.com/techakayy/how-to-help-seriously-endangered-animals',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
    ],
    secondary: [
      // {
      //   title: 'Subscribe',
      //   icon: 'i-mdi-home',
      //   to: '/subscribe',
      // },
    ],
  },
}
