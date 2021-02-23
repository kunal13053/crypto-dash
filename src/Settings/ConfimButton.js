import React from 'react'
import styled from 'styled-components'
import {AppContext} from "../App/AppProvider"

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
    // text-shadow: 0px 0px 90px #fff;
    // border: 1px solid white;
    // padding:20px;
`

const CenterDiv = styled.div`
    display: grid;
    justify-content: center
`

export default function() {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => 
                <CenterDiv>
                    <ConfirmButtonStyled onClick ={confirmFavorites}>
                        Confirm Favorites
                    </ConfirmButtonStyled>
                </CenterDiv>
            }
        </AppContext.Consumer>
    )
}
