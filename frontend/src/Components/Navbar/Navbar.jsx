import './Navbar.css';
import logo from '../../Components/Assets/logo.png';
import cart from '../../Components/Assets/cart_icon.png';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPERS Destination</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button className="login-btn">Login</button>
            <img src={cart} alt="cart" />
        </div>
    </div>
  )
}

export default Navbar