import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";

export default function Home() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filtered = productsData
    .filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/2"
        />
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
            </Link>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
