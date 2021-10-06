import React from 'react'
import { Link } from 'react-router-dom'

import { NavListContainer } from './NavList.styles'

const NavList = ({ className }) => {
	return (
		<NavListContainer className={`${className} nav-list`}>
			<li>
				<Link data-page="home" to="/">
					Home
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="contact" to="/contact">
					Contact
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="portfolio" to="/portfolio">
					Portfolio
					<div className="nav-underline"></div>
				</Link>
			</li>
		</NavListContainer>
	)
}

export default NavList
