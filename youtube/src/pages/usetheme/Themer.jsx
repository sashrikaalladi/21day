
import React from 'react'
import { createContext,useState } from 'react';

const ThemeChanger=createContext();
const Themer = ({children}) => {
    const [them,SetThem]=useState();
  return (
    <div>
        <ThemeChanger.Provider value={[them,SetThem]}>
            {children}
        </ThemeChanger.Provider>
    </div>
  )
}
export {Themer,ThemeChanger}