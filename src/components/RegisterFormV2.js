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
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <motion.div
        style={{
          background: "rgb(46 64 104)",
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-white p-6`}>Registrate a tu <span className={`text-[#dfd9ff]`}>evento</span></h2>
      </motion.div>

      <motion.div
        style={{
          background: "rgb(46 64 104)",
          width: '100%'
        }}
      >
        <div className="inset-0 flex w-full h-full flex-col text-center" style={{
          background: "rgba(178, 166, 255, 1)",
        }}>
          <div className="mr-10 p-6 shadow-md bg-white w-full h-full flex justify-center content-center flex-wrap">
            <form onSubmit={handleRegister} className="">
              <div
                className="grid grid-cols-2 gap-4 content-start pb-6"
                style={{ justifyItems: "start" }}
              >
                <div className="flex content-center flex-wrap">
                    <p>Nombre</p>
                </div>
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex content-center flex-wrap">
                <p>Correo</p>
                </div>
                <input
                  type="email"
                  placeholder="Correo Electronico"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex content-center flex-wrap">
                <p>Evento</p>
                </div>
                <input
                  type="text"
                  placeholder="Selecciona un Evento"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex content-center flex-wrap">
                <p>Categoria</p>
                </div>
                <input
                  type="text"
                  placeholder="Categoria"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex content-center flex-wrap">
                <p>Nro de Documento</p>
                </div>
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
                className="w-full bg-[#2e4068] text-white p-2 rounded hover:bg-blue-600 transition"
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
