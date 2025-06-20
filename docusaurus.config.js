// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'ShopProp Docs',
  tagline: 'Discover. Request. Converse. Own.',
  url: 'https://MetricDust.github.io', // replace with your GitHub username
  baseUrl: '/expo_app_temp/',

  onBrokenLinks: 'warn', // ⛔ prevents build failure for now
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'MetricDust', // GitHub org/user name.
  projectName: 'expo_app_temp', // GitHub repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // serves docs at root
        },
        blog: false, // disable blog unless you're using it
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ShopProp',
        logo: {
          alt: 'ShopProp Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://github.com/MetricDust/expo_app_temp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Changelog',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://shopprop.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MetricDust/expo_app_temp',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ShopProp | Built with ❤️ using Docusaurus`,
      },
    }),
};

module.exports = config;
