import React from 'react';
import './Bascet.css';

export default function Bascet(props) {
   return(
      <div>
         <div className="bascet">
            <h2>Корзина</h2>
         </div>
         <p className="bascet__total-price">Общая стоимость: <span className="bascet__total-price--color">$ {props.TotalPrice}</span></p>
         <div className="bascet-block">
            {
               props.card.map((book, i) => {
                  return(
                     <div className="bascet__book" key={i}>
                        <img className="book__img" src={book.img} alt={book.name}/>
                        <div className="bascet__text">
                           <h3 className="bascet__title">{book.name}</h3>
                           <h4 className="bascet__price">Цена: ${book.price}</h4>
                        </div>
                        <button className="bascet__btn" onClick={() => {props.removeProduckBascet(book)}}>Удалить</button>
                     </div>
                  )
               })
            }  
         </div>
      </div>
   )
}
