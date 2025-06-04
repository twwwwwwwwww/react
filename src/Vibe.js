import React from 'react'
import "./style/vibe.css"
import Header from './component/Header'
import Dj from './component/Dj'

const Vibe = () => {
  return (
    <div>
      <Header/>
      <div className='contents'>
        <Dj/>     
      </div>
    </div>
  )
}

export default Vibe
