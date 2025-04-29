import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import FilterBar from "./components/FilterBar";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(details);
        setFiltered(details);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredData = pokemons;
    if (search) {
      filteredData = filteredData.filter((p) =>
        p?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (type !== "All") {
      filteredData = filteredData.filter((p) =>
        p?.types?.some((t) => t.type.name === type.toLowerCase())
      );
    }
    setFiltered(filteredData);
  }, [search, type, pokemons]);

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500 text-xl">Failed to fetch Pokémon.</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Header />
        <FilterBar search={search} setSearch={setSearch} type={type} setType={setType} />
      </motion.div>

      {filtered.length === 0 ? (
        <p className="text-center mt-20 text-lg">No Pokémon found.</p>
      ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PokemonCard pokemon={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
