const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Gatsby Ant-Design Documentation Starter',
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-json`,
			options: {
				typeName: `MenuItems`, // a fixed string
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `menuItems`,
				path: `${__dirname}/src/menuItems`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-root-import`,
			options: {
				src: path.join(__dirname, 'src'),
				pages: path.join(__dirname, 'src/pages'),
				components: path.join(__dirname, 'src/components'),
				images: path.join(__dirname, 'src/images'),
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-markdown',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve('./src/Layout.js'),
				},
				extensions: ['.mdx', '.md'],
				// workaround: https://github.com/gatsbyjs/gatsby/issues/16422#issuecomment-518985316
				plugins: [`gatsby-remark-autolink-headers`],
				gatsbyRemarkPlugins: [
					`gatsby-remark-katex`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1035,
						},
					},
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
				],
			},
		},
		`gatsby-plugin-remove-trailing-slashes`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
	/// this must match the path your webpage is displayed from
	pathPrefix:
		process.env.NODE_ENV === 'development' ? '' : '/gatsby-antd-docs',
}
