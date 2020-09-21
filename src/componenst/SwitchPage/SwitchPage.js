import React , {useState}from 'react'
import Bascet from '../Bascet/Bascet';
import Books from '../Books/Books';
import Header from '../Header/Header';

const PAGE_PROD = 'products';
const PAGE_СARD = 'basket';

export default function SwitchPage() {

   const [card, setCard] = useState([]);
   const [page, setPage] = useState(PAGE_PROD);

   const addBookBasket = (book) => {
      setCard([...card, {...book}]);
   }

   const changePage = (nextPage) => {
		setPage(nextPage);
   }
   
   const removeProduckBascet = (productRemove) => {
		setCard(card.filter(product => product !== productRemove))
   }
  
   const TotalPrice = card.reduce((ac, currentValue) => ac + currentValue.price, 0)

   return (
      <div className="container">
         <Header  
          card={card} 
          changePage={() => {changePage(PAGE_СARD)}} 
          HomeBooks={() => {changePage(PAGE_PROD)}}/>

        {page === PAGE_PROD && <Books OnClick={addBookBasket}/>}
        {page === PAGE_СARD && <Bascet card={card} removeProduckBascet={removeProduckBascet} TotalPrice={TotalPrice}/>}
      </div>
   )
}
