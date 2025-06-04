import React,{Component} from 'react'


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      count:0,
      qqqq:10,
    }
    console.log("constructor")
  }

  Plus = ()=>{
   this.setState({count: this.state.count+1})
   this.setState({qqqq: this.state.qqqq-1})
   console.log("Plus", this.state)
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate" ,this.state)
  }

  componentWillUnmount(){
    console.log("끝")
  }

  render(){
    console.log("render")
    return(
      <div>
        <h2>클래스형컴포넌트</h2>
        <h3>{this.state.count},{this.state.qqqq}</h3>
        <button type='button' onClick={this.Plus}>증가</button>
        <Box num={this.state.count} qqq={this.state.qqqq}/>
      </div>
    )
  }

}



class Box extends Component{
  render(){
    return(
      <div>
        <h2>box</h2>
        <h3>{this.props.num},{this.props.qqq}</h3>
      </div>
    )
  }
}

export default App