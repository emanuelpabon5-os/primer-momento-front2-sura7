function ProductCard({ nombreProducto, precio, categoria, imagen }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <img src={imagen} alt={nombreProducto} width="100%" />
      <h3>{nombreProducto}</h3>
      <p>Precio: ${precio}</p>
      <p>Categoría: {categoria}</p>
    </div>
  );
}

export default ProductCard;