import React from "react";
import { motion } from "framer-motion";

const types = [
  "All", "Grass", "Fire", "Water", "Bug", "Normal", "Poison", "Electric",
  "Ground", "Fairy", "Fighting", "Psychic", "Rock", "Ghost", "Ice", "Dragon",
];

export default function FilterBar({ search, setSearch, type, setType }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.input
        type="text"
        placeholder="Search Pokémon..."
        className="border border-gray-300 p-3 rounded-lg w-full sm:w-1/2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out shadow-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        whileFocus={{ scale: 1.05 }}
      />
      
      <motion.select
        className="border border-gray-300 p-3 rounded-lg w-full sm:w-1/4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out shadow-md"
        value={type}
        onChange={(e) => setType(e.target.value)}
        whileHover={{ scale: 1.05 }}
      >
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </motion.select>
    </motion.div>
  );
}
