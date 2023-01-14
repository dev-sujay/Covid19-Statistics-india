import React, { useState } from 'react'
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import States from '../components/States'
import StatesData from '../components/StatesData'


const Details = () => {
  const [Data, setData] = useState({});
  const [stateData, setStateData] = useState({
    confirm: "10747",
    cured: "10618",
    death: 129,
    slno: 1,
    state: "Andaman and Nicobar Islands",
    total: 21494
  });


  const indiaData = {
    method: 'GET',
    url: 'https://covid-19-india2.p.rapidapi.com/details.php',
    headers: {
      'X-RapidAPI-Key': 'daf1e1518dmsh2c2f5d2c3d5204ep17123ejsn3bc645cb368d',
      'X-RapidAPI-Host': 'covid-19-india2.p.rapidapi.com'
    }
  };

  const { data, refetch } = useQuery(["covid19data"], () => {
    return axios.request(indiaData).then((res) => {
      setData(res.data)
      return res.data
    })
  })

  return (
    <div className="details-page">
      <States
        Data={Data}
        setStateData={setStateData}
        refetch={refetch}
        stateData={stateData}
      />
      <StatesData
        stateData={stateData}
      />
    </div>

  )
}

export default Details
