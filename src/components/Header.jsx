import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-center items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-lg shadow-lg">
      <motion.h1
        className="text-center text-4xl font-extrabold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Interactive Pokémon Explorer
      </motion.h1>
    </header>
  );
}
