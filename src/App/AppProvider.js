import React from 'react'
import _ from 'lodash'

const cc = require('cryptocompare')
cc.setApiKey('88a1ff7dc4b8482958c3561f6ddc880218294abc0b6bbda1b0b5f264b5cb56a6')

export const AppContext = React.createContext()

const MAX_FAVORITES = 10 

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "dashboard",
            favorites: ['BTC', 'ETH', 'XRP', 'LTC', 'DOGE', 'BTT', 'VET'],
            ...this.savedSettings(),
            setPage: this.setPage,
            removeCoin: this.removeCoin,
            addCoin: this.addCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins,
            coinList: ''
        }
    }

    componentDidMount = () => {
        this.fetchCoins()
        this.fetchPrices()
    }

    fetchCoins = async () => {
        let coinListValue = (await cc.coinList()).Data
        console.log('coinList : ', coinListValue)
        this.setState({
            coinList: coinListValue
        })
    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return
        let prices = await this.prices()
        this.setState({ prices })
    } 

    prices = async () => {
        let returnData = []
        for (let i = 0; i < this.state.favorites.length; i++) {
            try {
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
                returnData.push(priceData)
            } catch (err){
                console.log('Fetch price error : ', err)
            }
        }
        return returnData
    }

    addCoin = key => {
        let favorites = [...this.state.favorites]
        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key)
            this.setState({favorites})
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites]
        this.setState({favorites: _.pull(favorites, key)})
    }

    isInFavorites = key => _.includes(this.state.favorites, key)

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        }, () => {
            this.fetchPrices()
        })
        localStorage.setItem('cryptodash', JSON.stringify({
            favorites: this.state.favorites
        }))
    }

    savedSettings () {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptodash'))
        if (!cryptoDashData) {
            return {page: "settings", firstVisit: true}
        }
        let {favorites} = cryptoDashData;
        return {favorites}
    }

    setPage = page => this.setState({page})

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins })

    render () {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}