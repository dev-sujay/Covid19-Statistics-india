import React from 'react'
import { stateNames } from './stateNames'

const States = (props) => {

    const showData = (state) => {
        props.refetch()
        props.setStateData( props.Data ? props.Data[state] : props.stateData)
        console.log(`Last Update : ${props.Data.lastupdated} `);
    }


    return (
        <div className='states-container'>
            {stateNames.map((state, index) => {
                let newState = state.includes('*') ? state.replaceAll('*', '') : state
                return <button key={index} onClick={() => showData(state)}>{newState}</button>
            })}
        </div>
    )
}

export default States
