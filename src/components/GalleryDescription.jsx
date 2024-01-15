export default function GalleryDescription() {
  return (
    <section className="w-1/2 p-16" style={{ color: "black" }}>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        {`These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`}
      </p>
      <div className="counter-group">
        <div className="price">
          <h1>$125.00</h1>
          <h2>$250.00</h2>
        </div>

        <div className="count flex justify-between p-2 bg-slate-400">
          <h2>-</h2>
          <h2>0</h2>
          <h2>+</h2>
        </div>
        <button>Add to Cart</button>
      </div>
    </section>
  );
}
