import React, { useEffect, useState } from 'react'
import Weathercss from './Weather.css'
export default function Weather() {
  const [city, setcity] = useState(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3869dd8fbb6b6898f771cc67763a388`
      const respon = await fetch(url)
      const responjson = await respon.json()
      setcity(responjson.main)
    }
    fetchApi()
  }, [search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className='inputFeild'
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>
        {!city ? (
          <p className='errorMsg'>Data not Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className='location'>
                <i className="fas fa-solid fa-street-view" id='icons'></i> {search}
              </h2>
              <h1 className='temp'>
                {city.temp}°cel
              </h1>
              <h3 className='tempmin_max'>
              Min:{city.temp_min}°cel || max : {city.temp_max}°cel
              </h3>
              <h3 className='tempmin_max'>
              pressure:{city.pressure} p || humidity: {city.humidity}
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  )
}
