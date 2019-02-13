const path = require('path');

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'antd pro',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locale`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        postCssPlugins: [
          // eslint-disable-next-line
          require(`postcss-preset-env`)({ stage: 0 }),
          // eslint-disable-next-line
          require('autoprefixer')({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9',
              'last 2 versions',
              'iOS >= 8',
              'Safari >= 8',
            ],
          }),
        ],
      },
    },
    'gatsby-plugin-typescript',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
