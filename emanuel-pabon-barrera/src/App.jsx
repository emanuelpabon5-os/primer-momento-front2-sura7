import { productos } from "./data";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Catálogo TechStore</h1>
      

      <div class="container">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombreProducto={producto.nombreProducto}
            precio={producto.precio}
            categoria={producto.categoria}
            imagen={producto.imagen}
          />
        ))}
      </div>
         
    </div>
  );
}

export default App;