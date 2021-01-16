import React from 'react'
import {db, auth} from './Services/firebase'

class App extends React.Component{
  state = {
    houses: null
  }

  componentDidMount(){
    console.log('mounted')
    db.collection('Houses')
      .get()
      .then( snapshot => {
        const houses = []
        snapshot.forEach( doc => {
          const data = doc.data()
          houses.push(data)
        })
        this.setState({houses: houses })
        //console.log(snapshot)
      })
      .catch( error => console.log(error))
  }

  addNewHouse = () => {
    db.collection('Houses')
      .add({
        name: <input name='Name'/>,
        Attic: true,
        Floors: 2,
        Location: "Spot",
        Rooms: 4,
        Built: new Date()
      })
  }
  render(){
    return(
    <div className="App">
      <h1>Practice Houses</h1>
      <div>
        <p>Name: <input type='text' placeholder='JohnDoe' name='Name'/></p>
        <p>Attic: <input/></p>
        <p>FLoors: <input/></p>
        <p>Location: <input/></p>
        <p>Rooms: <input/></p>
        <p>Built: <input/></p>
      </div>
      
      <button onClick = {this.addNewHouse}>Add New House </button>
      {
        this.state.houses &&
        this.state.houses.map ( house => {
          return (
            <div>
              <p>{house.name} - {house.Floors} floors.</p>
              <p>Attic - {String(house.Attic)}. </p>
              <p>Built in: {house.Built.toDate().toString()}</p>
            </div>
          )
        })
      }
    </div>
    )
  }
}

export default App