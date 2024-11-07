import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para el registro
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        className={`absolute inset-0 block`}
        style={{
          background: "rgba(178, 166, 255, 1)",
          transition: "background 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md bg-white space-y-4">
            <h2 className={styles.sectionHeadText}>Registrate a tu evento</h2>
            <form onSubmit={handleRegister} className="">
              <div className="grid grid-cols-2 gap-4 content-start pb-6" style={{justifyItems: 'start'}}>
                <p className="pr-2">Nombre</p> 
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="pr-2">Correo</p>
                <input
                  type="email"
                  placeholder="Correo Electronico"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="pr-2">Evento</p>
                <input
                  type="text"
                  placeholder="Evento"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="pr-2">Categoria</p>
                <input
                  type="text"
                  placeholder="Categoria"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="pr-2">Nro de Documento</p> 
                <input
                  type="number"
                  placeholder="Documento"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
