import React from 'react';

const Book = (props) => {
   return (
      <div className="book">
         <img className="book__img" src={props.ImgBook}/>
         <h3>{props.NameBook}</h3>
         <h4>$ {props.Price}</h4>
         <button onClick={props.OnClick}>{props.Btn}</button>
      </div>
   )
}

export default Book;