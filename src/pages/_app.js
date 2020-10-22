import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'

// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fad } from '@fortawesome/pro-duotone-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
// import { fas } from '@fortawesome/pro-solid-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
// library.add(far, fad)

import { faHashtag } from '@fortawesome/pro-regular-svg-icons'
library.add(faHashtag)

import { faCrown, faLink } from '@fortawesome/pro-duotone-svg-icons'
library.add(faCrown, faLink)

import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

import {
	faLightbulb,
	faLightbulbOn,
	faLightbulbSlash,
} from '@fortawesome/pro-duotone-svg-icons'

library.add(faLightbulb, faLightbulbOn, faLightbulbSlash)

// Next.js
import Head from 'next/head'

// Context
import AppProvider from 'contexts/app'

// Components
import Layout from 'components/layout/Layout'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="#web-social Hall of (f/sh)ame & majestic beards"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#1c1e20"
				/>
				<meta name="msapplication-TileColor" content="#1c1e20" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<AppProvider>
				<Layout siteTitle="#web-social Hall of (f/sh)ame">
					<Component {...pageProps} />
				</Layout>
			</AppProvider>
		</>
	)
}

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
}

export default App
