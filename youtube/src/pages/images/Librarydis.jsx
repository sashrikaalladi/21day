import React,{useState} from 'react'
 import './Library.css'

import {data} from './Images'
const Librarydis = () => {
    const[data1]=useState(data);
  return (
    <>
    <div className='lib'>
    {data1?.map((x)=>(<div className='lib-div'><img src={x.img} alt=""/></div>))}</div></>
  )
}

export default Librarydis