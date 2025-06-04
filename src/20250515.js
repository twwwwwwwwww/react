import "./App.css"
import Item from "./component/Item";

function App() {
  
  const user = { name:"김태황" , age:40 }
  let box = "안녕"

  const Click = ()=>{
    alert("click");
  }

  return (
    <div>
      {/* 
      jsx 문법에서의 주석 처리방법 
      최상단이 하나만 단일경로 제작 
      
      단독태그사용시 태그끝에 / 추가!

      class 대신 className 사용 
      */}

      {/* 
      컴포넌트 

      코드 재사용성 (동일한 컴포넌트를 여러 곳에서 사용 할 수 있음.)
      유지보수 : 각 컴포넌트는 독립적으로 관리되므로 수정이 쉽다.
      효율성 : ui를 논리적인 단위로 나누어 개발 가능 

      함수형 컴포넌트
      JS 함수로 정의합니다.
      간단하고 가독성이 좋다.
      Hooks를 사용해 상태관리와 생명주기 기능을 구현 할 수 있다.

      컴포넌트 설계 원칙
      1. 단일 책임 원칙: 각 컴포넌트는 하나의 기능만 담당해야 함.
      2. 재사용성: 자주 사용되는 ui요소는 컴포넌트를 만들어 재사용.
      3. 계층 구조: 복잡한 ui를 작은 컴포넌트로 나누고 이를 조합하여 구성
      4. 함수명 첫글자는 반드시!!!!!!!! 대문자 작성 사용!!!! 
      5. 컴포넌트 사용 공간에 <함수명/>을 호출해서 사용

      새로운페이지 컴포넌트 제작시 필수!!
      
      전송(컴포넌트를 내보낼 장소에서 export)
      >> export default 함수이름

      호출(컴포넌트를 가져올 장소에서 import)
      >> import 함수이름 from "경로";

      */}


      {/* 
      
      Props 
      :부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터 함수의 매개변수

      - Props는 읽기전용, 자식 컴포넌트에서 직접 수정 불가
      - Props는 단방향 데이터 흐름을 유지해야함 데이터는 항상 부모에서 자식으로 흘러야함 
      - Props 타입을 검사하고 기본값을 설정하는것 이 좋음
      - 너무 많은 컴포넌트를 거쳐 props를 전달하는 것은 좋지않음
      - 함수를 props 전달할 때는 불필요한 렌더링을 피하기위해 useCallback 훅 등을 사용 해야함.

      */}

      <div className="allbox">
        <Box name="김태완" age={20} onClick={Click} />
        <Box name="김대왕" age={21} />
        <Box name="김투왕" age={22} />
        <Box name="김트황" age={24} />
        <Item user={user} box={box} />
        <Test> <Box name="김투힝" age={44}/> </Test>
      </div>

    </div>
  );
}


const Box =({name,age,onClick})=>{
  return(
    <div className="box" onClick={onClick}>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </p>
    </div>
  )
}


const Test = ({children})=>{
  console.log(children)
  return(
    <div>
      <h3>Test컴포넌트</h3>
      {children}
    </div>
  )
}







export default App;
