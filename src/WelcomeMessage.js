import React from 'react'
import styled, {css} from 'styled-components'

const MyButton = styled.div`
    color: green;
    ${props => props.primary && css`
        color: pink;
    `}
`

const MyExtendedButton = styled(MyButton)`
    color: blue;
    border-color: blue;
`

export default function WelcomeMessage() {
    return (
        <div>
            <h1>Welcome to CryptoDash!</h1>
            <MyButton>Hello</MyButton>
            <MyButton primary>Hello</MyButton>
            <MyExtendedButton primary>Hello</MyExtendedButton>
        </div>
    )
}