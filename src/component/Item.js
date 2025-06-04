const Item =({user,box})=>{
  return(
    <div className="box">
      <h3>{user.name},{box}</h3>
      <h4>{user.age}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </p>
    </div>
  )
}

export default Item