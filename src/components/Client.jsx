import { useNavigate } from "react-router-dom";

const Client = ({ client }) => {
  const navigate = useNavigate();

  const { clientName, company, phone, email, notes, id } = client;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{clientName}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{company}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
          onClick={() => navigate(`/clients/${id}`)}>
          View
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">
          Edit
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
