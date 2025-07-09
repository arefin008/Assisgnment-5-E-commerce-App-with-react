import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty.
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.title}</span>
              </td>
              <td className="p-2">${item.price.toFixed(2)}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="p-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-right text-xl font-semibold text-blue-600">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
