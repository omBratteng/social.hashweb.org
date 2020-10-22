/* eslint-disable no-undef */
const isProd =
	process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

// const nonce = process.env.CSP_NONCE

module.exports = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix: isProd ? 'https://socialhashweb.b-cdn.net' : '',
	// Customize the client side manifest.
	assetsManifestClient: {
		output: `${process.cwd()}/public/asset-manifest.json`,
	},
}
