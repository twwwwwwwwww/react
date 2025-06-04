import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <header>
      <h1><Link to={"/"}>Logo</Link></h1>

      <ul>
        <li><Link to={"/about"}>어바웃</Link></li>
      </ul>
    </header>
  )
}

export default Head
