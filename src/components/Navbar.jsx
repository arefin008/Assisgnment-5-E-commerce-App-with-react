import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "./../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        E-Shop
      </Link>
      <ul className="flex gap-6 text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="flex items-center hover:text-blue-500">
            <ShoppingCartIcon className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="ml-1 text-sm font-semibold bg-red-500 text-white px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
