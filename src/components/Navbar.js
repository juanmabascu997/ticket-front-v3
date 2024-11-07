import { Link } from 'react-router-dom';
import { styles } from '../styles/styles';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          <Link to="/" className={`${styles.navHeadText} transition`}>
            EventosApp
          </Link>
        </div>
        <div className="space-x-6 flex">
          <Link to="/register" className={`${styles.navSubText} text-white`}>
            Registrarse
          </Link>
          <Link to="/contact" className={`${styles.navSubText} text-white`}>
            Contacto
          </Link>
          <Link to="/about" className={`${styles.navSubText} text-white`}>
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
