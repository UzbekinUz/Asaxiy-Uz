//import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
function Navbar() {
    return ( 
        <nav>
           <div className="top">
           <div className="logo">
                <h1> <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" /></h1>
           </div>
           <div className="inp">
                <input type="text"  placeholder='Qidirish...'/>
                <button><i class="fa-solid fa-magnifying-glass"></i>Qidirish</button>
           </div>
           <div className="links">
                <div className="cont">
                <i class="fa-sharp fa-solid fa-credit-card"></i>
                <p>To'lov</p>
                </div>
                <div className="cont">
                <i class="fa-solid fa-truck"></i>
                <p>Truk</p>
                </div>
                <div className="cont">
                <i class="fa-solid fa-globe"></i>
                <p>
                    <select>
                        <option>O'zbekcha</option>
                        <option>Русский</option>
                    </select>
                </p>
                </div>
                <div className="cont">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Savatcha</p>
                </div>
                <div className="cont">
                <i class="fa-regular fa-heart"></i>
                <p>Sevimli</p>
                </div>
                <div className="cont">
                <i class="fa-regular fa-user"></i>
                <p>Profil</p>
                </div>
           </div>
           
           </div>
           <div className='line'></div>
           <div className="bottom">
                <div className="detal">
                    <div className="as">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                    <p>Barcha bo'limlar</p>
                </div>
                <div className="detal">
                    <button>11.11</button>
                </div>
                <div className="detal">
                    <p>Yangiliklar</p>
                </div>
                <div className="detal">
                    <p>Yangi kelganlar</p>
                </div>
                <div className="detal">
                    <p>Chegirmalar</p>
                </div>
                <div className="detal">
                    <p>Kitoblar</p>
                </div>
                <div className="detal">
                    <p>Telefonlar va Gadjetlar</p>
                </div>
                
           </div>
        </nav>
     );
}

export default Navbar;