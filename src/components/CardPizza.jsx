import React from 'react';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card">
      <img src={img} alt={`${name}`} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-ingredients">Ingredientes: {ingredients.join(', ')}</p>
        <p className="card-price">Precio: ${price.toLocaleString()}</p>
        <div className="btn-group">
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-secondary">Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
