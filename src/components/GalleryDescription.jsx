import { useState } from "react";

export default function GalleryDescription() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCartCount(cartCount + 1);
  };

  const handleMinus = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <section
      className="w-1/2 p-16 flex flex-col gap-6"
      style={{ color: "black" }}
    >
      <h2 className="text-base text-orange font-bold">Sneaker Company</h2>
      <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="text-base font-normal text-dark-grayish-blue">
        {`These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`}
      </p>

      <div className="price">
        <div className="price-main flex flex-row items-center gap-2">
          <h1 className="text-4xl font-bold">$125.00</h1>
          <p className="bg-orange/25 text-orange font-bold rounded-md p-1">
            50%
          </p>
        </div>
        <h2 className="text-base line-through text-dark-grayish-blue">
          $250.00
        </h2>
      </div>

      <div className="counter-group flex flex-row h-10 gap-3">
        <div className="count flex justify-between p-2 bg-slate-400 w-28 bg-grayish-blue">
          <button className="w-4 text-orange font-bold" onClick={handleMinus}>
            -
          </button>
          <h2 className="font-bold">{cartCount}</h2>
          <button className="w-4 text-orange font-bold" onClick={handleAdd}>
            +
          </button>
        </div>
        <button className="bg-orange text-white font-bold p-2">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
