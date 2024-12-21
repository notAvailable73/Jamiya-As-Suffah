import NavBar from "./NavBar"
import EnglishLogo from 'src/assets/EnglishLogo.png';
export default function Header() {
    return (
        <header>
            <div className="top-bar">
                <div className="language-selection">
                    <a href="#">English</a> | <a href="#">বাংলা</a> | <a href="#">عربي</a>
                </div>
            </div>

            {/* Logo section */}
            <div className="logo-section">
                <img
                    src={EnglishLogo}
                    alt="Jamia As-Suffah, Bogura"
                    className="logo-image"
                />
            </div>

            <NavBar />
        </header>
    )
}