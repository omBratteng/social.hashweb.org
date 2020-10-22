import React from 'react'

import Main from 'components/layout/Main'
import Header from 'components/layout/Header'
import Avatar from 'components/layout/Avatar'
import people from 'people.json'

const Index = () => {
	return (
		<>
			<Header title="web-social Hall of (f/sh)ame & majestic beards" />
			<Main>
				{people.map((person, key) => {
					return <Avatar key={key} {...person} />
				})}
			</Main>
		</>
	)
}

export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Index
