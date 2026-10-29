import ProductoCard from "./components/ProductoCard";

function App() {
  return(
    <main>
      <h1>Café Aroma</h1>
      <section className="tarjetas">
        <ProductCard nombre="Cappuchino" descripcion="Cafe a base de espresso y leche vaporizada" precio={7500}/>
        <ProductoCard nombre="Chocolate" descripcion="Cacao al 80% de pureza con almendras" precio={8500}/>
        <ProductoCard nombre="Pandebono" descripcion="Recien horneado" precio={3500}/>
      </section>
    </main>
  )
}

export default App