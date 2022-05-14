
import './App.css';
import { useState } from 'react';

const items = [
  {
    img:"450 x 300",
    name:"Fancy Product",
    rating:"⭐⭐⭐⭐",
    price:"$40.00 - $80.00",
    btn:"Add to cart"
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
    btn:"Add to cart"
  }
]

const PAGE_Products = 'products';
const PAGE_Cart = 'cart' ;
const PAGE_Home = 'home'
const PAGE_About = 'about'
function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_Home)
  const [products] = useState(items)

  const addToCart = (product) => {
    setCart([...cart, {...product }])
  };

  const removeFromCart = (productRemove) => {
    setCart(cart.filter(product => product !== productRemove))
  }


  const navigateTo = (page) => {
    setPage(page)
  }

  const renderHome = () => (
    <>
<div className='homepage' onClick={() => setShow2(false)}>
<h2>Welcome to shopping App</h2>
    <p>Click Here to Start <b>SHOPPING</b> Now! <br></br> ↓</p>

    <button className='btnstart' onClick={() => navigateTo(PAGE_Products)}>All Products</button>
</div>
    <div className='second' onClick={() => setShow2(false)} >
        <h1 className='p1'>Shop in Style</h1>
        <p className='p2'>with this shop homepage</p>
      </div>
    </>
  )

  const renderAbout = () => (
    <>
    <h2 className='about'>It is a shopping Homepage Project</h2>
    </>
  )


  const renderProducts = () => (
    <>
      

      <div className='third' onClick={() => setShow2(false)}>
        
        {products.map((i,index) => (
    <div className='item' key={index}>
      <section className='img'>{i.img}<p>{i.dis}</p></section>
      <p className='h1'>{i.name}</p>
      <p>{i.rating}</p>
      <div className='sale-price'>
        <p className='sale'>{i.sale}</p>
        <p>{i.price}</p>
      </div>
      <button onClick={() => addToCart(i) } className='btn2'>{i.btn}</button>
    </div>
  ))} 
      </div></>
  )

  const renderCart = () => (
    <>
      <div className='third' onClick={() => setShow2(false)}>
        
        {cart.map((i,index) => (
    <div className='item' key={index}>
      <section className='img'>{i.img}<p>{i.dis}</p></section>
      <p className='h1'>{i.name}</p>
      <p>{i.rating}</p>
      <div className='sale-price'>
        <p className='sale'>{i.sale}</p>
        <p>{i.price}</p>
      </div>
      <button onClick={() => removeFromCart(i) } className='btn2'>Remove</button>
    </div>
  ))} 
      </div></>
  )

  return (
    <div className="App">
      <div>
      <div className='first' >  
      <div className='left'>
      <button className='header'>Start Shopping</button>
      <button className='btn1'onClick={() => navigateTo(PAGE_Home)}>Home</button>
      <button className='btn1' onClick={() => navigateTo(PAGE_About)}>About</button>
      <div className='head'>
      <button className='drop btn1' onClick={() => setShow2(!show2)}>Shop▽</button>
      {show2 ? <div className='opt'>
      <button className='opts' onClick={() => navigateTo(PAGE_Products)}>All Products</button>
      <hr></hr>
      <button className='opts'>Popular</button>
      <button className='opts'>New Arrivals</button>
      </div> : ""}
      </div>
      </div>
      <div className='right' onClick={() => setShow2(false)}>
      <button className='cart head btn1' onClick={() => navigateTo(PAGE_Cart)}><i class="fa fa-shopping-cart"></i>Cart<span className='count'>{cart.length}</span> </button>
        </div>
      </div>
      
      
      <div className='first-low'>  
      <div className='left'>
      <button className='header'>Start Shopping</button>
      </div >
      <button onClick={() => setShow(!show)}><i class="fa fa-bars"></i></button>
      </div>
      { show ? <div className='right-low'>
    <button className='btn3' onClick={() => navigateTo(PAGE_Home)}>Home</button>
    <button className='btn3'onClick={() => navigateTo(PAGE_About)}>About</button>

    <button className='btn3' onClick={() => setShow1(!show1)}>Shop▽</button>
    {
      show1 ? <div className='opt1'>
      <button className='opts1' onClick={() => navigateTo(PAGE_Products)}>All Products</button>
      <hr></hr>
      <button className='opts1'>Popular</button>
      <button className='opts1'>New Arrivals</button>
      </div> : ""
    }

<button className='cart1 btn3' onClick={() => navigateTo(PAGE_Cart)}><i class="fa fa-shopping-cart"></i>Cart<span className='count'>{cart.length}</span></button>
      </div> : ""} 
      
      {page === PAGE_Home && renderHome()}
      {page === PAGE_About && renderAbout()}
      {page === PAGE_Products && renderProducts()}
      {page === PAGE_Cart && renderCart()}
      <footer>Copyright © Nishant Phule 2022</footer>
    </div>
    </div>
  );
}



export default App;



