import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ViewClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  const { clientName, company, email, phone, notes } = client;
  const { id } = useParams();

  useEffect(() => {
    const obtainClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    };
    obtainClientAPI();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p className="font-black text-2xl mt-6">No results founded...</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        View Client: {clientName}
      </h1>
      <p className="mt-3">Client Information</p>
      {clientName && (
        <p className="text-2xl text-gray-600 mt-10">
          <span className="text-gray-800 uppercase font-bold">Client: </span>
          {clientName}
        </p>
      )}

      {email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
      )}

      {phone && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {phone}
        </p>
      )}

      {company && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Company: </span>
          {company}
        </p>
      )}

      {notes && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notes: </span>
          {notes}
        </p>
      )}
    </div>
  );
};

export default ViewClient;
