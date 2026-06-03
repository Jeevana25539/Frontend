function ProductCard({ product, deleteProduct }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <h4>₹{product.price}</h4>

      <button
        className="delete-btn"
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProductCard;