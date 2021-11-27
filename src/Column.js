import React from "react"
import Card from "./Card"

export default ({
  column,
  cards,
  columnIndex,
  onMoveRight,
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {cards.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        card={card}
        cardIndex={cardIndex}
        canMoveRight={columnIndex !== 3}
        onMoveRight={() => onMoveRight(card.id)}
      />
    ))}
    </div>
)
