import React from 'react';
import './Header.css'

const Header = (props) => {
   return(
      <div className="header">
         <div className="header__logo">
            <img className="logo" src="https://cdn.freelance.ru/img/portfolio/pics/00/31/23/3220326.jpg?mt=4e05b6d3"/>
         </div>

         <ul className="nav">
            <li className="nav__link">Главная</li>
            <li className="nav__link" onClick={props.HomeBooks}> <strong>Все книги</strong> </li>
            <li className="nav__link">О нас</li>
            <li className="nav__link">Галерея</li>
         </ul>

        <div className="header__basket" onClick={props.changePage}><strong>Корзина: {props.card.length} шт.</strong></div>

      </div>
   )
}

export default Header;