export function Item({ img, dis, name, rating, sale, price, btn }) {
  return (
    <div className='item'>
      <section className='img'>{img}<p>{dis}</p></section>

      <p className='h1'>{name}</p>
      <p>{rating}</p>
      <div className='sale-price'>
        <p className='sale'>{sale}</p>
        <p>{price}</p>
      </div>

      <button className='btn2'>{btn}</button>
    </div>
  );
}
