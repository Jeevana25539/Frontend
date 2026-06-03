import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      price: 25000,
    },
  ]);

  const [search, setSearch] = useState("");

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <SearchBar search={search} setSearch={setSearch} />

        <ProductForm addProduct={addProduct} />

        <h2>All Products ({filteredProducts.length})</h2>

        <ProductList
          products={filteredProducts}
          deleteProduct={deleteProduct}
        />
      </div>
    </>
  );
}

export default Home;
