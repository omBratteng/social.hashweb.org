import { createGlobalStyle } from 'styled-components'

// FontAwesome
// Add the css on the server side
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { lightTheme } from 'styles/lightTheme'
import { darkTheme } from 'styles/darkTheme'

const GlobalStyle = createGlobalStyle`
:root {
	box-sizing: border-box;
	font-family: 'Fira Code', monospace;
	font-size: 16px;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	font-style: normal;
	font-weight: 400;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	text-rendering: optimizeLegibility;
	text-size-adjust: 100%;
}

html,
body,
#__next { min-height: 100%; }

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background: var(--global-background-color);
	color: var(--global-font-color);
	font-feature-settings: "liga" 1, "lnum" 1, "tnum" 1;
	font-variant-ligatures: common-ligatures;
	line-height: ${(props) => props.theme.font.lineHeight};
	margin: 0;
	transition: background 0.5s ease, color 0.5s ease;

	@supports not (font-variant-ligatures: common-ligatures) {
		font-feature-settings: "liga";
	}

	&.dark-mode {
		--global-background-color: ${darkTheme.colors.background};
		--global-font-color: ${darkTheme.colors.font};
		--global-link-color: ${darkTheme.colors.linkColor};
	}

	&.light-mode {
		--global-background-color: ${lightTheme.colors.background};
		--global-font-color: ${lightTheme.colors.font};
		--global-link-color: ${lightTheme.colors.linkColor};
	}
}


svg:not(:root).svg-inline--fa{overflow:visible;}
.svg-inline--fa{
	display:inline-block;
	font-size:inherit;
	height:1em;
	overflow:visible;
	vertical-align:-0.125em;

	.fa-primary {
		fill: var(--fa-primary-color, currentColor);
		opacity: var(--fa-primary-opacity, 1);
	}

	.fa-secondary {
		fill: var(--fa-secondary-color, currentColor);
		opacity: var(--fa-secondary-opacity, 0.4);
	}

	&.fa-swap-opacity {
		.fa-primary {
			opacity: var(--fa-primary-opacity, 0.4);
		}

		.fa-secondary {
			opacity: var(--fa-primary-opacity, 1);
		}
	}

	&.fa-fw{width:1.25em;}

	mask {
		.fa-primary,
		.fa-secondary {
			fill: black;
		}
	}
}
`

export { GlobalStyle, lightTheme, darkTheme }
