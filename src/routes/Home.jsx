import Carousel from "../components/Carousel";
import { styles } from "../styles/styles";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main className="flex-grow bg-gray-100">
        <motion.div>
          <Carousel />
        </motion.div>
      </main>
    </>
  );
}


export default Home;
