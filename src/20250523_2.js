import React, { useEffect, useState } from 'react'

// 함수형 컴포넌트에서 라이프사이클 주기위해서는 
// useEffect() 훅 을 사용 
// useEffect(()=>{},[])

const App = () => {

  let counter = 0
  let [count,setCount] = useState(0)

  console.log("시작")

  const Plus = ()=>{
   counter = counter + 1
   setCount(count+1) 
  }

  useEffect(()=>{
    console.log("useEffect")
  },[])

  useEffect(()=>{
    console.log("useEffect-2",count)
  },[count])

  return (
    <div>
      {console.log("리턴")}
      <h2>{count}</h2>
      <h2>{counter}</h2>
      <button type='button' onClick={Plus}>증가</button>
    </div>
  )
}

export default App
