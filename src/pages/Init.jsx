import { useState, useEffect } from "react";
import { array } from "yup";
import Client from "../components/Client";

const Init = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const obtainClientsAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(url);
        const result = await response.json();
        setClients(result);
      } catch (error) {
        console.log(error);
      }
    };

    obtainClientsAPI();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete Client?");
    if (confirmDelete) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();

        const arrayClients = clients.filter((client) => client.id !== id);
        setClients(arrayClients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your clients</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Company</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              client={client}
              key={client.id}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Init;
