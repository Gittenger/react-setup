import React, { useEffect } from 'react'

import { HomePageContainer } from './HomePageContent.styles.jsx'

const HomePageContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<HomePageContainer>
			<h1>Home Page Content</h1>
		</HomePageContainer>
	)
}

export default HomePageContent
