import styled from 'styled-components'
import {color} from '../Global/global'

export const Button = styled.a`
	border-radius: 50px;
	background: ${({primary}) => (primary ? color.first : color.second)};
	white-space: nowrap;
	padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
	color: ${({dark}) => (dark ? color.second : '#fff')};
	font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	display : flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? '#fff' : color.first)};
	}
	&:link, &:active, &:visited {
		text-decoration: none;
		color: inherit;
	}
`