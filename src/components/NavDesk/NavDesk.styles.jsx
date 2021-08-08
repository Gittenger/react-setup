import styled from 'styled-components'

import {
	cssIndex,
	device,
	deviceHeight,
} from '../../styles/css/utils.styles.js'

const { tabletMM } = device
const { heightM, heightS, heightXS, heightXXS } = deviceHeight

export const NavContainer = styled.div`
	position: fixed;
	width: 100%;
	${cssIndex.flexCenter}
	flex-direction: column;
	justify-content: space-around;
	width: var(--navWidth);
	height: 100vh;
	z-index: 100;

	.logo-img {
		height: var(--logoHeight);
		img {
			height: 100%;
		}
	}
	.nav-list-desk {
		height: 65%;
	}

	${tabletMM} {
		display: none;
	}

	${heightM} {
		justify-content: center;

		.logo-img {
			--logoHeight: 11rem;
			margin-bottom: var(--m-M);
		}

		.nav-list-desk {
			font-size: 1.6rem;
			height: auto;

			& > :not(:last-child) {
				margin-bottom: 1.7rem;
			}
		}
	}

	${heightS} {
		.logo-img {
			--logoHeight: 9rem;
			margin-bottom: var(--m-S);
		}

		.nav-list-desk {
			& > :not(:last-child) {
				margin-bottom: 1.6rem;
			}
		}
	}

	${heightXS} {
		.logo-img {
			--logoHeight: 20%;
		}

		.nav-list-desk {
			font-size: 1.4rem;
		}

		img {
			width: auto;
		}
	}

	${heightXXS} {
		.logo-img {
			--logoHeight: 15%;
		}

		.nav-list-desk {
			font-size: 1.3rem;
		}
	}
`
