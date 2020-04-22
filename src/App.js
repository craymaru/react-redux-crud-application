import React from "react";

const App = () => {
  const profiles = [
    { name: "Cray", age: 3 },
    { name: "Sarah", age: 5 },
    { }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1,
  name: "noname"
}

export default App;
