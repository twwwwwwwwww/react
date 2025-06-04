import React, { useState } from 'react'
import List from './component/List';
import Nav from './component/Nav';
import "./App.css"


const App = () => {
  const menus = [
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
    },{
      id: 8,
      name: "양하 몽지람",
      category: "고량주",
      price: '102,660원',
      text: '양하 몽지람 M6 플러스 500ml',
      img: "/img/item7.jpg"
    }
  ]

  // 상태관리 
  const [state ,setState] = useState({category:'전체', W_id:null}); 

  // 카테고리 필터링
  const filterMenu = state.category === "전체" ? menus : menus.filter((menu)=>menu.category === state.category)

  // 카테고리 중복제거
  const categories = ['전체', ...new Set(menus.map((menu)=>menu.category))]
  console.log(categories)


  //선택한 테이터 가져오기
  const selectW = menus.find((menu)=>menu.id === state.W_id )
  console.log(selectW)

  //상태변경 핸들러
  const setSelectedCategory = (category)=> setState((prev)=>({...prev,category}))

  return (
    <div>
      <h1>주류 메뉴</h1>
      <div className='nav'>
            <Nav categories={categories} SelectedCategory={state.category} onSelectCategory={setSelectedCategory}/>
      </div>


      <div>
        <List menus={filterMenu}/>
      </div>
      
    </div>
  )
}

export default App
