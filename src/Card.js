import React from "react"

export default ({
  card,
  canMoveRight,
  onMoveRight
}) => (
  <div className="card">
    <span className="title">{card.name}</span>
    {canMoveRight && <button onClick={onMoveRight}>{'>'}</button>}
  </div>
)
