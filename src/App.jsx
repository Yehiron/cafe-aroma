import { useState, useEffect } from "react";
import ProductoCard from "./components/ProductoCard";

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    async function cargar() {
      const respuesta = await fetch('/menu.json')
      const datos = await respuesta.json()
      setProductos(datos)
    }
    cargar()
  }, [])

  return(
    <main>
      <h1>Cafe Arome</h1>
      <section className="tarjetas">{productos.map((producto) => (
        <ProductoCard
          key={producto._id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}</section>
    </main>
  )
}

export default App