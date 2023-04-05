import React, { useEffect, useState } from 'react';
import './State.css';

const State = () => {

    const [ data, setData ] = useState([]);

    const getCovidData = async () => {
        const resp = await fetch('https://data.covid19india.org/data.json');
        const json = await resp.json();
        // console.log('json', json.statewise);
        setData(json.statewise);
    }

    useEffect(()=> {
        getCovidData();
        // eslint-disable-next-line
    })

  return (
    <>
      <h1 className='text-center'><b>INDIA</b> COVID-19 Dashboard</h1>

      <div className="container">
      <table className="table table-striped mb-4 table-hover">
  <thead>
    <tr>
      <th scope="col">STATE</th>
      <th scope="col">CONFIRMED</th>
      <th scope="col">RECOVERED</th>
      <th scope="col">DEATHS</th>
      <th scope="col">ACTIVE</th>
      <th scope="col">UPDATED</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">

  {
    data.map((val, index)=> {
        return (
            <tr key={index}>
                <th scope="row">{val.state}</th>
                <td className='hover-effect'>{val.confirmed}</td>
                <td className='hover-effect'>{val.recovered}</td>
                <td className='hover-effect'>{val.deaths}</td>
                <td className='hover-effect'>{val.active}</td>
                <td className='hover-effect'>{val.lastupdatedtime}</td>
            </tr>
        )
    })
  }

  </tbody>
</table>
      </div>
    </>
  )
}

export default State
