import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Evento de Música',
    description: 'Disfruta de un concierto inolvidable',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2022/06/285557901_143363378275626_3451845811215161109_n-1210x642.jpg',
  },
  {
    id: 2,
    title: 'Evento de Música',
    description: 'Disfruta de un concierto inolvidable',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2022/06/285557901_143363378275626_3451845811215161109_n-1210x642.jpg',
  },
  {
    id: 3,
    title: 'Evento de Música',
    description: 'Disfruta de un concierto inolvidable',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2022/06/285557901_143363378275626_3451845811215161109_n-1210x642.jpg',
  },
  {
    id: 4,
    title: 'Evento de Música',
    description: 'Disfruta de un concierto inolvidable',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2022/06/285557901_143363378275626_3451845811215161109_n-1210x642.jpg',
  }
  // Puedes agregar más eventos aquí
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  //   }, 2200); 
  //   return () => clearInterval(interval);
  // }, []);

  // const backgroundColors = [
  //   'rgba(178, 166, 255, 1)',
  //   'rgba(223, 217, 255, 1)',
  //   'rgba(168, 184, 232, 1)',
  // ];


  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#2e4068]">
        <motion.div>
          {/* <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          /> */}
        </motion.div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <motion.div className="max-w-md p-6 rounded-lg shadow-md bg-white bg-opacity-70">
          <p className={`${styles.sectionHeadText} text-white`}>Bienvenido, estás a solo un paso de tu momento!</p>
          <button
            onClick={() => {navigate("/register")}}
            className={`${styles.sectionSubText} w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition`}
          >
            Inscribirte
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Carousel;
