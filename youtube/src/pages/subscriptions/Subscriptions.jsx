import React, { useState } from 'react'
import './subscriptions.scss'

import { data } from './Images'
const Subscriptions = () => {
    const [data1] = useState(data);
    return (
        <>
            <div className='lib'>
                <ul className='lib-ul'>
                    {data1?.map((x) => (<li >
                        <img src={x.img} alt="" />
                        <p>{x.title}</p>
                        <p>{x.info}</p>
                        <button>Subscribe</button></li>))}
                </ul>
            </div>
        </>
    );
}

export default Subscriptions