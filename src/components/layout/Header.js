import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useApp } from 'contexts/app'
import ToggleTheme from 'components/ToggleTheme'
import Hashtag from 'components/Hashtag'

const StyledHeader = styled.header`
	background-color: #1d1f21;
	color: white;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: 65px;
	padding: 0 16px;
	position: relative;
`

const Title = styled.h1`
	flex: 1;
	align-self: center;
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 65px;
	text-align: center;
`

const Github = styled.a`
	color: white;
	font-size: 3rem;
	height: 65px;
	/* position: absolute; */
	/* right: 16px; */
	/* top: 0; */

	span {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`

const Header = ({ title }) => {
	const { darkMode } = useApp()

	return (
		<StyledHeader>
			<ToggleTheme darkMode={darkMode} />
			<Title>
				<Hashtag icon={['far', 'hashtag']} fixedWidth />
				{title}
			</Title>

			<Github
				href="https://github.com/omBratteng/social.hashweb.org"
				target="_blank"
				alt="GitHub repo"
				rel="noopener noreferrer"
			>
				<span>view the source code</span>
				<FontAwesomeIcon icon={['fab', 'github']} />
			</Github>
		</StyledHeader>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
