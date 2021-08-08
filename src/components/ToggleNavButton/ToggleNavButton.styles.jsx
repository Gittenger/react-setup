import styled from 'styled-components'

import { device } from '../../styles/css/utils.styles.js'

const { tabletS } = device

export const ToggleNavButtonContainer = styled.button`
	width: 1.3rem;
	height: 1.3rem;
	background: none;
	cursor: pointer;
	border: none;
	color: var(--black);
	transition: transform 0.4s;

	&.inactive {
		transform: rotate(0);
	}

	&.active {
		transform: rotate(180deg);
	}

	${tabletS} {
		width: 2rem;
		height: 2rem;
	}
`
