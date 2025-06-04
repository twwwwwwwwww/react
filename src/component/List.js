import React from 'react'

const List = ({menus}) => {
  console.log(menus)
  return (
    <div className='allList'>
      {
        menus.map((menu)=>(
          <div key={menu.id}>
            <img src={menu.img} alt={menu.name}/>
            <h3>{menu.name}</h3>
            <h4>{menu.price}</h4>
            <p>{menu.text}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default List
