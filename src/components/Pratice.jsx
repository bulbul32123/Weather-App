import React, { useState } from 'react'

export default function Pratice() {
    const [data, setdata ] =  useState('Click here ⏬');
const ClickMe = ()=>{
    (data === 'Bulbul Islam 💯') ? setdata('Bulbul Howlader 😄') :setdata('Bulbul Islam 💯')
}
  return (
    <>
     <h4> {data} </h4> 
     <button onClick={ClickMe}>Click</button>
    </>
  )
}
