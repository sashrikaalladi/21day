import React from 'react'
import './Subscriptions.css'

 const Modeling = () => {
  const [data,setData]=React.useState(true);
  const handleOpen=()=>{
    setData(!data);
  };
  return (
    <div className='five' onClick={handleOpen}>
      {data?<h1>hai</h1>:null}
  
  //   </div>
  // <div className='five'>HAI</div>
   )
}

export default Modeling