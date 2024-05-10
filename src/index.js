import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './componets/Header';
import Image from './componets/Image';
import Description from './componets/Description';
import Ingredients from './componets/Ingredients';
import Contents from './componets/Contents';

const root = ReactDOM.createRoot(document.getElementById('root'));

let products = [{
  name: '"Лангустины по-Кировски"',
  image: 'Langostinos.jpg',
  description: 'Лангустины – крупные представители семейства ракообразных. В США их называют аргентинскими креветками, а в Европе – норвежскими омарами или лобстерами. Они крупнее обычных креветок, обладают сладковатым вкусом и очень полезны, потому что содержат много белка. Готовить их несложно, а важные дополнительные ингредиенты для них – лимон, соевый соус и чеснок. Приятного аппетита!',
  ingredients: [
    'лангустины',
    'соль',
    'лимон'
  ]
},
{
  name: '"Пельмени по-Мурмански"',
  image: 'pelmeni.webp',
  description: 'Рыбные пельмени с треской - блюдо русской кухни, а точнее северных ее провинций, где эта рыба широко распространена. Пельмени с начинкой из трески получаются очень нежными, очень вкусными, сочными и намного менее калорийными, чем с мясом. Пельмени с треской хорошо подать к столу с соусом из сметаны или подсоленного сливочного масла. Приятного аппетита!',
  ingredients: [
    'пельмени из трески',
    'соль',
    'сметана'
  ]
}
]

let product = products[1]
root.render(
  <div className='wrapper'>
    <div className='mobile-screen'>
      <Contents array = {products}/>
      <Header text = {product.name}/>
      <Image image = {product.image}/>
      <Description description = {product.description}/>
      <Ingredients array = {product.ingredients}/>
    </div>
  </div>
);