import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfimButton'
import Page from '../Shared/Page' 
import CoinGrid from './CoinGrid'
import Search from './Search'

// eslint-disable-next-line
export default function () {
    return (
        <Page name="settings">
            <WelcomeMessage/>
            <CoinGrid topSection/>
            <ConfirmButton/>
            <Search />
            <CoinGrid />
        </Page>
    )
}