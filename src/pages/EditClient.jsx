import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput";

const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Fill all fields to edit client</p>
      {client?.clientName ? (
        <FormInput client={client} loading={loading} />
      ) : (
        <p>Invalid Client ID</p>
      )}
    </>
  );
};

export default EditClient;
