import React from 'react'
import BasketItem from './BasketItem'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Basket = ({currentBasket, user, removeFromBasket}) => {
  
    const basketNodes = currentBasket.map((item, i) => <BasketItem removeFromBasket={removeFromBasket} index={i} key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}></BasketItem>)
    const total = currentBasket.reduce((acc, item) => {return acc+item.price}, 0)
  
    return (<DisplayBasket>
    <BasketTitle>
    {user}'s Basket  <FontAwesomeIcon icon={faShoppingBag}/> {currentBasket.length}
    </BasketTitle>
    <BasketDropdown>
    {basketNodes}
    {currentBasket.length ? <p>Total: £{total}</p> : null}
    </BasketDropdown>
    </DisplayBasket>
  )
}

const DisplayBasket = styled.div`
  
`;

const BasketTitle = styled.h5`
  
`;
const BasketDropdown = styled.div`
    display:none;
    position: absolute;
    background-color: #ffffff;
    color: black;
    border: 5px solid black;
    ${DisplayBasket}:hover & {
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;


export default Basket