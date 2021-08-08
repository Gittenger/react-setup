import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const BackgroundContainer = styled.div`
	position: relative;
	top: 0;
	width: 100%;
	overflow-x: hidden;

	& > .toggle-nav-button {
		position: fixed;
		z-index: 500;
		bottom: 4rem;
		right: 1.2rem;
	}
`

export const ContentContainer = styled.div`
	width: calc(100vw - var(--navWidth));
	min-height: 95vh;
	margin-left: var(--navWidth);
	margin-right: 0;
	margin-top: var(--titleHeight);
	${cssIndex.flexCenter}
	flex-direction: column;
	background: none;
	padding-bottom: 15rem;
`
