module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'i09ayo3gfali',
        accessToken: 'cedf80494288e14cad916dcc6b93eb40fd925c83f5cc83919724832864e956c3'
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./relative/path/to/layout/component`)
      }
    },
  ],
}
