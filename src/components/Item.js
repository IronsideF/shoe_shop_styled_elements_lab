import React from 'react'
import styled from 'styled-components';

const Item = ({name, price, imageUrl, addToBasket, index}) => {
  
    const handleClick = (event) => {
        addToBasket(event.target.value)
    }
  
    return (
    <Wrapper>
        <ProductImage src={imageUrl}/>
        <Details>
            <ProductName>
            {name}
            </ProductName>
            <ProductPrice>
            £{price}
            </ProductPrice>
        </Details>
        <AddBasketButton value={index} handleClick={handleClick}>Add To Basket</AddBasketButton>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #A188A6;
    box-shadow: 20px 20px 20px #7F5A83;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* flex-grow:1; */
    &:hover {
        box-shadow: 20px 20px 20px #463248
    }

`

const ProductImage = styled.div`
    background-image: url(${props => props.src });
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 200px;
    border-radius:5px;

`;
const Details = styled.div`

`;
const ProductName = styled.h3`

`;
const ProductPrice = styled.p`

`;
const AddBasketButton = styled.button.attrs(props => ({onClick:props.handleClick, value:props.value}))`
    background-color: #0D324D;
    flex-grow:1;
    width: 100%;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px;
    &:hover {
       background-color: #020202;
       cursor: pointer;
    }
`;

export default Item;