import NavBar from "./NavBar"
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
                    src="src\assets\EnglishLogo.png"
                    alt="Jamia As-Suffah, Bogura"
                    className="logo-image"
                /> 
            </div>

            <NavBar />
        </header>
    )
}