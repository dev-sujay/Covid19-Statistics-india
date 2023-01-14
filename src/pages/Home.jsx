import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';



const Home = () => {
  const [totalData, settotalData] = useState({});
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
      settotalData(res.data[""])
      return res.data
    })
  })

  refetch()

  const confirmed = totalData?.confirm
  const cured = totalData?.cured
  const death = totalData?.confirm - totalData?.cured


  return (

    <div className='homepage'>
    <main>
      <Link to="/states" className='statewise-btn btn'>Statewise</Link>
      <a href='#' className='resources-btn btn'>resources</a>
      <div className="confirm-cases-container container">
        <h3>Confirmed</h3>
        <p>{confirmed ? confirmed : 0}</p>
      </div>
      <div className="discharged-cases-container container">
        <h3>discharged</h3>
        <p>{cured ? cured : 0}</p>
      </div>
      <div className="death-cases-container container">
        <h3>death</h3>
        <p>{death ? death : 0}</p>
      </div>
      <div className="total-vaccination-container container col-span">
        <h3>Vaccinated</h3>
        <p>10000000</p>
      </div>
      </main>
    </div>

  )
}

export default Home
