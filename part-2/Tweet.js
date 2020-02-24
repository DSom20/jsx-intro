function Tweet(props) {
  const container = {
    border: "2px solid black",
    margin: "10px 0px"
  }
  const messageStyle = {

    color: "red",
    margin: "15px"
  }

  const title = {
    margin: "10px 0px"
  }

  const messageContainer = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  }
  
  return <div style={container}>
    <div style={title}>
      <b>{props.username}</b>
      <i> {props.date} </i>
    </div>
    <div style={messageContainer}>
      <p style={messageStyle}>
        {props.message}
      </p>
    </div>

  </div>
}