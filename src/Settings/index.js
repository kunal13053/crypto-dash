import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfimButton'
import Page from '../Shared/Page'

// eslint-disable-next-line
export default function () {
    return (
        <Page name="settings">
            <WelcomeMessage/>
            <ConfirmButton/>
        </Page>
    )
}