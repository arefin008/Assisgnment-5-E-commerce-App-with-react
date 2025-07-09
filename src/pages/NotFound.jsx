import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Back to Home
      </Link>
    </div>
  );
}
