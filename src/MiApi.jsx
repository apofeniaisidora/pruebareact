import { useState, useEffect } from "react";
import './App.css';

const MiApi = () => {
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");
  const [orden, setOrden] = useState("ascendente");

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemones(data.results);
    }

    obtenerPokemones();
  }, [])

  const filtrarPokemones = pokemones.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()));

  const ordenarPokemones = () => {
    const ordenado = [...pokemones].sort((a, b) => {
      if (orden === "ascendente") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setPokemones(ordenado);
  };

  return (
    <div>
      <input type="text" name="Busqueda" placeholder="Buscar" onChange={(e) => setSearch(e.target.value)} value={search} />
      <button onClick={() => {
        setOrden(orden === "ascendente" ? "descendente" : "ascendente");
        ordenarPokemones();
      }}>Ordenar</button>
      <ul className="lista">
        {filtrarPokemones.map((pokemon) => (<li key={pokemon.name} className="item">{pokemon.name}</li>))}
      </ul>
    </div>
  )
}

export default MiApi;
