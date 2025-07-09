export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        About This Project
      </h1>

      <p className="text-gray-700 mb-4">
        This is a simple e-commerce frontend application built with{" "}
        <strong>React</strong>. It simulates key shopping functionalities such
        as browsing products, viewing details in a modal, adding/removing items
        to/from the cart — all running entirely in the browser with no backend.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Product Features
      </h2>
      <p className="text-gray-700 mb-4">
        The homepage showcases a list of demo products, each displaying an
        image, name, price, and description. Users can:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Search products by name or description</li>
        <li>Sort products by price (Low → High, High → Low)</li>
        <li>Add products directly to the cart</li>
        <li>Click to view full product details.</li>
      </ul>

      <p className="text-blue-700 font-semibold">
        Note: Click anywhere on a product card in the <strong>Home</strong> page
        to see full product details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Technologies Used
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>React Functional Components and Hooks</li>
        <li>React Router for client-side routing</li>
        <li>React Context API for managing cart state globally</li>
        <li>Tailwind CSS for responsive and modern UI design</li>
      </ul>

      <p className="mt-6 text-sm text-gray-600 italic">
        Developed by: <strong>Nasimul Arafin Rounok</strong>
      </p>
    </div>
  );
}
