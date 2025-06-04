import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const menu = [
    {
      id: 1,
      name: "조니워커 블루라벨",
      category: "블렌디드",
      price: '178,000원',
      text: '조니워커 블루라벨 입니다.',
      img: "/img/item1.jpg"
    }, {
      id: 2,
      name: "글렌피딕 18 Vat",
      category: "싱글몰트",
      price: '98,000원',
      text: '글렌피딕 18 Vat 4 Perpetual 입니다.',
      img: "/img/item2.jpg"
    },
    {
      id: 3,
      name: "카발란 비노바리끄 솔리스트",
      category: "싱글몰트",
      price: '190,995원',
      text: '카발란 비노바리끄 솔리스트',
      img: "/img/item3.jpg"
    },
    {
      id: 4,
      name: "닷사이 23 우드케이스",
      category: "사케",
      price: '72,000원',
      text: '닷사이 23 우드케이스 720ml',
      img: "/img/item4.jpg"
    },
    {
      id: 5,
      name: "발베니 클래식",
      category: "싱글몰트",
      price: '77,600원',
      text: '발베니 클래식 70cl.',
      img: "/img/item5.jpg"
    },
    {
      id: 6,
      name: "잭다니엘 젠틀맨잭",
      category: "버번",
      price: '6,660원',
      text: '잭다니엘 젠틀맨잭 200ml.',
      img: "/img/item6.jpg"
    }, {
      id: 7,
      name: "양하 몽지람",
      category: "고량주",
      price: '102,660원',
      text: '양하 몽지람 M6 플러스 500ml',
      img: "/img/item7.jpg"
    }
  ]

  console.log(menu)

  return (
    <div>
      {/* 
      key: 컴포넌트 배열을 렌더링 했을때 어떤 원소에 변동이 있었는지 알아내기위해 사용 
      
      유동적인 데이터를 다룰 때는 원소를 새로 생성,제거,수정 할 수있음 
      key가 없을 때는 vitrual dom 을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지
      */}

  
      <h1>주류 메뉴</h1>

      <div className='all_list'>
      {
        menu.map((menus)=>(
          <div className='list' key={menus.id}>
            <img src={menus.img} />
            <h3>{menus.name}</h3>
            <h4>{menus.price}</h4>
            <p>{menus.text}</p>
          </div>
        ))
      }
      </div>



    </div>
  )
}

export default App
