import FormInput from "../components/FormInput";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill all fields to add new client</p>
      <FormInput />
    </>
  );
};

export default NewClient;
