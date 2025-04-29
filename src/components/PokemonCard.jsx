import React from "react";
import { motion } from "framer-motion";

// Map for type colors
const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  bug: "bg-lime-500",
  normal: "bg-gray-300",
  poison: "bg-purple-400",
  ground: "bg-yellow-700",
  fairy: "bg-pink-400",
  fighting: "bg-orange-700",
  psychic: "bg-pink-600",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-600",
  ice: "bg-blue-300",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  flying: "bg-sky-400",
};

export default function PokemonCard({ pokemon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300"
    >
      <motion.img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mb-3"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <h2 className="text-lg font-semibold capitalize mb-1">{pokemon.name}</h2>
      <p className="text-sm text-gray-500 mb-2">ID: #{pokemon.id}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {pokemon.types?.map((t) => (
          <span
            key={t.type.name}
            className={`text-white text-xs px-2 py-1 rounded-full font-medium ${
              typeColors[t.type.name] || "bg-gray-400"
            }`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
