
import './App.css';
import { Item } from './Item';
import { useState } from 'react';

function App() {

  const items = [
    {
      img:"450 x 300",
      name:"Fancy Product",
      rating:"⭐⭐⭐⭐",
      price:"$40.00 - $80.00",
      btn:"View options"
    },
    {
      img:"450 x 300",
      dis:"Sale",
      name:"Special Item",
      rating:"⭐⭐⭐⭐⭐",
      sale:"$20.00",
      price:"$18.00",
      btn:"Add to cart"
    },
    {
      img:"450 x 300",
      dis:"Sale",
      name:"Sale Item",
      rating:"⭐⭐⭐",
      sale:"$50.00",
      price:"$25.00",
      btn:"Add to cart"
    },
    {
      img:"450 x 300",
      name:"Popular Item",
      rating:"⭐⭐⭐⭐⭐",
      price:"$40.00",
      btn:"Add to cart"
    },
    {
      img:"450 x 300",
      dis:"Sale",
      name:"Fancy Product",
      rating:"⭐⭐",
      sale:"$50.00",
      price:"$25.00",
      btn:"Add to cart"
    },
    {
      img:"450 x 300",
      name:"Fancy Product",
      rating:"⭐⭐⭐⭐",
      price:"$120.00 - $280.00",
      btn:"View options"
    }
  ]

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);


  return (
    <div className="App">
      <div className='first'>  
      <div className='left'>
      <button className='header'>Start Bootstrap</button>
      <button className='btn1'>Home</button>
      <button className='btn1'>About</button>
      <div className='head'>
      <button className='drop btn1' onClick={() => setShow2(!show2)}>Shop▽</button>
      {show2 ? <div className='opt'>
      <button className='opts'>All Products</button>
      <hr></hr>
      <button className='opts'>Popular</button>
      <button className='opts'>New Arrivals</button>
      </div> : ""}
      </div>
      </div>
      <div className='right'>
        <Cart/>
        </div>
      </div>
      <div className='first-low'>  
      <div className='left'>
      <button className='header'>Start Bootstrap</button>
      </div >
      <button onClick={() => setShow(!show)}><i class="fa fa-bars"></i></button>
      </div>
      { show ? <div className='right-low'>
    <button className='btn3'>Home</button>
    <button className='btn3'>About</button>

    <button className='btn3' onClick={() => setShow1(!show1)}>Shop▽</button>
    {
      show1 ? <div className='opt1'>
      <button className='opts1'>All Products</button>
      <hr></hr>
      <button className='opts1'>Popular</button>
      <button className='opts1'>New Arrivals</button>
      </div> : ""
    }

      <button className='cart1 btn3'><i class="fa fa-shopping-cart"></i> Cart 0</button>
      </div> : ""} 
      <div className='second'>
        <h1 className='p1'>Shop in Style</h1>
        <p className='p2'>with this shop homepage template</p>
      </div>

      <div className='third'>
        
        {items.map(i => <Item img={i.img} dis={i.dis} name={i.name} rating={i.rating} sale={i.sale} price={i.price} btn={i.btn} />)}

      </div>
      <footer>Copyright © Nishant Phule 2022</footer>
    </div>
  );
}

function Cart(){
  return(
    <button className='cart head btn1'><i class="fa fa-shopping-cart"></i> Cart 0</button>
  )
}

export default App;


