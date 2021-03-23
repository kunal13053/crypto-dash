import React from 'react'
import styled from 'styled-components'
import {backgroundColor2, fontSize2} from '../Shared/Styles'
import {AppContext} from '../App/AppProvider'
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`

const SearchInput = styled.input`
    ${backgroundColor2}
    color: #1163cf
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // Get all coin symbols
    let coinSymbols = Object.keys(coinList)
    // get all coin name and map symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringsToSearch = coinSymbols.concat(coinNames)
    let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string)

    let filteredCoins = _.pickBy(coinList, (result, symkey) => {
        let coinName = result.CoinName
        if(inputValue === '') {
            setFilteredCoins(null)
        }
        return (_.includes(fuzzyResults, symkey) || _.includes(fuzzyResults, coinName))
    })
    setFilteredCoins(filteredCoins)
    
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value
    handleFilter(inputValue, coinList, setFilteredCoins)    
}

export default function () {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => 
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
                </SearchGrid>
            }
        </AppContext.Consumer>
    )
}