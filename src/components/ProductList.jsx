import ProductCard from "./ProductCard";

function ProductList({ products, deleteProduct }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;