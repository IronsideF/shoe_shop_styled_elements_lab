import React, {useState, useEffect} from 'react'
import Basket from "./components/Basket";
import ItemList from "./components/ItemList";
import styled from 'styled-components';

function App() {
  
  const [user, setUser] = useState('Keith')
  const [currentBasket, setCurrentBasket] = useState([])
  const [items, setItems] = useState([
    {
      name: 'Doc Martens' ,
      price: 200 ,
      imageUrl:'https://images.unsplash.com/photo-1616610868156-fe7e276de965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      id: 1,
    },
    {
      name: 'Timberland' ,
      price: 50 ,
      imageUrl:'https://images.unsplash.com/photo-1542834759-d9f324e7764b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      id: 2,
    },
    {
      name: 'Converse' ,
      price: 150 ,
      imageUrl: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80' ,
      id: 3,
    },
    {
      name: 'Vans' ,
      price: 135 ,
      imageUrl:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
      id: 4,
    },

  ])

  useEffect(() => {
    setCurrentBasket([])
  }, [user])

  const addToBasket = (index) => {
    const newItem = items[index]
    const copyBasket = [...currentBasket, newItem]
    setCurrentBasket(copyBasket)
  }
  const removeFromBasket = (index) => {
    const copyBasket = [...currentBasket]
    copyBasket.splice(index, 1)
    setCurrentBasket(copyBasket)
  }
  const changeUser = (event) => {
    event.preventDefault();
    setUser(event.target.username.value)
    event.target.reset();
  }
  
  return (
    <>
    <Header>
      <Title>
        Shoes Shoes Shoes
      </Title>
      <UserForm onSubmit={changeUser}>
        <input type="text" id='username' />
        <input type="submit" value='Login' />
      </UserForm>
      <Basket currentBasket={currentBasket} user={user} removeFromBasket={removeFromBasket}/>
    </Header>
    
    <ItemList items={items} addToBasket={addToBasket}/>
    </>
  );
}

const Header = styled.header`
  display: flex;
  background-color: #020202;
  color: #ffffff;
  justify-content: space-around;
`;
const Title = styled.h1`
  
`;
const UserForm = styled.form.attrs(props=>({onSubmit:props.onSubmit}))`
  
`;

export default App;
