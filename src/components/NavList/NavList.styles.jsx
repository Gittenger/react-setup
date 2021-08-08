import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

import { navStyles } from '../typography/typography.components.js'

const { tabletS } = device

export const NavListContainer = styled.ul`
	${navStyles}
	${cssIndex.flexCenter}
	flex-direction: column;

	li:not(:last-child) {
		margin-bottom: var(--m-S);
	}

	a {
		position: relative;
		transition: color -1px.3s, text-shadow 0.3s;
	}

	a:hover {
		color: var(--main);
	}

	a.active-page .nav-underline {
		display: block;
	}

	a > .nav-underline {
		display: none;
		position: absolute;
		bottom: -7px;
		left: -2px;
		height: 3px;
		width: 100%;
		background: var(--main);
	}

	${tabletS} {
		a.active-page .nav-underline {
			display: none;
		}
	}
`
