import React, {useState} from 'react';
import './Books.css'

const Books = (props) => {
   const [books] = useState([
		{ name: 'Гарри Поттер: Философский камень', 
		  price: 20, 
		  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/35adecc0-d758-497e-9f7c-a01adfba9ed6/300x450'
		},
		{ name: 'Зеленая Миля', 
		  price: 18, 
		  img: 'https://s1.livelib.ru/boocover/1003823201/o/57e3/Stiven_King__Zelenaya_milya.jpeg'
      },
      { name: 'Унесенные ветром', 
		  price: 40, 
		  img: 'https://s1.livelib.ru/boocover/1003634473/o/3ca5/Margaret_Mitchell__Unesennye_vetrom.jpeg'
      },
      { name: 'Властелин колец: Возвращение короля', 
		  price: 55, 
		  img: 'https://s1.livelib.ru/boocover/1002924319/o/cad9/Dzhon_R._R._Tolkin__Vlastelin_Kolets._Vozvraschenie_korolya.jpeg'
      },
      { name: 'Крестный отец', 
		  price: 100, 
		  img: 'https://s1.livelib.ru/boocover/1000494838/o/3bad/Mario_Pyuzo__Krestnyj_otets.jpeg'
		},
  ])

   return(
      <div className="books">
         {
            books.map((book, i) => {
               return(
                  <div className="book" key={i}>
                     <img className="book__img" src={book.img} alt={book.name}/>
                     <h3 className="book__titel">{book.name}</h3>
                     <h4 className="book-price">Цена: ${book.price}</h4>
                     <button className="btn" onClick={() => {props.OnClick(book)}}>Добавить в корзину</button>
                  </div>
               )
            })
         }
      </div>
   )
}

export default Books;