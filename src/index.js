import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './componets/Header';
import Image from './componets/Image';
import Description from './componets/Description';
import Ingridients from './componets/Ingridients';

const root = ReactDOM.createRoot(document.getElementById('root'));

let product = {
  name: 'Лангустины по-Кировски',
  image: 'Langostinos.jpg',
  description: 'Почистить лангустина. Открыть пиво. Приятного аппетита!',
  ingridients: [
    {
      name: 'лангустины',
      quantity: '5-10 шт.'
    },
    {
      name: 'соль',
      quantity: '10-15 г.'
    },
    {
      name: 'лимон',
      quantity: '1-2 шт.'
    }
  ]
}

root.render(
  <div className='wrapper'>
    <div className='mobile-screen'>
      <Header text = {product.name}/>
      <Image image = {product.image}/>
      <Description description = {product.description}/>
      <p className='text-blue'>Необходимые ингридиенты:</p>
      <Ingridients ingridients = {product.ingridients}/>
    </div>
  </div>
);