import React from 'react'
import Item from './Item'
import styled from 'styled-components';

const ItemList = ({items, addToBasket}) => {


    const itemNodes = items.map((item, i) => <Item addToBasket={addToBasket} key={item.id} index={i} name={item.name} price={item.price} imageUrl={item.imageUrl}></Item>)
  
    return (
        <Wrapper>
        {itemNodes}
        </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    background-color: #9DA2AB;
    justify-content:space-around;
    padding: 25px;
`;

export default ItemList