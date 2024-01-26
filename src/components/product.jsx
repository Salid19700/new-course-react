export function Product(props) {
  return (
    <>
      <div className="container">
        <img
          className="photo-product"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUlJbPh0IS8P2wfc7Jxln60M6mpsHIdh9Kke6fBf9v3ZTmhA-QM609IY4jKvHn3yF6EQ&usqp=CAU"
          alt=""
        />
        <h1 className="title-product">S24Ultra5G</h1>
        <p className="des-product">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore a
          quidem illum saepe vero at natus reprehenderit?
          natus.
        </p>
        <img
          className="seller-logo"
          src="https://storage3.torob.com/backend-api/internet_shop/logos/13dea769fd4c.png"
          alt=""
        />
        <h3 className="seller-product">Ekala</h3>
        <h2 className="price-product">2120000</h2>
        <button className="increasement">+</button>
        <button className="decreasement">-</button>
      </div>
    </>
  );
}