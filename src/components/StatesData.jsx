import React from 'react'

const StatesData = (props) => {
  let newState = props.stateData?.state.includes('*') ? props.stateData?.state.replaceAll('*', '') : props.stateData?.state
  return (
    <div className='statesdata-container'>
      <h2> {newState ? newState : "Andhra Pradesh"}</h2>
      <span className='confirmed'>confirmed :</span> <span className='confirmed-data'> {props.stateData?.confirm ? props.stateData.confirm : 2339077}</span>
      <span className='death'>death :</span> <span className='death-data'>{props.stateData?.death ? props.stateData.death : 14733}</span>
      <span className='cured'>cured :</span> <span className='cured-data'>{props.stateData?.cured ? props.stateData.cured : 2324337}</span>
      <span className='total'>total :</span> <span className='total-data'>{props.stateData?.total ? props.stateData.total : 4678147}</span>
    </div>
  )
}

export default StatesData
