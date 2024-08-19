import React, { useEffect, useState } from 'react'
import Products from '../Components/Products';

function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <circles
            height={"120"}
            width={"120"}
            color="rgb(121,0,29)"
            visible={true}
          />
        </div>
      ) : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <Products products={productItem} />
              ))
            : null}
        </div>}
      </div>
  )
}

export default Home