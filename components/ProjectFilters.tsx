"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All Projects", color: "blue" },
  { id: "backend", label: "Backend", color: "purple" },
  { id: "frontend", label: "Frontend", color: "cyan" },
  { id: "ml", label: "ML/AI", color: "green" },
];

export default function ProjectFilters() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeCategory === category.id
              ? `bg-${category.color}-600 text-white shadow-lg scale-105`
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
