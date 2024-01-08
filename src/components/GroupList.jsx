import React from 'react'
import "./GroupList.css"
import Group from "./Group.jsx";

const GroupList = () => {
  return (
    <div className='Main-Container'>
        <div className='heading'>
            <h1>Pocket Notes</h1>
        </div>
        <div className='group-list'>
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
        </div>
    </div>
  )
}

export default GroupList