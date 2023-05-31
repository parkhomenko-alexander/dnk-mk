import React from 'react';

interface ICard {
    quote:string
}

const Card = ({ quote } : ICard) => {
  return (
    <div className="card">
      <p>{quote}</p>
    </div>
  );
};

export default Card;