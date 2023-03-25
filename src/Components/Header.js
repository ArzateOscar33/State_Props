import bannertec from '../Components/bannertec.jpg';
import './Estilos.css';

function Header() {
    return (
      <div className="Header">
       <img src={bannertec} alt="logo" className='logo'/>
      </div>
    );
  }
  
  export default Header;