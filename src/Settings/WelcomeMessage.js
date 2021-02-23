import React from 'react'
// import styled, {css} from 'styled-components'
import {AppContext} from '../App/AppProvider'

// eslint-disable-next-line
export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) => 
                firstVisit ? <div>
                    Welcome to CryptoDash, Please select your favorite coins to begin. {' '}
                </div> : null
            }
        </AppContext.Consumer> 
    )
}