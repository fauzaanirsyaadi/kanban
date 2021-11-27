import React, { Component } from "react"
import { connect } from "react-redux"
import { v4 } from "uuid"
import { ADD, MOVE, LOAD } from "./actions"
import Column from "./Column"
import selector from "./selector"
import "./App.css";
import color from "color";

const DIRECTION_RIGHT = 1;

const columns = [
  {name: "Backlog"},
  {name: "In Progress"},
  {name: "Evaulation"},
  {name: "Done"}
]

class App extends Component {
  componentDidMount = () => this.props.load()


  render() {
    return (
      <div >
          <div className="col-md-12">
            <h1>Kanban Board</h1>
          </div>
        <hr/>
        {/* make form to add value to card */}


        <form onSubmit={e => {
          e.preventDefault()
          const name = e.target.elements.name.value
          if(!name) return
          const card = {
            name,
            id: v4(),
            columnIndex: 0
          }
          this.props.add(card)
          e.target.elements.name.value = ""
        }}>

          <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter a name for the new card"  />
          <button
              type="submit"
              className="button-add"
          >Add</button>
        </form>

      <div className="App" >

        {columns.map((column, columnIndex) => (
          <Column
            sty={column}
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            cards={this.props.cardsByColumn[columnIndex]}

            onMoveRight={cardId => this.props.move(columnIndex, cardId, DIRECTION_RIGHT)}
            />
        ))}
      </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cardsByColumn: selector(columns, state) }
}

const mapDispatchToProps = (dispatch) => ({
  add: (card) => dispatch({type: ADD, card}),
  move: (columnIndex, cardId, direction) => dispatch({type: MOVE, columnIndex, cardId, direction}),
  load: () => dispatch({type: LOAD}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
