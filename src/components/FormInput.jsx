import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

const FormInput = () => {
  const newClientSchema = Yup.object().shape({
    clientName: Yup.string()
      .min(3, "Client name is too short")
      .max(20, "Client name is too large")
      .required("Client name is required"),
    company: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.number()
      .typeError("Invalid Number")
      .integer("Invalid Number")
      .positive("Invalid Number"),
    notes: "",
  });

  const handleSubmit = (values) => {};

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Client
      </h1>
      <Formik
        initialValues={{
          clientName: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={newClientSchema}>
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's name"
                  name="clientName"
                />
                {errors.clientName && touched.clientName ? (
                  <Alert>{errors.clientName}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Company's name"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's email"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Phone
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's phone"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Client's notes"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value="Add Client"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormInput;
