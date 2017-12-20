import React, { Component } from "react"
import SystemCard from "./components/SystemCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import systems from "./systems.json"
import "./App.css"

class App extends Component {
  state = {
    systems
  }

  handleClick = clicked => {
    this.setState({ status: true })
    if(!clicked) {
      this.setState({
        random: this.randomize(),
        score: this.state.score + 1,
        topScore: Math.max(this.state.score + 1, this.state.topScore)
      })
      return true
    } else {
      this.setState({
        status: false,
        score: 0
      })
      return false
    }
  }

  randomize = () => {
    let num = Array.from(Array(systems.length), (_,x) => x)
    let rand, rNum = [], objArray = []
    while (num.length){
      rand = Math.floor(Math.random()*num.length)
      rNum.push(num.splice(rand,1)[0])
    }
    rNum.forEach(i => objArray.push(systems[i]))
    return objArray
  }

  // removeSystem = id => {
  //   const systems = this.state.systems.filter(system => system.id !== id);
  //   this.setState({ systems });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Systems List</Title>
        {this.state.systems.map(system => (
          <SystemCard
            removeSystem={this.removeSystem}
            id={system.id}
            key={system.id}
            name={system.name}
            image={system.image}
            generation={system.generation}
            release={system.release}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
