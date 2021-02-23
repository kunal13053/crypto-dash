import React from 'react'

const cc = require('cryptocompare')
cc.setApiKey('88a1ff7dc4b8482958c3561f6ddc880218294abc0b6bbda1b0b5f264b5cb56a6')

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "dashboard",
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        console.log('In mount')
        this.fetchCoins()
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data
        console.log('coinList : ', coinList)
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptodash', JSON.stringify({
            test: 'hello'
        }))
    }

    savedSettings () {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptodash'))
        if (!cryptoDashData) {
            return {page: "settings", firstVisit: true}
        }
        return {}
    }

    setPage = page => this.setState({page})

    render () {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}