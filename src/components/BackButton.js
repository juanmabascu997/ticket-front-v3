import { useNavigate } from 'react-router-dom';

export default function BackButton({ label = 'Volver', className = '' }) {
  const navigate  = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`p-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition ${className}`}
    >
      {label}
    </button>
  );
}
