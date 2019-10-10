import React from 'react'
import { Button as _Button } from 'antd'
import styled from 'styled-components'
import { baseStyles } from '../styles'

const StyledButton = styled(_Button).attrs({
	size: 'large',
	shape: 'round',
})`
	&& {
		height: 50px;
		font-weight: bold;
		color: white;
		background-color: ${baseStyles.primaryColor};
	}
`

export default function Button(props) {
	return <StyledButton {...props} />
}
