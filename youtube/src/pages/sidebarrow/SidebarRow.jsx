import React from 'react'
import './SidebarRow.css';
function SidebarRow({ Icon, title }) {
  return (
    <div className='sidebarRow'>
      <Icon className={"siderow __icon"} />
      <h1 className='siderow__title'>{title}</h1>
    </div>
  );
}
export default SidebarRow;