import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const BasketItem = ({name, price, imageUrl, index, removeFromBasket}) => {
  const handleClick = (event) => {
    removeFromBasket(event.target.value)
  }
    return (
    <Wrapper>
        <ProductImage src={imageUrl}/>
        <Info>
            <ProductName>
            {name}
            </ProductName>
            <ProductPrice>
            £{price}
            </ProductPrice>
        </Info>
        <RemoveButton value={index} removeFromBasket={handleClick}><FontAwesomeIcon icon={faTrashCan} /></RemoveButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
align-items: center;
margin: 10px;
border: 2px black solid;
border-radius: 5px;
`;
const ProductImage = styled.img.attrs(props=>({src:props.src}))`
  height: 75px;
  width: 75px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`;
const ProductName = styled.p`
  margin:0;
`;
const ProductPrice = styled.p`
  margin:0;
  font-weight: bold;
  font-size: 12px;
`;
const RemoveButton = styled.button.attrs((props) => ({onClick:props.removeFromBasket, value:props.value}))`
    background-color: white;
    color: black;
    border: none;
    &:hover{
        cursor:pointer;
        color: red;
    }
`;

export default BasketItem